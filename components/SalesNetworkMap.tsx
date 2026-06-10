'use client';

import { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import { CITY_COORDS, PARTNERS } from '@/lib/salesNetworkData';

const ICON_SIZE = 38;
const LOGO_SIZE = 28;
const RADIUS = 10;

/**
 * Renders the marker as a canvas image (white rounded rect + logo).
 * Returned canvas is passed to map.addImage() — rendered on the WebGL canvas,
 * so it can never drift the way HTML markers do.
 */
function buildMarkerCanvas(logo: HTMLImageElement): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = ICON_SIZE * 2; // 2× for retina
  canvas.height = ICON_SIZE * 2;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(2, 2);

  // Drop shadow
  ctx.shadowColor = 'rgba(0,0,0,0.18)';
  ctx.shadowBlur = 7;
  ctx.shadowOffsetY = 2;

  // White rounded rect
  ctx.beginPath();
  ctx.moveTo(RADIUS, 0);
  ctx.lineTo(ICON_SIZE - RADIUS, 0);
  ctx.quadraticCurveTo(ICON_SIZE, 0, ICON_SIZE, RADIUS);
  ctx.lineTo(ICON_SIZE, ICON_SIZE - RADIUS);
  ctx.quadraticCurveTo(ICON_SIZE, ICON_SIZE, ICON_SIZE - RADIUS, ICON_SIZE);
  ctx.lineTo(RADIUS, ICON_SIZE);
  ctx.quadraticCurveTo(0, ICON_SIZE, 0, ICON_SIZE - RADIUS);
  ctx.lineTo(0, RADIUS);
  ctx.quadraticCurveTo(0, 0, RADIUS, 0);
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();

  // Clear shadow before logo
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  const off = (ICON_SIZE - LOGO_SIZE) / 2;
  ctx.drawImage(logo, off, off, LOGO_SIZE, LOGO_SIZE);

  return canvas;
}

export default function SalesNetworkMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let destroyed = false;
    let mapInstance: import('maplibre-gl').Map | null = null;

    async function init() {
      const ml = await import('maplibre-gl');
      if (destroyed || !containerRef.current) return;

      const map = new ml.Map({
        container: containerRef.current,
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        // Center of Serbia
        center: [20.9, 44.1],
        zoom: 6.8,
        scrollZoom: true,
        attributionControl: false,
      });

      mapInstance = map;

      map.on('load', () => {
        if (destroyed) return;

        const logo = new Image();
        logo.onload = () => {
          if (destroyed) return;

          // Register the canvas image as a MapLibre sprite
          const canvas = buildMarkerCanvas(logo);
          const imageData = canvas.getContext('2d')!.getImageData(0, 0, canvas.width, canvas.height);
          map.addImage('partner-pin', imageData, { pixelRatio: 2 });

          // Build GeoJSON points for every city that has at least one partner
          const features = Object.entries(CITY_COORDS)
            .filter(([city]) => PARTNERS.some(p => p.cities.includes(city)))
            .map(([city, [lng, lat]]) => ({
              type: 'Feature' as const,
              geometry: { type: 'Point' as const, coordinates: [lng, lat] },
              properties: { city },
            }));

          map.addSource('partners', {
            type: 'geojson',
            data: { type: 'FeatureCollection', features },
          });

          // Symbol layer — rendered on the WebGL canvas, never drifts
          map.addLayer({
            id: 'partner-pins',
            type: 'symbol',
            source: 'partners',
            layout: {
              'icon-image': 'partner-pin',
              'icon-size': 1,
              'icon-anchor': 'bottom',
              'icon-offset': [0, -4],
              'icon-allow-overlap': true,
              'icon-ignore-placement': true,
            },
          });
        };
        logo.src = '/logo-clean.png';
      });
    }

    init();

    return () => {
      destroyed = true;
      mapInstance?.remove();
      mapInstance = null;
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
