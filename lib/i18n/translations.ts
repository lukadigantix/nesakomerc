export const locales = ['sr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'sr';

export const translations = {
  sr: {
    hero: {
      headline1: 'Toplota koja ukrašava',
      headline2: 'vaš prostor',
      cta: 'Pogledajte proizvode',
      about: 'O nama',
    },
    aboutMap: {
      items: [
        {
          label: '30 godina iskustva',
          text: 'Ponosni na kvalitet visokog standarda, dajemo garanciju na funkcionalnost i izdržljivost.',
        },
        {
          label: 'Kontrola kvaliteta',
          text: 'Zahvaljujući sopstvenim procesima upravljanja kvalitetom, naš stručni kadar garantuje kvalitet.',
        },
        {
          label: 'Regionalni lider',
          text: 'Nastojimo da konstantno pratimo razvoj modernih tehnologija savremenog globalnog tržišta.',
        },
        {
          label: 'Sopstvena proizvodnja',
          text: 'Celokupan proces proizvodnje odvija se u našim pogonima, što nam daje potpunu kontrolu nad kvalitetom.',
        },
      ],
    },
    highlights: {
      items: [
        {
          category: 'Iskustvo',
          stat: '+30',
          subtitle: 'Godina iskustva',
          description:
            'Od 1994. godine gradimo partnerstva zasnovana na kvalitetu. Svaki radijator koji napusti naš pogon nosi garanciju funkcionalnosti i dugotrajnosti.',
        },
        {
          category: 'Kvalitet',
          stat: '100%',
          subtitle: 'Kontrola kvaliteta',
          description:
          'Svaki proizvod prolazi višestepenu kontrolu pre isporuke. Sopstveni procesi upravljanja kvalitetom osiguravaju da standard nikada ne padne ispod najvišeg nivoa.',
        },
        {
          category: 'Distribucija',
          stat: '7+',
          subtitle: 'Zemalja u regionu',
          description:
            'Naši proizvodi prisutni su na tržištima širom Balkana. Pratimo razvoj globalnih tehnologija i primenjujemo ih u lokalnom kontekstu.',
        },
      ],
    },
    nav: {
      home: 'Naslovna',
      production: 'Proizvodnja',
      products: 'Proizvodi',
      retail: 'Maloprodaja',
      salesNetwork: 'Prodajna mreža',
      about: 'O nama',
      contact: 'Kontakt',
      catalogues: 'Katalozi',
    },
    aboutSection: {
      pill: 'Naša kompanija',
      headlinePre: 'Mi proizvodimo',
      headlineAccent: 'TOPLOTU',
      body1:
        'Dugogodišnjim radom stvorili smo kompaniju koja je vodeći proizvođač grejnih tela kako u jugoistočnoj tako i u centralnoj Evropi. Ugled i tradicija obavezuju nas da nastavimo put ka ostvarivanju postavljenih ciljeva.',
      body2:
        'Znanje i iskustvo zaposlenih, savremena tehnologija rada i unapređeni procesi proizvodnje omogućavaju da plasiramo proizvode koji imaju prepoznatljiv kvalitet.',
      tagline: 'Kod nas je uvek toplo.',
      stats: [
        { value: '1994', label: 'Godina osnivanja' },
        { value: 'Trstenik', label: 'Sedište' },
        { value: '+30', label: 'Godina iskustva' },
        { value: '7+', label: 'Zemalja u regionu' },
      ],
    },
    carousel: {
      slides: [
        {
          title: 'NK LUX',
          description:
            'Premium radijator za one koji očekuju više — prefinjena forma, vrhunska emisija toplote i elegancija koja traje u svakoj prostoriji.',
          cta: 'Pogledajte proizvod',
          href: '/sr/proizvodi/nk-lux',
        },
        {
          title: 'NK TERM 22',
          description:
            'Izrađen od čeličnih šavnih cevi (Č 0146), materijala DC01 po EN 10305-3 / EN 10305-5, „D" profila 30×40 mm i rebara od okruglih cevi Ø22 mm. Grejni fluid je topla voda, predaja toplote konvekcijom i zračenjem. Četiri priključka 1/2″.',
          cta: 'Pogledajte proizvod',
          href: '/sr/proizvodi/nk-term',
        },
        {
          title: 'NK STANDARD',
          description:
            'Cevasti radijator koji zauzima vrlo malo prostora. Osnovna namena je zagrevanje vazduha u kupatilima, ali je moguća primena i u radnim, dnevnim, dečijim sobama, kuhinjama i poslovnim prostorijama.',
          cta: 'Pogledajte proizvod',
          href: '/sr/proizvodi/nk-standard',
        },
      ],
    },
    advantages: {
      pill: 'Naše prednosti',
      title: 'Samostalna proizvodnja radijatora',
      lead: 'Kako je u pitanju namenska izrada, po želji kupaca radijatore izrađujemo u različitim dimenzijama i bojama. Mogu se poručiti sa dodatnim elektro-grejačem.',
      beforeLabel: 'Izazov',
      afterLabel: 'Rešenje',
      items: [
        {
          category: 'Prilagodba',
          title: 'Dimenzije i boje po meri',
          before: 'Standardne dimenzije ne odgovaraju prostoru, a skupa adaptacija je neophodna.',
          after: 'Radijator izrađen tačno po vašim merama, dostupan u svim bojama RAL palete.',
          metaKey: 'Paleta',
          metaValue: 'RAL standard',
          highlight: 'Po meri kupca',
        },
        {
          category: 'Proces',
          title: 'Kompletan proizvodni proces',
          before: 'Zavisnost od spoljnih dobavljača i nekontrolisani lanci isporuke.',
          after: 'Celokupna proizvodnja od sirovine do gotovog radijatora u našim pogonima.',
          metaKey: 'Lokacija',
          metaValue: 'Svilajnac',
        },
        {
          category: 'Inovacija',
          title: 'Zaštićen patent',
          before: 'Kopirana rešenja bez garancije originalnog dizajna i optimalne efikasnosti.',
          after: 'Inovativni dizajn zaštićen patentom koji osigurava optimalan prenos toplote.',
          metaKey: 'Status',
          metaValue: 'Patentirano',
          highlight: 'Originalni dizajn',
        },
        {
          category: 'Tehnika',
          title: 'Snaga od 500 do 2000 W',
          before: 'Ograničen opseg snage koji ne pokriva sve tipove prostorija.',
          after: 'Širok opseg snage prilagođen kupatilima, dnevnim sobama i kancelarijama.',
          metaKey: 'Opseg snage',
          metaValue: '500 – 2000 W',
          highlight: 'Svaki prostor',
        },
        {
          category: 'Montaža',
          title: 'Veoma jednostavna montaža',
          before: 'Složena ugradnja koja zahteva specijalizovane majstore i poseban alat.',
          after: 'Standardizovani priključci i uputstva — brza ugradnja bez specijalnog alata.',
          metaKey: 'Priključci',
          metaValue: '4 × 1/2"',
          highlight: 'Bez specijalnog alata',
        },
        {
          category: 'Kvalitet',
          title: 'Vrhunski kvalitet',
          before: 'Nekontrolisani procesi, visoka stopa reklamacija i neizvesna trajnost.',
          after: 'Višestepena kontrola od dimenzija do ispitivanja pod pritiskom pre svake otpreme.',
          metaKey: 'Reklamacije',
          metaValue: '< 1%',
          highlight: 'Garancija trajnosti',
        },
        {
          category: 'Sertifikati',
          title: 'Sertifikovani proizvodi',
          before: 'Neusaglašenost sa EU standardima otežava izvoz i smanjuje poverenje kupaca.',
          after: 'Svi relevantni evropski sertifikati — punopravna prisutnost na tržištu EU.',
          metaKey: 'Tržišta',
          metaValue: '7+ zemalja',
          highlight: 'EU sertifikat',
        },
        {
          category: 'Logistika',
          title: 'Napredan sistem prodaje i logistike',
          before: 'Dugi rokovi isporuke, loša komunikacija i nedostatak praćenja narudžbine.',
          after: 'Brza isporuka, transparentno praćenje i posvećen prodajni tim za svakog kupca.',
          metaKey: 'Podrška',
          metaValue: 'Svaki radni dan',
          highlight: 'Brza isporuka',
        },
        {
          category: 'Ekologija',
          title: 'Briga o životnoj sredini',
          before: 'Nekontrolisano zagađenje i rasipanje resursa tokom procesa proizvodnje.',
          after: 'Ekološki odgovorni procesi i materijali koji minimizuju uticaj na životnu sredinu.',
          metaKey: 'Standard',
          metaValue: 'ISO 14001',
          highlight: 'Zelena proizvodnja',
        },
      ],
    },
    retail: {
      label: 'Maloprodaja',
      title: 'Sve za vodovod i grejanje na jednom mestu',
      body: 'U našem maloprodajnom objektu možete pronaći kompletnu prateću opremu i materijal za vodovod i grejanje. Raspolažemo i modernom automatikom za grejanje koja vam omogućava da upravljate svojim grejanjem sa bilo koje udaljene lokacije.',
      cta: 'Posetite maloprodaju',
      categories: [
        'Vodovodni materijal',
        'Oprema za grejanje',
        'Oprema za kupatila',
      ],
    },
    partners: {
      label: 'Partneri',
      title: 'Naša prodajna mreža',
    },
    footer: {
      tagline: 'Kod nas je uvek toplo.',
      colNav: 'Navigacija',
      colContact: 'Kontakt',
      colLegal: 'Kompanija',
      phone: '+381 35 8814 077',
      email: 'office@nesa-komerc.com',
      address: 'Svilajnac, Srbija',
      pib: 'PIB: 101234567',
      mb: 'MB: 07654321',
      copyright: '© 2026 Neša Komerc d.o.o. Sva prava zadržana.',
      links: {
        privacy: 'Politika privatnosti',
        terms: 'Uslovi korišćenja',
      },
    },
    testimonials: {
      items: [
        {
          quote: 'Kvalitet Neša Komerc radijatora nadmašio je naša očekivanja.',
          body: 'Ugradili smo ih u više objekata i nijedna reklamacija za tri godine. Preporuka bez rezerve.',
          name: 'Marko Petrović',
          role: 'Izvršni direktor, Petrović Gradnja',
        },
        {
          quote: 'Saradnja koja traje već sedam godina.',
          body: 'Pouzdani rokovi isporuke i konstantan kvalitet proizvoda čine ih idealnim partnerom za sve naše projekte.',
          name: 'Jelena Nikolić',
          role: 'Arhitekta, Studio N',
        },
        {
          quote: 'Radijatori koji izgledaju i funkcionišu savršeno.',
          body: 'Klijenti redovno pitaju koji su brand — dizajn se uklapa u svaki enterijer, a grejanje je besprekorno.',
          name: 'Stefan Jovanović',
          role: 'Vlasnik, Sanus Enterijeri',
        },
      ],
    },
  },
  en: {
    hero: {
      headline1: 'Warmth that decorates',
      headline2: 'your space',
      cta: 'View products',
      about: 'About us',
    },
    aboutMap: {
      items: [
        {
          label: '30 years of experience',
          text: 'Proud of our high standards, we guarantee the functionality and durability of every product.',
        },
        {
          label: 'Quality control',
          text: 'Through our own quality management processes, our expert team ensures consistent excellence.',
        },
        {
          label: 'Regional leader',
          text: 'We continuously track advancements in modern technology across the global marketplace.',
        },
        {
          label: 'Own manufacturing',
          text: 'The entire production process takes place in our facilities, giving us full control over quality.',
        },
      ],
    },
    highlights: {
      items: [
        {
          category: 'Experience',
          stat: '+30',
          subtitle: 'Years of experience',
          description:
            'Since 1994 we have built partnerships grounded in quality. Every radiator leaving our facility carries a guarantee of performance and longevity.',
        },
        {
          category: 'Quality',
          stat: '100%',
          subtitle: 'Quality control',
          description:
            'Every product undergoes multi-stage inspection before delivery. Our internal quality management processes ensure standards never fall below the highest level.',
        },
        {
          category: 'Distribution',
          stat: '7+',
          subtitle: 'Countries in the region',
          description:
            'Our products are present across Balkan markets. We follow global technology trends and apply them in a local context.',
        },
      ],
    },
    nav: {
      home: 'Home',
      production: 'Production',
      products: 'Products',
      retail: 'Retail',
      salesNetwork: 'Sales Network',
      about: 'About Us',
      contact: 'Contact',
      catalogues: 'Catalogues',
    },
    aboutSection: {
      pill: 'Our Company',
      headlinePre: 'We produce',
      headlineAccent: 'WARMTH',
      body1:
        'Through decades of work we have built a company that is the leading manufacturer of heating elements in both South-Eastern and Central Europe. Our reputation and tradition compel us to continue the path towards achieving our goals.',
      body2:
        'The knowledge and experience of our employees, modern production technology and improved manufacturing processes allow us to deliver products with a recognisable standard of quality.',
      tagline: 'It’s always warm with us.',
      stats: [
        { value: '1994', label: 'Founded' },
        { value: 'Trstenik', label: 'Headquarters' },
        { value: '+30', label: 'Years of experience' },
        { value: '7+', label: 'Countries in region' },
      ],
    },
    retail: {
      label: 'Retail',
      title: 'Everything for plumbing & heating in one place',
      body: 'Our retail store carries a full range of accessories and materials for plumbing and heating systems. We also stock modern heating automation that lets you control your heating from any remote location.',
      cta: 'Visit our store',
      categories: [
        'Plumbing Materials',
        'Heating Equipment',
        'Bathroom Equipment',
      ],
    },
    partners: {
      label: 'Partners',
      title: 'Our sales network',
    },
    footer: {
      tagline: 'Where warmth meets quality.',
      colNav: 'Navigation',
      colContact: 'Contact',
      colLegal: 'Company',
      phone: '+381 35 8814 077',
      email: 'office@nesa-komerc.com',
      address: 'Svilajnac, Serbia',
      pib: 'VAT: 101234567',
      mb: 'Reg: 07654321',
      copyright: '© 2026 Neša Komerc d.o.o. All rights reserved.',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
      },
    },
    testimonials: {
      items: [
        {
          quote: 'The quality of Neša Komerc radiators exceeded our expectations.',
          body: 'We installed them across multiple buildings and had zero complaints in three years. Highly recommended.',
          name: 'Marko Petrović',
          role: 'CEO, Petrović Construction',
        },
        {
          quote: 'A partnership that has lasted seven years.',
          body: 'Reliable delivery times and consistent product quality make them the ideal partner for all our projects.',
          name: 'Jelena Nikolić',
          role: 'Architect, Studio N',
        },
        {
          quote: 'Radiators that look and perform perfectly.',
          body: 'Clients regularly ask what brand they are — the design fits every interior and the heating is flawless.',
          name: 'Stefan Jovanović',
          role: 'Owner, Sanus Interiors',
        },
      ],
    },
    carousel: {
      slides: [
        {
          title: 'NK LUX',
          description:
            'A premium radiator designed for those who expect more — refined lines, superior heat output and lasting elegance in every room.',
          cta: 'View product',
          href: '/en/products/nk-lux',
        },
        {
          title: 'NK TERM 22',
          description:
            'Made from welded steel pipes (Č 0146, DC01 to EN 10305-3 / EN 10305-5) with 30×40 mm "D" profiles and Ø22 mm round-tube fins. Hot water is the heating medium; heat transfer by convection and radiation. Four ½″ connections.',
          cta: 'View product',
          href: '/en/products/nk-term',
        },
        {
          title: 'NK STANDARD',
          description:
            'A tubular radiator with a compact footprint, engineered primarily for bathroom heating but equally at home in living rooms, children\'s rooms, kitchens and offices.',
          cta: 'View product',
          href: '/en/products/nk-standard',
        },
      ],
    },
    advantages: {
      pill: 'Our strengths',
      title: 'Independent radiator manufacturing',
      lead: 'As a custom manufacturer, we produce radiators in a wide range of dimensions and colours to suit each customer. An additional electric heater can be fitted on request.',
      beforeLabel: 'Challenge',
      afterLabel: 'Solution',
      items: [
        {
          category: 'Customisation',
          title: 'Custom dimensions & colours',
          before: 'Standard dimensions do not fit the space, and costly adaptation is required.',
          after: 'Radiator built to your exact measurements, available in every RAL palette colour.',
          metaKey: 'Palette',
          metaValue: 'RAL standard',
          highlight: 'Built to order',
        },
        {
          category: 'Process',
          title: 'Complete production process',
          before: 'Dependence on external suppliers and uncontrolled supply chains.',
          after: 'Entire production from raw material to finished radiator in our own facility.',
          metaKey: 'Location',
          metaValue: 'Svilajnac',
        },
        {
          category: 'Innovation',
          title: 'Protected patent',
          before: 'Copied solutions with no guarantee of original design or optimal efficiency.',
          after: 'Innovative patent-protected design ensuring optimal heat transfer.',
          metaKey: 'Status',
          metaValue: 'Patented',
          highlight: 'Original design',
        },
        {
          category: 'Technical',
          title: 'Power range 500–2000 W',
          before: 'Limited power range that does not cover all room types.',
          after: 'Wide power range suited to bathrooms, living rooms and offices alike.',
          metaKey: 'Power range',
          metaValue: '500 – 2000 W',
          highlight: 'Every room size',
        },
        {
          category: 'Installation',
          title: 'Very easy installation',
          before: 'Complex installation requiring specialist tradespeople and special tools.',
          after: 'Standardised connections and included instructions — fast, tool-free fitting.',
          metaKey: 'Connections',
          metaValue: '4 × 1/2"',
          highlight: 'No special tools',
        },
        {
          category: 'Quality',
          title: 'Premium quality',
          before: 'Uncontrolled processes, high complaint rates and uncertain longevity.',
          after: 'Multi-stage inspection from dimensional checks to pressure testing before every dispatch.',
          metaKey: 'Complaints',
          metaValue: '< 1%',
          highlight: 'Durability guaranteed',
        },
        {
          category: 'Certifications',
          title: 'Certified products',
          before: 'Non-compliance with EU standards hinders exports and reduces buyer confidence.',
          after: 'All relevant European certifications — full access to the EU market.',
          metaKey: 'Markets',
          metaValue: '7+ countries',
          highlight: 'EU certified',
        },
        {
          category: 'Logistics',
          title: 'Advanced sales & logistics',
          before: 'Long delivery times, poor communication and no order tracking.',
          after: 'Fast delivery, transparent tracking and a dedicated sales team for every order.',
          metaKey: 'Support',
          metaValue: 'Every business day',
          highlight: 'Fast delivery',
        },
        {
          category: 'Environment',
          title: 'Environmental responsibility',
          before: 'Uncontrolled pollution and resource waste during manufacturing.',
          after: 'Environmentally responsible processes and materials that minimise our footprint.',
          metaKey: 'Standard',
          metaValue: 'ISO 14001',
          highlight: 'Green production',
        },
      ],
    },
  },
};

export type Translations = typeof translations;
