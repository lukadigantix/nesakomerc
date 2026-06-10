'use client';

import { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

// Coordinates: Stevana Sinđelića 30, Svilajnac
const LNG = 21.197068;
const LAT = 44.236697;
const ZOOM = 13;

export default function ContactMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let destroyed = false;
    let mapInstance: import('maplibre-gl').Map | null = null;
    let markerInstance: import('maplibre-gl').Marker | null = null;

    async function init() {
      const maplibre = await import('maplibre-gl');
      if (destroyed || !containerRef.current) return;

      const map = new maplibre.Map({
        container: containerRef.current,
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [LNG, LAT],
        zoom: ZOOM,
        scrollZoom: true,
        attributionControl: true,
      });

      mapInstance = map;

      // Custom marker element — white rounded card with logo
      const el = document.createElement('div');
      el.style.cssText = `
        width:64px;height:64px;
        background:white;
        border-radius:18px;
        box-shadow:0 6px 28px rgba(0,0,0,0.18),0 2px 6px rgba(0,0,0,0.10);
        display:flex;align-items:center;justify-content:center;
        overflow:hidden;
        cursor:pointer;
      `;
      const img = document.createElement('img');
      img.src = '/logo-clean.png';
      img.width = 40;
      img.height = 40;
      img.alt = 'Neša Komerc';
      img.style.cssText = 'display:block;width:40px;height:40px;object-fit:contain;flex-shrink:0;';
      el.appendChild(img);

      const marker = new maplibre.Marker({ element: el, anchor: 'center' })
        .setLngLat([LNG, LAT])
        .addTo(map);

      markerInstance = marker;
    }

    init();

    return () => {
      destroyed = true;
      markerInstance?.remove();
      mapInstance?.remove();
      mapInstance = null;
      markerInstance = null;
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
