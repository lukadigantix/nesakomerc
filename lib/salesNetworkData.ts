export interface PartnerBranch {
  city: string;
  address?: string;
  phone?: string;
}

export interface Partner {
  id: string;
  name: string;
  address: string;
  phones: string[];
  email: string;
  /** All cities where this partner is present (including HQ city) */
  cities: string[];
  logo?: string;
  branches?: PartnerBranch[];
}

/** [lng, lat] — MapLibre uses [longitude, latitude] order */
export const CITY_COORDS: Record<string, [number, number]> = {
  Batajnica:          [20.2842, 44.9044],
  Beograd:            [20.4633, 44.8176],
  Čačak:              [20.3497, 43.8914],
  Kragujevac:         [20.9114, 44.0165],
  Kraljevo:           [20.6896, 43.7238],
  Kruševac:           [21.3286, 43.5837],
  Leskovac:           [21.9461, 42.9981],
  Loznica:            [19.2268, 44.5358],
  Niš:                [21.8958, 43.3209],
  'Novi Sad':         [19.8335, 45.2671],
  Obrenovac:          [20.2053, 44.6558],
  Subotica:           [19.6674, 46.1006],
  Svilajnac:          [21.1971, 44.2367],
  Užice:              [19.8485, 43.8558],
  Valjevo:            [19.8854, 44.2706],
  'Veliko Gradište':  [21.5201, 44.7545],
  Vranjić:            [21.9007, 42.5499],
  Zaječar:            [22.2744, 43.9053],
  Zemun:              [20.4023, 44.8417],
};

export const ALL_CITIES = [
  'Batajnica', 'Beograd', 'Čačak', 'Kragujevac', 'Kraljevo',
  'Kruševac', 'Leskovac', 'Loznica', 'Niš', 'Novi Sad',
  'Obrenovac', 'Subotica', 'Svilajnac', 'Užice', 'Valjevo',
  'Veliko Gradište', 'Vranjić', 'Zaječar', 'Zemun',
] as const;

export const PARTNERS: Partner[] = [
  {
    id: 'termovent',
    name: 'TERMOVENT',
    address: 'Gorjani bb, 31000 Užice, Srbija',
    phones: ['+381 31 546 636', '+381 31 546 778'],
    email: 'office@termovent.co.rs',
    cities: ['Užice', 'Niš', 'Kruševac', 'Kragujevac', 'Loznica', 'Beograd'],
  },
  {
    id: 'valdom',
    name: 'VALDOM',
    address: 'Železnik, Vodovodska 164e, 11250 Beograd',
    phones: ['011 258 13 64', '011 257 03 01'],
    email: 'prodaja@valdom.rs',
    logo: '/partner-valdom.png',
    cities: [
      'Beograd', 'Loznica', 'Leskovac', 'Kragujevac',
      'Veliko Gradište', 'Niš', 'Obrenovac', 'Svilajnac',
      'Batajnica', 'Vranjić',
    ],
  },
  {
    id: 'mijatov',
    name: 'MIJATOV',
    address: 'Združna 17, 21000 Novi Sad',
    phones: ['+381 21 6417-855'],
    email: 'office@grejanjemijatov.rs',
    cities: ['Novi Sad', 'Zemun', 'Niš'],
  },
  {
    id: 'pvf',
    name: 'PVF',
    address: 'Vodovodska 158, 11250 Beograd',
    phones: ['011 239 1534'],
    email: 'office@pvftraders.com',
    cities: ['Beograd', 'Užice', 'Niš', 'Kraljevo', 'Kragujevac', 'Valjevo'],
  },
  {
    id: 'valve-trade',
    name: 'VALVE TRADE',
    address: 'Dušana Petrovića Šaneta 1 sp. 4, 11130 Beograd',
    phones: ['022/481-389', '022/481-388'],
    email: 'dejan@valve.rs',
    cities: ['Beograd'],
  },
  {
    id: 'trougao',
    name: 'TROUGAO',
    address: 'Bulevar Oslobođenja 80, 32000 Čačak',
    phones: ['+381 (32) 373-204', '+381 (32) 375-188'],
    email: 'trougao@ptt.rs',
    cities: ['Čačak'],
  },
  {
    id: 'etaz',
    name: 'ETAŽ',
    address: 'Šumatovačka 2, 11224 Beograd-Vrčin',
    phones: ['069/8276211', '011/3973655'],
    email: 'office@etaz.co.rs',
    logo: '/partner-etaz.png',
    cities: ['Beograd'],
  },
  {
    id: 'gas-lider',
    name: 'GAS LIDER',
    address: 'Beogradska 132b, 11224 Vrčin, Beograd',
    phones: ['+381 11 8053-370'],
    email: 'office@gaslider.rs',
    logo: '/partner-gaslider.png',
    cities: ['Beograd', 'Niš', 'Novi Sad'],
    branches: [
      { city: 'Niš',      address: 'Dušana Popovića 22',             phone: '+381 18 323 0729' },
      { city: 'Novi Sad', address: 'Omladinskih radnih akcija 31',     phone: '+381 21 6419-139' },
    ],
  },
  {
    id: 'bravus',
    name: 'BRAVUS',
    address: 'Ivankovačka 8, 11000 Beograd',
    phones: ['065 26 28 000'],
    email: 'office@bravus.rs',
    cities: ['Beograd'],
  },
  {
    id: 'karika-promet',
    name: 'KARIKA PROMET',
    address: 'Marije Bursać 1, 24000 Subotica',
    phones: ['024 527 928'],
    email: 'karikapromet@gmail.com',
    cities: ['Subotica'],
  },
  {
    id: 'kgh',
    name: 'KGH',
    address: 'Stanoja Gačića 125, 19000 Zaječar',
    phones: ['+381 063/640-916'],
    email: 'office@kgh.co.rs',
    cities: ['Zaječar'],
  },
];
