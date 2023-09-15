export interface ElementDef {
  name: string
  atomic_mass: number
  number: number
  period: number
  group: number
  source: string
  summary: string
  symbol: string
  xpos: number
  ypos: number
  wxpos: number
  wypos: number
  'cpk-hex': string | null
  image: {
    title: string
    url: string
    attribution: string
  }
  block: string
}

/**
 * List of all elements, generated using https://github.com/Bowserinator/Periodic-Table-JSON
 */
export const elements: ElementDef[] = [
  {
    name: 'Hydrogen',
    atomic_mass: 1.008,
    number: 1,
    period: 1,
    group: 1,
    source: 'https://en.wikipedia.org/wiki/Hydrogen',
    summary:
      'Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.',
    symbol: 'H',
    xpos: 1,
    ypos: 1,
    wxpos: 1,
    wypos: 1,
    'cpk-hex': 'ffffff',
    image: {
      title: 'Vial of glowing ultrapure hydrogen, H2. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg',
      attribution:
        'User:Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hydrogen.php'
    },
    block: 's'
  },
  {
    name: 'Helium',
    atomic_mass: 4.0026022,
    number: 2,
    period: 1,
    group: 18,
    source: 'https://en.wikipedia.org/wiki/Helium',
    summary:
      'Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.',
    symbol: 'He',
    xpos: 18,
    ypos: 1,
    wxpos: 32,
    wypos: 1,
    'cpk-hex': 'd9ffff',
    image: {
      title: 'Vial of glowing ultrapure helium. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Helium-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/helium.php'
    },
    block: 's'
  },
  {
    name: 'Lithium',
    atomic_mass: 6.94,
    number: 3,
    period: 2,
    group: 1,
    source: 'https://en.wikipedia.org/wiki/Lithium',
    summary:
      'Lithium (from Greek:\u03bb\u03af\u03b8\u03bf\u03c2 lithos, "stone") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.',
    symbol: 'Li',
    xpos: 1,
    ypos: 2,
    wxpos: 1,
    wypos: 2,
    'cpk-hex': 'cc80ff',
    image: {
      title: '0.5 Grams Lithium under Argon. Original size of the largest piece in cm: 0.3 x 4',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/0.5_grams_lithium_under_argon.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lithium.php'
    },
    block: 's'
  },
  {
    name: 'Beryllium',
    atomic_mass: 9.01218315,
    number: 4,
    period: 2,
    group: 2,
    source: 'https://en.wikipedia.org/wiki/Beryllium',
    summary:
      'Beryllium is a chemical element with symbol Be and atomic number 4. It is created through stellar nucleosynthesis and is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements in minerals.',
    symbol: 'Be',
    xpos: 2,
    ypos: 2,
    wxpos: 2,
    wypos: 2,
    'cpk-hex': 'c2ff00',
    image: {
      title: 'Pure Beryllium bead, 2.5 grams. Original size in cm: 1 x 1.5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Beryllium_%28Be%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/beryllium.php'
    },
    block: 's'
  },
  {
    name: 'Boron',
    atomic_mass: 10.81,
    number: 5,
    period: 2,
    group: 13,
    source: 'https://en.wikipedia.org/wiki/Boron',
    summary:
      "Boron is a metalloid chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in both the Solar system and the Earth's crust. Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals.",
    symbol: 'B',
    xpos: 13,
    ypos: 2,
    wxpos: 27,
    wypos: 2,
    'cpk-hex': 'ffb5b5',
    image: {
      title: 'Pure Crystalline Boron, front and back side. Original size in cm: 2 x 3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Boron.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/boron.php'
    },
    block: 'p'
  },
  {
    name: 'Carbon',
    atomic_mass: 12.011,
    number: 6,
    period: 2,
    group: 14,
    source: 'https://en.wikipedia.org/wiki/Carbon',
    summary:
      'Carbon (from Latin:carbo "coal") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent\u2014making four electrons available to form covalent chemical bonds.',
    symbol: 'C',
    xpos: 14,
    ypos: 2,
    wxpos: 28,
    wypos: 2,
    'cpk-hex': '909090',
    image: {
      title: 'Element 6 - Carbon',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Pure_Carbon.png',
      attribution:
        'Texas Lane, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Nitrogen',
    atomic_mass: 14.007,
    number: 7,
    period: 2,
    group: 15,
    source: 'https://en.wikipedia.org/wiki/Nitrogen',
    summary:
      'Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System.',
    symbol: 'N',
    xpos: 15,
    ypos: 2,
    wxpos: 29,
    wypos: 2,
    'cpk-hex': '3050f8',
    image: {
      title: 'Vial of Glowing Ultrapure Nitrogen, N2. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Nitrogen-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/nitrogen.php'
    },
    block: 'p'
  },
  {
    name: 'Oxygen',
    atomic_mass: 15.999,
    number: 8,
    period: 2,
    group: 16,
    source: 'https://en.wikipedia.org/wiki/Oxygen',
    summary:
      'Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.',
    symbol: 'O',
    xpos: 16,
    ypos: 2,
    wxpos: 30,
    wypos: 2,
    'cpk-hex': 'ff0d0d',
    image: {
      title: 'Liquid Oxygen in a Beaker',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Liquid_oxygen_in_a_beaker_%28cropped_and_retouched%29.jpg',
      attribution: 'Staff Sgt. Nika Glover, U.S. Air Force, Public domain, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Fluorine',
    atomic_mass: 18.9984031636,
    number: 9,
    period: 2,
    group: 17,
    source: 'https://en.wikipedia.org/wiki/Fluorine',
    summary:
      'Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive:almost all other elements, including some noble gases, form compounds with fluorine.',
    symbol: 'F',
    xpos: 17,
    ypos: 2,
    wxpos: 31,
    wypos: 2,
    'cpk-hex': '90e050',
    image: {
      title: 'Liquid Fluorine at -196\u00b0C',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Fluoro_liquido_a_-196%C2%B0C_1.jpg',
      attribution:
        'Fulvio314, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Neon',
    atomic_mass: 20.17976,
    number: 10,
    period: 2,
    group: 18,
    source: 'https://en.wikipedia.org/wiki/Neon',
    summary:
      'Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.',
    symbol: 'Ne',
    xpos: 18,
    ypos: 2,
    wxpos: 32,
    wypos: 2,
    'cpk-hex': 'b3e3f5',
    image: {
      title: 'Vial of Glowing Ultrapure neon. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Neon-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/neon.php'
    },
    block: 'p'
  },
  {
    name: 'Sodium',
    atomic_mass: 22.989769282,
    number: 11,
    period: 3,
    group: 1,
    source: 'https://en.wikipedia.org/wiki/Sodium',
    summary:
      'Sodium /\u02c8so\u028adi\u0259m/ is a chemical element with symbol Na (from Ancient Greek \u039d\u03ac\u03c4\u03c1\u03b9\u03bf) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.',
    symbol: 'Na',
    xpos: 1,
    ypos: 3,
    wxpos: 1,
    wypos: 3,
    'cpk-hex': 'ab5cf2',
    image: {
      title: 'Na (Sodium) Metal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Na_%28Sodium%29.jpg',
      attribution:
        'The original uploader was Dnn87 at English Wikipedia., CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Magnesium',
    atomic_mass: 24.305,
    number: 12,
    period: 3,
    group: 2,
    source: 'https://en.wikipedia.org/wiki/Magnesium',
    summary:
      'Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (Group 2, or alkaline earth metals) of the periodic table:they each have the same electron configuration in their outer electron shell producing a similar crystal structure. Magnesium is the ninth most abundant element in the universe.',
    symbol: 'Mg',
    xpos: 2,
    ypos: 3,
    wxpos: 2,
    wypos: 3,
    'cpk-hex': '8aff00',
    image: {
      title: 'Magnesium crystals',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Magnesium_crystals.jpg',
      attribution:
        'Warut Roonguthai, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Aluminium',
    atomic_mass: 26.98153857,
    number: 13,
    period: 3,
    group: 13,
    source: 'https://en.wikipedia.org/wiki/Aluminium',
    summary:
      "Aluminium (or aluminum; see different endings) is a chemical element in the boron group with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic, ductile metal. Aluminium is the third most abundant element (after oxygen and silicon), and the most abundant metal, in the Earth's crust.",
    symbol: 'Al',
    xpos: 13,
    ypos: 3,
    wxpos: 27,
    wypos: 3,
    'cpk-hex': 'bfa6a6',
    image: {
      title: 'Pure aluminium foil. Original size in cm: 5 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Aluminium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/aluminium.php '
    },
    block: 'p'
  },
  {
    name: 'Silicon',
    atomic_mass: 28.085,
    number: 14,
    period: 3,
    group: 14,
    source: 'https://en.wikipedia.org/wiki/Silicon',
    summary:
      "Silicon is a chemical element with symbol Si and atomic number 14. It is a tetravalent metalloid, more reactive than germanium, the metalloid directly below it in the table. Controversy about silicon's character dates to its discovery.",
    symbol: 'Si',
    xpos: 14,
    ypos: 3,
    wxpos: 28,
    wypos: 3,
    'cpk-hex': 'f0c8a0',
    image: {
      title: 'Chunk of Ultrapure Silicon, 2 x 2 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Silicon.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/silicon.php'
    },
    block: 'p'
  },
  {
    name: 'Phosphorus',
    atomic_mass: 30.9737619985,
    number: 15,
    period: 3,
    group: 15,
    source: 'https://en.wikipedia.org/wiki/Phosphorus',
    summary:
      'Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms\u2014white phosphorus and red phosphorus\u2014but due to its high reactivity, phosphorus is never found as a free element on Earth. Instead phosphorus-containing minerals are almost always present in their maximally oxidised state, as inorganic phosphate rocks.',
    symbol: 'P',
    xpos: 15,
    ypos: 3,
    wxpos: 29,
    wypos: 3,
    'cpk-hex': 'ff8000',
    image: {
      title: 'Purple Phosphorus',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Phosphorus-purple.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/phosphorus.php'
    },
    block: 'p'
  },
  {
    name: 'Sulfur',
    atomic_mass: 32.06,
    number: 16,
    period: 3,
    group: 16,
    source: 'https://en.wikipedia.org/wiki/Sulfur',
    summary:
      'Sulfur or sulphur (see spelling differences) is a chemical element with symbol S and atomic number 16. It is an abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with chemical formula S8.',
    symbol: 'S',
    xpos: 16,
    ypos: 3,
    wxpos: 30,
    wypos: 3,
    'cpk-hex': 'ffff30',
    image: {
      title: 'Native Sulfur From Russia',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Native_sulfur_%28Vodinskoe_Deposit%3B_quarry_near_Samara%2C_Russia%29_9.jpg',
      attribution:
        'James St. John, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Chlorine',
    atomic_mass: 35.45,
    number: 17,
    period: 3,
    group: 17,
    source: 'https://en.wikipedia.org/wiki/Chlorine',
    summary:
      'Chlorine is a chemical element with symbol Cl and atomic number 17. It also has a relative atomic mass of 35.5. Chlorine is in the halogen group (17) and is the second lightest halogen following fluorine.',
    symbol: 'Cl',
    xpos: 17,
    ypos: 3,
    wxpos: 31,
    wypos: 3,
    'cpk-hex': '1ff01f',
    image: {
      title: 'A Sample of Chlorine',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Chlorine-sample-flip.jpg',
      attribution: 'Benjah-bmm27, Public domain, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Argon',
    atomic_mass: 39.9481,
    number: 18,
    period: 3,
    group: 18,
    source: 'https://en.wikipedia.org/wiki/Argon',
    summary:
      "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third most common gas in the Earth's atmosphere, at 0.934% (9,340 ppmv), making it over twice as abundant as the next most common atmospheric gas, water vapor (which averages about 4000 ppmv, but varies greatly), and 23 times as abundant as the next most common non-condensing atmospheric gas, carbon dioxide (400 ppmv), and more than 500 times as abundant as the next most common noble gas, neon (18 ppmv).",
    symbol: 'Ar',
    xpos: 18,
    ypos: 3,
    wxpos: 32,
    wypos: 3,
    'cpk-hex': '80d1e3',
    image: {
      title: 'Vial of glowing ultrapure argon. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Argon-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/argon.php'
    },
    block: 'p'
  },
  {
    name: 'Potassium',
    atomic_mass: 39.09831,
    number: 19,
    period: 4,
    group: 1,
    source: 'https://en.wikipedia.org/wiki/Potassium',
    summary:
      'Potassium is a chemical element with symbol K (derived from Neo-Latin, kalium) and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name is derived. In the Periodic table, potassium is one of seven elements in column (group) 1 (alkali metals):they all have a single valence electron in their outer electron shell, which they readily give up to create an atom with a positive charge - a cation, and combine with anions to form salts.',
    symbol: 'K',
    xpos: 1,
    ypos: 4,
    wxpos: 1,
    wypos: 4,
    'cpk-hex': '8f40d4',
    image: {
      title: 'Potassium Pieces',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Potassium.JPG',
      attribution:
        'Dnn87, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Calcium',
    atomic_mass: 40.0784,
    number: 20,
    period: 4,
    group: 2,
    source: 'https://en.wikipedia.org/wiki/Calcium',
    summary:
      "Calcium is a chemical element with symbol Ca and atomic number 20. Calcium is a soft gray alkaline earth metal, fifth-most-abundant element by mass in the Earth's crust. The ion Ca2+ is also the fifth-most-abundant dissolved ion in seawater by both molarity and mass, after sodium, chloride, magnesium, and sulfate.",
    symbol: 'Ca',
    xpos: 2,
    ypos: 4,
    wxpos: 2,
    wypos: 4,
    'cpk-hex': '3dff00',
    image: {
      title: 'Calcium Grains, grain size about 1 mm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Calcium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/calcium.php'
    },
    block: 's'
  },
  {
    name: 'Scandium',
    atomic_mass: 44.9559085,
    number: 21,
    period: 4,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Scandium',
    summary:
      'Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been sometimes classified as a rare earth element, together with yttrium and the lanthanoids. It was discovered in 1879 by spectral analysis of the minerals euxenite and gadolinite from Scandinavia.',
    symbol: 'Sc',
    xpos: 3,
    ypos: 4,
    wxpos: 17,
    wypos: 4,
    'cpk-hex': 'e6e6e6',
    image: {
      title: 'Crystal of Scandium. About 1g',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Scandium%2C_Sc.jpg',
      attribution:
        'JanDerChemiker, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Titanium',
    atomic_mass: 47.8671,
    number: 22,
    period: 4,
    group: 4,
    source: 'https://en.wikipedia.org/wiki/Titanium',
    summary:
      'Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density and high strength. It is highly resistant to corrosion in sea water, aqua regia and chlorine.',
    symbol: 'Ti',
    xpos: 4,
    ypos: 4,
    wxpos: 18,
    wypos: 4,
    'cpk-hex': 'bfc2c7',
    image: {
      title:
        'Titanium Crystal made with the van Arkel-de Booer Process. 87 grams, Orginial size in cm: 2.5 x 4',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Titanium.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/titanium.php'
    },
    block: 'd'
  },
  {
    name: 'Vanadium',
    atomic_mass: 50.94151,
    number: 23,
    period: 4,
    group: 5,
    source: 'https://en.wikipedia.org/wiki/Vanadium',
    summary:
      'Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery grey, ductile and malleable transition metal. The element is found only in chemically combined form in nature, but once isolated artificially, the formation of an oxide layer stabilizes the free metal somewhat against further oxidation.',
    symbol: 'V',
    xpos: 5,
    ypos: 4,
    wxpos: 19,
    wypos: 4,
    'cpk-hex': 'a6a6ab',
    image: {
      title: 'Pieces of Pure Vanadium with Oxide Layer',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Vanadium-pieces.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/vanadium.php'
    },
    block: 'd'
  },
  {
    name: 'Chromium',
    atomic_mass: 51.99616,
    number: 24,
    period: 4,
    group: 6,
    source: 'https://en.wikipedia.org/wiki/Chromium',
    summary:
      'Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in Group 6. It is a steely-gray, lustrous, hard and brittle metal which takes a high polish, resists tarnishing, and has a high melting point.',
    symbol: 'Cr',
    xpos: 6,
    ypos: 4,
    wxpos: 20,
    wypos: 4,
    'cpk-hex': '8a99c7',
    image: {
      title: 'Piece of Chromium Metal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Chromium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/chromium.php'
    },
    block: 'd'
  },
  {
    name: 'Manganese',
    atomic_mass: 54.9380443,
    number: 25,
    period: 4,
    group: 7,
    source: 'https://en.wikipedia.org/wiki/Manganese',
    summary:
      'Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in combination with iron, and in many minerals. Manganese is a metal with important industrial metal alloy uses, particularly in stainless steels.',
    symbol: 'Mn',
    xpos: 7,
    ypos: 4,
    wxpos: 21,
    wypos: 4,
    'cpk-hex': '9c7ac7',
    image: {
      title: 'Two Oieces of Manganese Metal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Manganese_element.jpg',
      attribution:
        'W. Oelen, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Iron',
    atomic_mass: 55.8452,
    number: 26,
    period: 4,
    group: 8,
    source: 'https://en.wikipedia.org/wiki/Iron',
    summary:
      "Iron is a chemical element with symbol Fe (from Latin:ferrum) and atomic number 26. It is a metal in the first transition series. It is by mass the most common element on Earth, forming much of Earth's outer and inner core.",
    symbol: 'Fe',
    xpos: 8,
    ypos: 4,
    wxpos: 22,
    wypos: 4,
    'cpk-hex': 'e06633',
    image: {
      title:
        'Fragments of an iron meteorite, about 92% iron. Original size of the single pieces in cm: 0.4 - 0.8',
      url: 'https://images-of-elements.com/iron-2.jpg',
      attribution:
        'Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/iron.php'
    },
    block: 'd'
  },
  {
    name: 'Cobalt',
    atomic_mass: 58.9331944,
    number: 27,
    period: 4,
    group: 9,
    source: 'https://en.wikipedia.org/wiki/Cobalt',
    summary:
      "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt in the Earth's crust is found only in chemically combined form, save for small deposits found in alloys of natural meteoric iron. The free element, produced by reductive smelting, is a hard, lustrous, silver-gray metal.",
    symbol: 'Co',
    xpos: 9,
    ypos: 4,
    wxpos: 23,
    wypos: 4,
    'cpk-hex': 'f090a0',
    image: {
      title: 'Fractions from a cobalt, 7 and 4 grams. Original size in cm: 2 x 2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Cobalt_ore_2.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/cobalt.php'
    },
    block: 'd'
  },
  {
    name: 'Nickel',
    atomic_mass: 58.69344,
    number: 28,
    period: 4,
    group: 10,
    source: 'https://en.wikipedia.org/wiki/Nickel',
    summary:
      'Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.',
    symbol: 'Ni',
    xpos: 10,
    ypos: 4,
    wxpos: 24,
    wypos: 4,
    'cpk-hex': '50d050',
    image: {
      title: 'Nickel Chunk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Nickel_chunk.jpg',
      attribution:
        'Materialscientist at English Wikipedia, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Copper',
    atomic_mass: 63.5463,
    number: 29,
    period: 4,
    group: 11,
    source: 'https://en.wikipedia.org/wiki/Copper',
    summary:
      'Copper is a chemical element with symbol Cu (from Latin:cuprum) and atomic number 29. It is a soft, malleable and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a reddish-orange color.',
    symbol: 'Cu',
    xpos: 11,
    ypos: 4,
    wxpos: 25,
    wypos: 4,
    'cpk-hex': 'c88033',
    image: {
      title: 'Macro of Native Copper about 1 \u00bd inches (4 cm) in size',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/NatCopper.jpg',
      attribution:
        "Native_Copper_Macro_Digon3.jpg: 'Jonathan Zander (Digon3)' derivative work: Materialscientist, CC BY-SA 2.5 <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons"
    },
    block: 'd'
  },
  {
    name: 'Zinc',
    atomic_mass: 65.382,
    number: 30,
    period: 4,
    group: 12,
    source: 'https://en.wikipedia.org/wiki/Zinc',
    summary:
      'Zinc, in commerce also spelter, is a chemical element with symbol Zn and atomic number 30. It is the first element of group 12 of the periodic table. In some respects zinc is chemically similar to magnesium:its ion is of similar size and its only common oxidation state is +2.',
    symbol: 'Zn',
    xpos: 12,
    ypos: 4,
    wxpos: 26,
    wypos: 4,
    'cpk-hex': '7d80b0',
    image: {
      title: '30 grams Zinc, front and back side. Original size in cm: 3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Zinc_%2830_Zn%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/zinc.php'
    },
    block: 'd'
  },
  {
    name: 'Gallium',
    atomic_mass: 69.7231,
    number: 31,
    period: 4,
    group: 13,
    source: 'https://en.wikipedia.org/wiki/Gallium',
    summary:
      'Gallium is a chemical element with symbol Ga and atomic number 31. Elemental gallium does not occur in free form in nature, but as the gallium(III) compounds that are in trace amounts in zinc ores and in bauxite. Gallium is a soft, silvery metal, and elemental gallium is a brittle solid at low temperatures, and melts at 29.76 \u00b0C (85.57 \u00b0F) (slightly above room temperature).',
    symbol: 'Ga',
    xpos: 13,
    ypos: 4,
    wxpos: 27,
    wypos: 4,
    'cpk-hex': 'c28f8f',
    image: {
      title: 'Solid gallium, fresh and after some time (2 months) at room temperature',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Solid_gallium_%28Ga%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gallium.php'
    },
    block: 'p'
  },
  {
    name: 'Germanium',
    atomic_mass: 72.6308,
    number: 32,
    period: 4,
    group: 14,
    source: 'https://en.wikipedia.org/wiki/Germanium',
    summary:
      'Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors tin and silicon. Purified germanium is a semiconductor, with an appearance most similar to elemental silicon.',
    symbol: 'Ge',
    xpos: 14,
    ypos: 4,
    wxpos: 28,
    wypos: 4,
    'cpk-hex': '668f8f',
    image: {
      title: '12 Grams Polycrystalline Germanium, 2*3 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Polycrystalline-germanium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/germanium.php'
    },
    block: 'p'
  },
  {
    name: 'Arsenic',
    atomic_mass: 74.9215956,
    number: 33,
    period: 4,
    group: 15,
    source: 'https://en.wikipedia.org/wiki/Arsenic',
    summary:
      'Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in conjunction with sulfur and metals, and also as a pure elemental crystal. Arsenic is a metalloid.',
    symbol: 'As',
    xpos: 15,
    ypos: 4,
    wxpos: 29,
    wypos: 4,
    'cpk-hex': 'bd80e3',
    image: {
      title:
        'Ultrapure Metallic Arsenic under Argon, 1 - 2 grams. Original size of each piece in cm: 0.5 x 1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Arsenic_%2833_As%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/arsenic.php'
    },
    block: 'p'
  },
  {
    name: 'Selenium',
    atomic_mass: 78.9718,
    number: 34,
    period: 4,
    group: 16,
    source: 'https://en.wikipedia.org/wiki/Selenium',
    summary:
      'Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between those of its periodic table column-adjacent chalcogen elements sulfur and tellurium. It rarely occurs in its elemental state in nature, or as pure ore compounds.',
    symbol: 'Se',
    xpos: 16,
    ypos: 4,
    wxpos: 30,
    wypos: 4,
    'cpk-hex': 'ffa100',
    image: {
      title: 'Ultrapure Black, Amorphous Selenium, 3 - 4 grams. Original size in cm: 2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Selenium.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/selenium.php'
    },
    block: 'p'
  },
  {
    name: 'Bromine',
    atomic_mass: 79.904,
    number: 35,
    period: 4,
    group: 17,
    source: 'https://en.wikipedia.org/wiki/Bromine',
    summary:
      'Bromine (from Ancient Greek:\u03b2\u03c1\u1ff6\u03bc\u03bf\u03c2, br\u00f3mos, meaning "stench") is a chemical element with symbol Br, and atomic number 35. It is a halogen. The element was isolated independently by two chemists, Carl Jacob L\u00f6wig and Antoine Jerome Balard, in 1825\u20131826.',
    symbol: 'Br',
    xpos: 17,
    ypos: 4,
    wxpos: 31,
    wypos: 4,
    'cpk-hex': 'a62929',
    image: {
      title: '99.5 % pure liquid Bromine in a 4 x 1 cm big glass ampoule, cast in acrylic',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Bromine-ampoule.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/bromine.php'
    },
    block: 'p'
  },
  {
    name: 'Krypton',
    atomic_mass: 83.7982,
    number: 36,
    period: 4,
    group: 18,
    source: 'https://en.wikipedia.org/wiki/Krypton',
    summary:
      'Krypton (from Greek:\u03ba\u03c1\u03c5\u03c0\u03c4\u03cc\u03c2 kryptos "the hidden one") is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas, krypton occurs in trace amounts in the atmosphere, is isolated by fractionally distilling liquefied air, and is often used with other rare gases in fluorescent lamps.',
    symbol: 'Kr',
    xpos: 18,
    ypos: 4,
    wxpos: 32,
    wypos: 4,
    'cpk-hex': '5cb8d1',
    image: {
      title: 'Vial of Glowing Ultrapure Krypton. Original size in cm: 1 x 5.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Krypton-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/krypton.php'
    },
    block: 'p'
  },
  {
    name: 'Rubidium',
    atomic_mass: 85.46783,
    number: 37,
    period: 5,
    group: 1,
    source: 'https://en.wikipedia.org/wiki/Rubidium',
    summary:
      'Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a soft, silvery-white metallic element of the alkali metal group, with an atomic mass of 85.4678. Elemental rubidium is highly reactive, with properties similar to those of other alkali metals, such as very rapid oxidation in air.',
    symbol: 'Rb',
    xpos: 1,
    ypos: 5,
    wxpos: 1,
    wypos: 5,
    'cpk-hex': '702eb0',
    image: {
      title: 'Rubidium Metal Sample',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Rb5.JPG',
      attribution:
        'Dnn87, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Strontium',
    atomic_mass: 87.621,
    number: 38,
    period: 5,
    group: 2,
    source: 'https://en.wikipedia.org/wiki/Strontium',
    summary:
      'Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white or yellowish metallic element that is highly reactive chemically. The metal turns yellow when it is exposed to air.',
    symbol: 'Sr',
    xpos: 2,
    ypos: 5,
    wxpos: 2,
    wypos: 5,
    'cpk-hex': '00ff00',
    image: {
      title: 'Strontium Pieces under Paraffin Oil.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Strontium-1.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/strontium.php'
    },
    block: 's'
  },
  {
    name: 'Yttrium',
    atomic_mass: 88.905842,
    number: 39,
    period: 5,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Yttrium',
    summary:
      'Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and it has often been classified as a "rare earth element". Yttrium is almost always found combined with the lanthanides in rare earth minerals and is never found in nature as a free element.',
    symbol: 'Y',
    xpos: 3,
    ypos: 5,
    wxpos: 17,
    wypos: 5,
    'cpk-hex': '94ffff',
    image: {
      title: '6,21g Yttrium, Reinheit mindestens 99%.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Piece_of_Yttrium.jpg',
      attribution:
        'Jan Anskeit, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Zirconium',
    atomic_mass: 91.2242,
    number: 40,
    period: 5,
    group: 4,
    source: 'https://en.wikipedia.org/wiki/Zirconium',
    summary:
      'Zirconium is a chemical element with symbol Zr and atomic number 40. The name of zirconium is taken from the name of the mineral zircon, the most important source of zirconium. The word zircon comes from the Persian word zargun \u0632\u0631\u06af\u0648\u0646, meaning "gold-colored".',
    symbol: 'Zr',
    xpos: 4,
    ypos: 5,
    wxpos: 18,
    wypos: 5,
    'cpk-hex': '94e0e0',
    image: {
      title: 'Two pieces of Zirconium, 1 cm each.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Zirconium-pieces.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/zirconium.php'
    },
    block: 'd'
  },
  {
    name: 'Niobium',
    atomic_mass: 92.906372,
    number: 41,
    period: 5,
    group: 5,
    source: 'https://en.wikipedia.org/wiki/Niobium',
    summary:
      'Niobium, formerly columbium, is a chemical element with symbol Nb (formerly Cb) and atomic number 41. It is a soft, grey, ductile transition metal, which is often found in the pyrochlore mineral, the main commercial source for niobium, and columbite. The name comes from Greek mythology:Niobe, daughter of Tantalus since it is so similar to tantalum.',
    symbol: 'Nb',
    xpos: 5,
    ypos: 5,
    wxpos: 19,
    wypos: 5,
    'cpk-hex': '73c2c9',
    image: {
      title: 'Niobium strips',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Niobium_strips.JPG',
      attribution:
        'Mauro Cateb, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Molybdenum',
    atomic_mass: 95.951,
    number: 42,
    period: 5,
    group: 6,
    source: 'https://en.wikipedia.org/wiki/Molybdenum',
    summary:
      'Molybdenum is a chemical element with symbol Mo and atomic number 42. The name is from Neo-Latin molybdaenum, from Ancient Greek \u039c\u03cc\u03bb\u03c5\u03b2\u03b4\u03bf\u03c2 molybdos, meaning lead, since its ores were confused with lead ores. Molybdenum minerals have been known throughout history, but the element was discovered (in the sense of differentiating it as a new entity from the mineral salts of other metals) in 1778 by Carl Wilhelm Scheele.',
    symbol: 'Mo',
    xpos: 6,
    ypos: 5,
    wxpos: 20,
    wypos: 5,
    'cpk-hex': '54b5b5',
    image: {
      title: '99.9 Pure Molybdenum Crystal, about 2 x 3 cm, with anodisation color',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Molybdenum.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/molybdenum.php'
    },
    block: 'd'
  },
  {
    name: 'Technetium',
    atomic_mass: 98,
    number: 43,
    period: 5,
    group: 7,
    source: 'https://en.wikipedia.org/wiki/Technetium',
    summary:
      'Technetium (/t\u025bk\u02c8ni\u02d0\u0283i\u0259m/) is a chemical element with symbol Tc and atomic number 43. It is the element with the lowest atomic number in the periodic table that has no stable isotopes:every form of it is radioactive. Nearly all technetium is produced synthetically, and only minute amounts are found in nature.',
    symbol: 'Tc',
    xpos: 7,
    ypos: 5,
    wxpos: 21,
    wypos: 5,
    'cpk-hex': '3b9e9e',
    image: {
      title:
        'Technetium Sample inside a sealed glass ampoule, filled with argon gas. 6x1 mm goldfoil covered with 99Tc powder (electroplated).',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Technetium-sample-cropped.jpg',
      attribution:
        'GFDL, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Ruthenium',
    atomic_mass: 101.072,
    number: 44,
    period: 5,
    group: 8,
    source: 'https://en.wikipedia.org/wiki/Ruthenium',
    summary:
      'Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, ruthenium is inert to most other chemicals.',
    symbol: 'Ru',
    xpos: 8,
    ypos: 5,
    wxpos: 22,
    wypos: 5,
    'cpk-hex': '248f8f',
    image: {
      title: 'Ruthenium Crystal, 0.6 grams, 0.6 x 1.3 cm size',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Ruthenium_crystal.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/ruthenium.php'
    },
    block: 'd'
  },
  {
    name: 'Rhodium',
    atomic_mass: 102.905502,
    number: 45,
    period: 5,
    group: 9,
    source: 'https://en.wikipedia.org/wiki/Rhodium',
    summary:
      'Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, and chemically inert transition metal. It is a member of the platinum group.',
    symbol: 'Rh',
    xpos: 9,
    ypos: 5,
    wxpos: 23,
    wypos: 5,
    'cpk-hex': '0a7d8c',
    image: {
      title: 'Pure Rhodium Bead, 1 gram. Original size in cm: 0.5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Rhodium_%28Rh%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/rhodium.php'
    },
    block: 'd'
  },
  {
    name: 'Palladium',
    atomic_mass: 106.421,
    number: 46,
    period: 5,
    group: 10,
    source: 'https://en.wikipedia.org/wiki/Palladium',
    summary:
      'Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston. He named it after the asteroid Pallas, which was itself named after the epithet of the Greek goddess Athena, acquired by her when she slew Pallas.',
    symbol: 'Pd',
    xpos: 10,
    ypos: 5,
    wxpos: 24,
    wypos: 5,
    'cpk-hex': '006985',
    image: {
      title: 'Palladium Crystal, about 1 gram. Original size in cm: 0.5 x 1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Palladium_%2846_Pd%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/palladium.php'
    },
    block: 'd'
  },
  {
    name: 'Silver',
    atomic_mass: 107.86822,
    number: 47,
    period: 5,
    group: 11,
    source: 'https://en.wikipedia.org/wiki/Silver',
    summary:
      'Silver is a chemical element with symbol Ag (Greek:\u03ac\u03c1\u03b3\u03c5\u03c1\u03bf\u03c2 \u00e1rguros, Latin:argentum, both from the Indo-European root *h\u2082er\u01f5- for "grey" or "shining") and atomic number 47. A soft, white, lustrous transition metal, it possesses the highest electrical conductivity, thermal conductivity and reflectivity of any metal. The metal occurs naturally in its pure, free form (native silver), as an alloy with gold and other metals, and in minerals such as argentite and chlorargyrite.',
    symbol: 'Ag',
    xpos: 11,
    ypos: 5,
    wxpos: 25,
    wypos: 5,
    'cpk-hex': 'c0c0c0',
    image: {
      title: 'Natural silver nugget, 1 cm long.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Silver-nugget.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/silver.php'
    },
    block: 'd'
  },
  {
    name: 'Cadmium',
    atomic_mass: 112.4144,
    number: 48,
    period: 5,
    group: 12,
    source: 'https://en.wikipedia.org/wiki/Cadmium',
    summary:
      'Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury. Like zinc, it prefers oxidation state +2 in most of its compounds and like mercury it shows a low melting point compared to transition metals.',
    symbol: 'Cd',
    xpos: 12,
    ypos: 5,
    wxpos: 26,
    wypos: 5,
    'cpk-hex': 'ffd98f',
    image: {
      title: '48 Cd Cadmium',
      url: 'https://images-of-elements.com/cadmium-4.jpg',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/cadmium.php'
    },
    block: 'd'
  },
  {
    name: 'Indium',
    atomic_mass: 114.8181,
    number: 49,
    period: 5,
    group: 13,
    source: 'https://en.wikipedia.org/wiki/Indium',
    summary:
      "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metallic element that is rare in Earth's crust. The metal is very soft, malleable and easily fusible, with a melting point higher than sodium, but lower than lithium or tin.",
    symbol: 'In',
    xpos: 13,
    ypos: 5,
    wxpos: 27,
    wypos: 5,
    'cpk-hex': 'a67573',
    image: {
      title: '1.5 x 1.5 cm liquid indium',
      url: 'https://images-of-elements.com/indium-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/indium.php'
    },
    block: 'p'
  },
  {
    name: 'Tin',
    atomic_mass: 118.7107,
    number: 50,
    period: 5,
    group: 14,
    source: 'https://en.wikipedia.org/wiki/Tin',
    summary:
      'Tin is a chemical element with the symbol Sn (for Latin:stannum) and atomic number 50. It is a main group metal in group 14 of the periodic table. Tin shows a chemical similarity to both neighboring group-14 elements, germanium and lead, and has two possible oxidation states, +2 and the slightly more stable +4.',
    symbol: 'Sn',
    xpos: 14,
    ypos: 5,
    wxpos: 28,
    wypos: 5,
    'cpk-hex': '668080',
    image: {
      title: 'Tin blob',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Tin-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/tin.php'
    },
    block: 'p'
  },
  {
    name: 'Antimony',
    atomic_mass: 121.7601,
    number: 51,
    period: 5,
    group: 15,
    source: 'https://en.wikipedia.org/wiki/Antimony',
    summary:
      'Antimony is a chemical element with symbol Sb (from Latin:stibium) and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite (Sb2S3). Antimony compounds have been known since ancient times and were used for cosmetics; metallic antimony was also known, but it was erroneously identified as lead upon its discovery.',
    symbol: 'Sb',
    xpos: 15,
    ypos: 5,
    wxpos: 29,
    wypos: 5,
    'cpk-hex': '9e63b5',
    image: {
      title: 'Antimony crystal, 2 grams, 1 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Antimony-4.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/antimony.php'
    },
    block: 'p'
  },
  {
    name: 'Tellurium',
    atomic_mass: 127.603,
    number: 52,
    period: 5,
    group: 16,
    source: 'https://en.wikipedia.org/wiki/Tellurium',
    summary:
      'Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur.',
    symbol: 'Te',
    xpos: 16,
    ypos: 5,
    wxpos: 30,
    wypos: 5,
    'cpk-hex': 'd47a00',
    image: {
      title: 'Metallic tellurium, diameter 3.5 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Tellurium2.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/tellurium.php'
    },
    block: 'p'
  },
  {
    name: 'Iodine',
    atomic_mass: 126.904473,
    number: 53,
    period: 5,
    group: 17,
    source: 'https://en.wikipedia.org/wiki/Iodine',
    summary:
      'Iodine is a chemical element with symbol I and atomic number 53. The name is from Greek \u1f30\u03bf\u03b5\u03b9\u03b4\u03ae\u03c2 ioeid\u0113s, meaning violet or purple, due to the color of iodine vapor. Iodine and its compounds are primarily used in nutrition, and industrially in the production of acetic acid and certain polymers.',
    symbol: 'I',
    xpos: 17,
    ypos: 5,
    wxpos: 31,
    wypos: 5,
    'cpk-hex': '940094',
    image: {
      title: 'Iodine Sample',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Iodine-sample.jpg',
      attribution: 'Benjah-bmm27, Public domain, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Xenon',
    atomic_mass: 131.2936,
    number: 54,
    period: 5,
    group: 18,
    source: 'https://en.wikipedia.org/wiki/Xenon',
    summary:
      "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas, that occurs in the Earth's atmosphere in trace amounts. Although generally unreactive, xenon can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.",
    symbol: 'Xe',
    xpos: 18,
    ypos: 5,
    wxpos: 32,
    wypos: 5,
    'cpk-hex': '429eb0',
    image: {
      title: 'Vial of glowing ultrapure xenon. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Xenon-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/xenon.php'
    },
    block: 'p'
  },
  {
    name: 'Cesium',
    atomic_mass: 132.905451966,
    number: 55,
    period: 6,
    group: 1,
    source: 'https://en.wikipedia.org/wiki/Cesium',
    summary:
      'Caesium or cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-gold alkali metal with a melting point of 28 \u00b0C (82 \u00b0F), which makes it one of only five elemental metals that are liquid at or near room temperature. Caesium is an alkali metal and has physical and chemical properties similar to those of rubidium and potassium.',
    symbol: 'Cs',
    xpos: 1,
    ypos: 6,
    wxpos: 1,
    wypos: 6,
    'cpk-hex': '57178f',
    image: {
      title: 'Cesium/Caesium metal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Cesium.jpg',
      attribution:
        'Dnn87 Contact email: Dnn87yahoo.dk, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Barium',
    atomic_mass: 137.3277,
    number: 56,
    period: 6,
    group: 2,
    source: 'https://en.wikipedia.org/wiki/Barium',
    summary:
      'Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in Group 2, a soft silvery metallic alkaline earth metal. Because of its high chemical reactivity barium is never found in nature as a free element.',
    symbol: 'Ba',
    xpos: 2,
    ypos: 6,
    wxpos: 2,
    wypos: 6,
    'cpk-hex': '00c900',
    image: {
      title: '1.5 Grams Barium with a Grey Oxide Layer under Argon. Original size in cm: 0.7 x 1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Barium_%2856_Ba%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/barium.php'
    },
    block: 's'
  },
  {
    name: 'Lanthanum',
    atomic_mass: 138.905477,
    number: 57,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Lanthanum',
    summary:
      'Lanthanum is a soft, ductile, silvery-white metallic chemical element with symbol La and atomic number 57. It tarnishes rapidly when exposed to air and is soft enough to be cut with a knife. It gave its name to the lanthanide series, a group of 15 similar elements between lanthanum and lutetium in the periodic table:it is also sometimes considered the first element of the 6th-period transition metals.',
    symbol: 'La',
    xpos: 3,
    ypos: 9,
    wxpos: 3,
    wypos: 6,
    'cpk-hex': '70d4ff',
    image: {
      title: '1 cm Big Piece of Pure Lanthanum',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Lanthanum.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lanthanum.php'
    },
    block: 'f'
  },
  {
    name: 'Cerium',
    atomic_mass: 140.1161,
    number: 58,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Cerium',
    summary:
      'Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal which easily oxidizes in air. Cerium was named after the dwarf planet Ceres (itself named after the Roman goddess of agriculture).',
    symbol: 'Ce',
    xpos: 4,
    ypos: 9,
    wxpos: 4,
    wypos: 6,
    'cpk-hex': 'ffffc7',
    image: {
      title: 'Ultrapure Cerium under Argon, 1.5 grams. Original size in cm: 1 x 1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Cerium2.jpg',
      attribution:
        'Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/cerium.php'
    },
    block: 'f'
  },
  {
    name: 'Praseodymium',
    atomic_mass: 140.907662,
    number: 59,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Praseodymium',
    summary:
      'Praseodymium is a chemical element with symbol Pr and atomic number 59. Praseodymium is a soft, silvery, malleable and ductile metal in the lanthanide group. It is valued for its magnetic, electrical, chemical, and optical properties.',
    symbol: 'Pr',
    xpos: 5,
    ypos: 9,
    wxpos: 5,
    wypos: 6,
    'cpk-hex': 'd9ffc7',
    image: {
      title: '1.5 Grams Praseodymium under Argon, 0.5 cm big pieces',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Praseodymium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/praseodymium.php'
    },
    block: 'f'
  },
  {
    name: 'Neodymium',
    atomic_mass: 144.2423,
    number: 60,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Neodymium',
    summary:
      'Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air. Neodymium was discovered in 1885 by the Austrian chemist Carl Auer von Welsbach.',
    symbol: 'Nd',
    xpos: 6,
    ypos: 9,
    wxpos: 6,
    wypos: 6,
    'cpk-hex': 'c7ffc7',
    image: {
      title:
        'Ultrapure Neodymium under Argon, 5 grams. Original length of the large piece in cm: 1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Neodymium_%2860_Nd%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/neodymium.php'
    },
    block: 'f'
  },
  {
    name: 'Promethium',
    atomic_mass: 145,
    number: 61,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Promethium',
    summary:
      'Promethium, originally prometheum, is a chemical element with the symbol Pm and atomic number 61. All of its isotopes are radioactive; it is one of only two such elements that are followed in the periodic table by elements with stable forms, a distinction shared with technetium. Chemically, promethium is a lanthanide, which forms salts when combined with other elements.',
    symbol: 'Pm',
    xpos: 7,
    ypos: 9,
    wxpos: 7,
    wypos: 6,
    'cpk-hex': 'a3ffc7',
    image: {
      title:
        'Photomontage of what promethium metal might look like (it is too radioactive and real images are not available)',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Promethium.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/promethium.php'
    },
    block: 'f'
  },
  {
    name: 'Samarium',
    atomic_mass: 150.362,
    number: 62,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Samarium',
    summary:
      'Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that readily oxidizes in air. Being a typical member of the lanthanide series, samarium usually assumes the oxidation state +3.',
    symbol: 'Sm',
    xpos: 8,
    ypos: 9,
    wxpos: 8,
    wypos: 6,
    'cpk-hex': '8fffc7',
    image: {
      title: 'Ultrapure Sublimated Samarium, 2 grams. Original size in cm: 0.8 x 1.5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Samarium-2.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/samarium.php'
    },
    block: 'f'
  },
  {
    name: 'Europium',
    atomic_mass: 151.9641,
    number: 63,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Europium',
    summary:
      'Europium is a chemical element with symbol Eu and atomic number 63. It was isolated in 1901 and is named after the continent of Europe. It is a moderately hard, silvery metal which readily oxidizes in air and water.',
    symbol: 'Eu',
    xpos: 9,
    ypos: 9,
    wxpos: 9,
    wypos: 6,
    'cpk-hex': '61ffc7',
    image: {
      title:
        'Weakly Oxidized Europium, hence slightly yellowish. 1.5 grams, large piece 0.6 x 1.6 cm.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Europium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/europium.php'
    },
    block: 'f'
  },
  {
    name: 'Gadolinium',
    atomic_mass: 157.253,
    number: 64,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Gadolinium',
    summary:
      'Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable and ductile rare-earth metal. It is found in nature only in combined (salt) form.',
    symbol: 'Gd',
    xpos: 10,
    ypos: 9,
    wxpos: 10,
    wypos: 6,
    'cpk-hex': '45ffc7',
    image: {
      title:
        'Pure (99.95%) Amorphous Gadolinium, about 12 grams, 2 \u00d7 1.5 \u00d7 0.5 cm, cast in acrylic glass',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Gadolinium-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gadolinium.php'
    },
    block: 'f'
  },
  {
    name: 'Terbium',
    atomic_mass: 158.925352,
    number: 65,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Terbium',
    summary:
      'Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white rare earth metal that is malleable, ductile and soft enough to be cut with a knife. Terbium is never found in nature as a free element, but it is contained in many minerals, including cerite, gadolinite, monazite, xenotime and euxenite.',
    symbol: 'Tb',
    xpos: 11,
    ypos: 9,
    wxpos: 11,
    wypos: 6,
    'cpk-hex': '30ffc7',
    image: {
      title: 'Pure Terbium, 3 grams. Original size: 1 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Terbium-2.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/terbium.php'
    },
    block: 'f'
  },
  {
    name: 'Dysprosium',
    atomic_mass: 162.5001,
    number: 66,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Dysprosium',
    summary:
      'Dysprosium is a chemical element with the symbol Dy and atomic number 66. It is a rare earth element with a metallic silver luster. Dysprosium is never found in nature as a free element, though it is found in various minerals, such as xenotime.',
    symbol: 'Dy',
    xpos: 12,
    ypos: 9,
    wxpos: 12,
    wypos: 6,
    'cpk-hex': '1fffc7',
    image: {
      title: 'Pure Dysprosium Dendrites',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Dysprosium-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/dysprosium.php'
    },
    block: 'f'
  },
  {
    name: 'Holmium',
    atomic_mass: 164.930332,
    number: 67,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Holmium',
    summary:
      'Holmium is a chemical element with symbol Ho and atomic number 67. Part of the lanthanide series, holmium is a rare earth element. Holmium was discovered by Swedish chemist Per Theodor Cleve.',
    symbol: 'Ho',
    xpos: 13,
    ypos: 9,
    wxpos: 13,
    wypos: 6,
    'cpk-hex': '00ff9c',
    image: {
      title: 'Ultrapure Holmium, 17 grams. Original size in cm: 1.5 x 2.5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Holmium2.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/holmium.php'
    },
    block: 'f'
  },
  {
    name: 'Erbium',
    atomic_mass: 167.2593,
    number: 68,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Erbium',
    summary:
      'Erbium is a chemical element in the lanthanide series, with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements on Earth. As such, it is a rare earth element which is associated with several other rare elements in the mineral gadolinite from Ytterby in Sweden, where yttrium, ytterbium, and terbium were discovered.',
    symbol: 'Er',
    xpos: 14,
    ypos: 9,
    wxpos: 14,
    wypos: 6,
    'cpk-hex': '00e675',
    image: {
      title: '9.5 Gramms Pure Erbium, 2 x 2 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Erbium-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/erbium.php'
    },
    block: 'f'
  },
  {
    name: 'Thulium',
    atomic_mass: 168.934222,
    number: 69,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Thulium',
    summary:
      'Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and antepenultimate (third-last) element in the lanthanide series. Like the other lanthanides, the most common oxidation state is +3, seen in its oxide, halides and other compounds.',
    symbol: 'Tm',
    xpos: 15,
    ypos: 9,
    wxpos: 15,
    wypos: 6,
    'cpk-hex': '00d452',
    image: {
      title: 'Ultrapure (99.997%) Crystalline Thulium, 22.3 grams, 3 \u00d7 3 \u00d7 2 cm in size',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Thulium-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/thulium.php'
    },
    block: 'f'
  },
  {
    name: 'Ytterbium',
    atomic_mass: 173.0451,
    number: 70,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Ytterbium',
    summary:
      'Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series, which is the basis of the relative stability of its +2 oxidation state. However, like the other lanthanides, its most common oxidation state is +3, seen in its oxide, halides and other compounds.',
    symbol: 'Yb',
    xpos: 16,
    ypos: 9,
    wxpos: 16,
    wypos: 6,
    'cpk-hex': '00bf38',
    image: {
      title: 'Ytterbium, 0.5 x 1 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Ytterbium-3.jpg',
      attribution:
        'Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/ytterbium.php'
    },
    block: 'f'
  },
  {
    name: 'Lutetium',
    atomic_mass: 174.96681,
    number: 71,
    period: 6,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Lutetium',
    summary:
      'Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry, but not in moist air. It is considered the first element of the 6th-period transition metals and the last element in the lanthanide series, and is traditionally counted among the rare earths.',
    symbol: 'Lu',
    xpos: 17,
    ypos: 9,
    wxpos: 17,
    wypos: 6,
    'cpk-hex': '00ab24',
    image: {
      title: '1 cm Big Piece of Pure Lutetium',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Lutetium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lutetium.php'
    },
    block: 'd'
  },
  {
    name: 'Hafnium',
    atomic_mass: 178.492,
    number: 72,
    period: 6,
    group: 4,
    source: 'https://en.wikipedia.org/wiki/Hafnium',
    summary:
      'Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in zirconium minerals. Its existence was predicted by Dmitri Mendeleev in 1869, though it was not identified until 1923, making it the penultimate stable element to be discovered (rhenium was identified two years later).',
    symbol: 'Hf',
    xpos: 4,
    ypos: 6,
    wxpos: 18,
    wypos: 6,
    'cpk-hex': '4dc2ff',
    image: {
      title: 'Electrolytic Hafnium, 22 grams. Original size in cm: 1 x 2 x 3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Hafnium_%2872_Hf%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hafnium.php'
    },
    block: 'd'
  },
  {
    name: 'Tantalum',
    atomic_mass: 180.947882,
    number: 73,
    period: 6,
    group: 5,
    source: 'https://en.wikipedia.org/wiki/Tantalum',
    summary:
      'Tantalum is a chemical element with symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, an antihero from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.',
    symbol: 'Ta',
    xpos: 5,
    ypos: 6,
    wxpos: 19,
    wypos: 6,
    'cpk-hex': '4da6ff',
    image: {
      title: 'Piece of tantalum, 1 cm in size',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Tantalum.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/tantalum.php'
    },
    block: 'd'
  },
  {
    name: 'Tungsten',
    atomic_mass: 183.841,
    number: 74,
    period: 6,
    group: 6,
    source: 'https://en.wikipedia.org/wiki/Tungsten',
    summary:
      'Tungsten, also known as wolfram, is a chemical element with symbol W and atomic number 74. The word tungsten comes from the Swedish language tung sten, which directly translates to heavy stone. Its name in Swedish is volfram, however, in order to distinguish it from scheelite, which in Swedish is alternatively named tungsten.',
    symbol: 'W',
    xpos: 6,
    ypos: 6,
    wxpos: 20,
    wypos: 6,
    'cpk-hex': '2194d6',
    image: {
      title: 'Tungsten rod with oxidised surface, 80 grams. Original size in cm: 1.3 x 3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Tungsten_rod_with_oxidised_surface.jpg',
      attribution:
        'Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/tungsten.php'
    },
    block: 'd'
  },
  {
    name: 'Rhenium',
    atomic_mass: 186.2071,
    number: 75,
    period: 6,
    group: 7,
    source: 'https://en.wikipedia.org/wiki/Rhenium',
    summary:
      "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table. With an estimated average concentration of 1 part per billion (ppb), rhenium is one of the rarest elements in the Earth's crust.",
    symbol: 'Re',
    xpos: 7,
    ypos: 6,
    wxpos: 21,
    wypos: 6,
    'cpk-hex': '267dab',
    image: {
      title:
        'Pure Rhenium Bead, arc melted, 21 grams. Original size in cm: 1.5 x 1.7. Measured radiation dose <0.05 \u03bcS/h.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Pure_rhenium_bead%2C_arc_melted%2C_21_grams._Original_size_in_cm_-_1.5_x_1.7.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/rhenium.php'
    },
    block: 'd'
  },
  {
    name: 'Osmium',
    atomic_mass: 190.233,
    number: 76,
    period: 6,
    group: 8,
    source: 'https://en.wikipedia.org/wiki/Osmium',
    summary:
      'Osmium (from Greek osme (\u1f40\u03c3\u03bc\u03ae) meaning "smell") is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores. Osmium is the densest naturally occurring element, with a density of 22.59 g/cm3.',
    symbol: 'Os',
    xpos: 8,
    ypos: 6,
    wxpos: 22,
    wypos: 6,
    'cpk-hex': '266696',
    image: {
      title: 'Pure Osmium Bead',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Osmium-bead.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/osmium.php'
    },
    block: 'd'
  },
  {
    name: 'Iridium',
    atomic_mass: 192.2173,
    number: 77,
    period: 6,
    group: 9,
    source: 'https://en.wikipedia.org/wiki/Iridium',
    summary:
      'Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is generally credited with being the second densest element (after osmium) based on measured density, although calculations involving the space lattices of the elements show that iridium is denser. It is also the most corrosion-resistant metal, even at temperatures as high as 2000 \u00b0C. Although only certain molten salts and halogens are corrosive to solid iridium, finely divided iridium dust is much more reactive and can be flammable.',
    symbol: 'Ir',
    xpos: 9,
    ypos: 6,
    wxpos: 23,
    wypos: 6,
    'cpk-hex': '175487',
    image: {
      title: 'Pieces of Pure Iridium, 1 gram. Original size: 0.1 - 0.3 cm each',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Iridium-2.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/iridium.php'
    },
    block: 'd'
  },
  {
    name: 'Platinum',
    atomic_mass: 195.0849,
    number: 78,
    period: 6,
    group: 10,
    source: 'https://en.wikipedia.org/wiki/Platinum',
    summary:
      'Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, gray-white transition metal. Its name is derived from the Spanish term platina, which is literally translated into "little silver".',
    symbol: 'Pt',
    xpos: 10,
    ypos: 6,
    wxpos: 24,
    wypos: 6,
    'cpk-hex': 'd0d0e0',
    image: {
      title: 'Crystals of Pure Platinum grown by gas phase transport',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Platinum_crystals.jpg',
      attribution:
        'Periodictableru, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Gold',
    atomic_mass: 196.9665695,
    number: 79,
    period: 6,
    group: 11,
    source: 'https://en.wikipedia.org/wiki/Gold',
    summary:
      'Gold is a chemical element with symbol Au (from Latin:aurum) and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable and ductile metal. Chemically, gold is a transition metal and a group 11 element.',
    symbol: 'Au',
    xpos: 11,
    ypos: 6,
    wxpos: 25,
    wypos: 6,
    'cpk-hex': 'ffd123',
    image: {
      title: 'Ultrapure Gold Leaf',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Gold_%2879_Au%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gold.php'
    },
    block: 'd'
  },
  {
    name: 'Mercury',
    atomic_mass: 200.5923,
    number: 80,
    period: 6,
    group: 12,
    source: 'https://en.wikipedia.org/wiki/Mercury (Element)',
    summary:
      'Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum (/ha\u026a\u02c8dr\u0251\u02d0rd\u0292\u0259r\u0259m/). A heavy, silvery d-block element, mercury is the only metallic element that is liquid at standard conditions for temperature and pressure; the only other element that is liquid under these conditions is bromine, though metals such as caesium, gallium, and rubidium melt just above room temperature.',
    symbol: 'Hg',
    xpos: 12,
    ypos: 6,
    wxpos: 26,
    wypos: 6,
    'cpk-hex': 'b8b8d0',
    image: {
      title: '6 grams pure mercury. Diameter of the inner disc: 2 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Hydrargyrum_%2880_Hg%29.jpg',
      attribution:
        'Hi-Res Images of Chemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/mercury.php'
    },
    block: 'd'
  },
  {
    name: 'Thallium',
    atomic_mass: 204.38,
    number: 81,
    period: 6,
    group: 13,
    source: 'https://en.wikipedia.org/wiki/Thallium',
    summary:
      'Thallium is a chemical element with symbol Tl and atomic number 81. This soft gray post-transition metal is not found free in nature. When isolated, it resembles tin, but discolors when exposed to air.',
    symbol: 'Tl',
    xpos: 13,
    ypos: 6,
    wxpos: 27,
    wypos: 6,
    'cpk-hex': 'a6544d',
    image: {
      title: '8 grams pure thallium under argon. Original size in cm: 0.7 x 1.5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Thallium_%2881_Tl%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/thallium.php'
    },
    block: 'p'
  },
  {
    name: 'Lead',
    atomic_mass: 207.21,
    number: 82,
    period: 6,
    group: 14,
    source: 'https://en.wikipedia.org/wiki/Lead_(element)',
    summary:
      'Lead (/l\u025bd/) is a chemical element in the carbon group with symbol Pb (from Latin:plumbum) and atomic number 82. Lead is a soft, malleable and heavy post-transition metal. Metallic lead has a bluish-white color after being freshly cut, but it soon tarnishes to a dull grayish color when exposed to air.',
    symbol: 'Pb',
    xpos: 14,
    ypos: 6,
    wxpos: 28,
    wypos: 6,
    'cpk-hex': '575961',
    image: {
      title: 'Ultrapure Lead Bead from two sides. Original size in cm: 1.5 x 2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Lead-2.jpg',
      attribution:
        'Chemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lead.php'
    },
    block: 'p'
  },
  {
    name: 'Bismuth',
    atomic_mass: 208.980401,
    number: 83,
    period: 6,
    group: 15,
    source: 'https://en.wikipedia.org/wiki/Bismuth',
    summary:
      'Bismuth is a chemical element with symbol Bi and atomic number 83. Bismuth, a pentavalent post-transition metal, chemically resembles arsenic and antimony. Elemental bismuth may occur naturally, although its sulfide and oxide form important commercial ores.',
    symbol: 'Bi',
    xpos: 15,
    ypos: 6,
    wxpos: 29,
    wypos: 6,
    'cpk-hex': '9e4fb5',
    image: {
      title: 'Bismuth Crystal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Bismuth-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/bismuth.php'
    },
    block: 'p'
  },
  {
    name: 'Polonium',
    atomic_mass: 209,
    number: 84,
    period: 6,
    group: 16,
    source: 'https://en.wikipedia.org/wiki/Polonium',
    summary:
      'Polonium is a chemical element with symbol Po and atomic number 84, discovered in 1898 by Marie Curie and Pierre Curie. A rare and highly radioactive element with no stable isotopes, polonium is chemically similar to bismuth and tellurium, and it occurs in uranium ores. Applications of polonium are few.',
    symbol: 'Po',
    xpos: 16,
    ypos: 6,
    wxpos: 30,
    wypos: 6,
    'cpk-hex': 'ab5c00',
    image: {
      title:
        'This is only an illustration, not polonium itself. A silvery, radioactive metal, producing so much heat that it gets liquid and ionizes the surrounding air',
      url: 'https://images-of-elements.com/polonium.jpg',
      attribution:
        'Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/polonium.php'
    },
    block: 'p'
  },
  {
    name: 'Astatine',
    atomic_mass: 210,
    number: 85,
    period: 6,
    group: 17,
    source: 'https://en.wikipedia.org/wiki/Astatine',
    summary:
      'Astatine is a very rare radioactive chemical element with the chemical symbol At and atomic number 85. It occurs on Earth as the decay product of various heavier elements. All its isotopes are short-lived; the most stable is astatine-210, with a half-life of 8.1 hours.',
    symbol: 'At',
    xpos: 17,
    ypos: 6,
    wxpos: 31,
    wypos: 6,
    'cpk-hex': '754f45',
    image: {
      title:
        'This is only an illustration, not astatine itself. Crystals similar to iodine, but darker in color than these, which due to the extreme radioactivity glow blue and evaporate to dark purple gas',
      url: 'https://images-of-elements.com/astatine.jpg',
      attribution:
        'Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/astatine.php'
    },
    block: 'p'
  },
  {
    name: 'Radon',
    atomic_mass: 222,
    number: 86,
    period: 6,
    group: 18,
    source: 'https://en.wikipedia.org/wiki/Radon',
    summary:
      'Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas, occurring naturally as a decay product of radium. Its most stable isotope, 222Rn, has a half-life of 3.8 days.',
    symbol: 'Rn',
    xpos: 18,
    ypos: 6,
    wxpos: 32,
    wypos: 6,
    'cpk-hex': '428296',
    image: {
      title:
        'This is only an illustration, not radon itself. Radon is said to glow red in discharge tubes, although it practically is never used for this, due to its strong radioactivity.',
      url: 'https://images-of-elements.com/radon.jpg',
      attribution:
        'Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/radon.php'
    },
    block: 'p'
  },
  {
    name: 'Francium',
    atomic_mass: 223,
    number: 87,
    period: 7,
    group: 1,
    source: 'https://en.wikipedia.org/wiki/Francium',
    summary:
      'Francium is a chemical element with symbol Fr and atomic number 87. It used to be known as eka-caesium and actinium K. It is the second-least electronegative element, behind only caesium. Francium is a highly radioactive metal that decays into astatine, radium, and radon.',
    symbol: 'Fr',
    xpos: 1,
    ypos: 7,
    wxpos: 1,
    wypos: 7,
    'cpk-hex': '420066',
    image: {
      title: 'This is only an illustration, not francium itself.',
      url: 'https://images-of-elements.com/francium.jpg',
      attribution:
        'Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/francium.jpg'
    },
    block: 's'
  },
  {
    name: 'Radium',
    atomic_mass: 226,
    number: 88,
    period: 7,
    group: 2,
    source: 'https://en.wikipedia.org/wiki/Radium',
    summary:
      'Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals. Pure radium is almost colorless, but it readily combines with nitrogen (rather than oxygen) on exposure to air, forming a black surface layer of radium nitride (Ra3N2).',
    symbol: 'Ra',
    xpos: 2,
    ypos: 7,
    wxpos: 2,
    wypos: 7,
    'cpk-hex': '007d00',
    image: {
      title:
        'Radium electroplated on a very small sample of copper foil and covered with polyurethane to prevent reaction with the air',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Radium226.jpg',
      attribution:
        'grenadier, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Actinium',
    atomic_mass: 227,
    number: 89,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Actinium',
    summary:
      'Actinium is a radioactive chemical element with symbol Ac (not to be confused with the abbreviation for an acetyl group) and atomic number 89, which was discovered in 1899. It was the first non-primordial radioactive element to be isolated. Polonium, radium and radon were observed before actinium, but they were not isolated until 1902.',
    symbol: 'Ac',
    xpos: 3,
    ypos: 10,
    wxpos: 3,
    wypos: 7,
    'cpk-hex': '70abfa',
    image: {
      title:
        'Actinium-225 medical radioisotope held in a v-vial at ORNL. The blue glow comes from the ionization of surrounding air by alpha particles',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Actinium_sample_%2831481701837%29.png',
      attribution:
        'Oak Ridge National Laboratory, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons, source: https://www.flickr.com/photos/oakridgelab/31481701837/'
    },
    block: 'f'
  },
  {
    name: 'Thorium',
    atomic_mass: 232.03774,
    number: 90,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Thorium',
    summary:
      'Thorium is a chemical element with symbol Th and atomic number 90. A radioactive actinide metal, thorium is one of only two significantly radioactive elements that still occur naturally in large quantities as a primordial element (the other being uranium). It was discovered in 1828 by the Norwegian Reverend and amateur mineralogist Morten Thrane Esmark and identified by the Swedish chemist J\u00f6ns Jakob Berzelius, who named it after Thor, the Norse god of thunder.',
    symbol: 'Th',
    xpos: 4,
    ypos: 10,
    wxpos: 4,
    wypos: 7,
    'cpk-hex': '00baff',
    image: {
      title: 'Thorium Metal in Ampoule, corroded',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Thorium-1.jpg',
      attribution:
        'W. Oelen, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Protactinium',
    atomic_mass: 231.035882,
    number: 91,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Protactinium',
    summary:
      'Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray metal which readily reacts with oxygen, water vapor and inorganic acids. It forms various chemical compounds where protactinium is usually present in the oxidation state +5, but can also assume +4 and even +2 or +3 states.',
    symbol: 'Pa',
    xpos: 5,
    ypos: 10,
    wxpos: 5,
    wypos: 7,
    'cpk-hex': '00a1ff',
    image: {
      title:
        'This sample of Protactinium-233 (dark circular area in the photo) was photographed in the light from its own radioactive emission (the lighter area) at the National Reactor Testing Station in Idaho.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Protactinium-233.jpg',
      attribution: 'ENERGY.GOV, Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Uranium',
    atomic_mass: 238.028913,
    number: 92,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Uranium',
    summary:
      'Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons.',
    symbol: 'U',
    xpos: 6,
    ypos: 10,
    wxpos: 6,
    wypos: 7,
    'cpk-hex': '008fff',
    image: {
      title: 'A biscuit of uranium metal after reduction via the Ames Process. c.1943.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Ames_Process_uranium_biscuit.jpg',
      attribution: 'Unknown authorUnknown author, Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Neptunium',
    atomic_mass: 237,
    number: 93,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Neptunium',
    summary:
      'Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element. Its position in the periodic table just after uranium, named after the planet Uranus, led to it being named after Neptune, the next planet beyond Uranus.',
    symbol: 'Np',
    xpos: 7,
    ypos: 10,
    wxpos: 7,
    wypos: 7,
    'cpk-hex': '0080ff',
    image: {
      title: 'Neptunium 237 sphere (6 kg)',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Neptunium2.jpg',
      attribution: 'Los Alamos National Laboratory,, Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Plutonium',
    atomic_mass: 244,
    number: 94,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Plutonium',
    summary:
      'Plutonium is a transuranic radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized. The element normally exhibits six allotropes and four oxidation states.',
    symbol: 'Pu',
    xpos: 8,
    ypos: 10,
    wxpos: 8,
    wypos: 7,
    'cpk-hex': '006bff',
    image: {
      title: 'Plutonium Ring',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Plutonium_ring.jpg',
      attribution: 'Los Alamos National Laboratory, Attribution, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Americium',
    atomic_mass: 243,
    number: 95,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Americium',
    summary:
      'Americium is a radioactive transuranic chemical element with symbol Am and atomic number 95. This member of the actinide series is located in the periodic table under the lanthanide element europium, and thus by analogy was named after the Americas. Americium was first produced in 1944 by the group of Glenn T.Seaborg from Berkeley, California, at the metallurgical laboratory of University of Chicago.',
    symbol: 'Am',
    xpos: 9,
    ypos: 10,
    wxpos: 9,
    wypos: 7,
    'cpk-hex': '545cf2',
    image: {
      title: 'A small disc of Am-241 under the microscope.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Americium_microscope.jpg',
      attribution:
        'Bionerd, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Curium',
    atomic_mass: 247,
    number: 96,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Curium',
    summary:
      'Curium is a transuranic radioactive chemical element with symbol Cm and atomic number 96. This element of the actinide series was named after Marie and Pierre Curie \u2013 both were known for their research on radioactivity. Curium was first intentionally produced and identified in July 1944 by the group of Glenn T. Seaborg at the University of California, Berkeley.',
    symbol: 'Cm',
    xpos: 10,
    ypos: 10,
    wxpos: 10,
    wypos: 7,
    'cpk-hex': '785ce3',
    image: {
      title: 'A piece of curium, which emitts strong radiation that makes it glow',
      url: 'https://images-of-elements.com/s/curium-glow.jpg',
      attribution:
        'European Union, The Actinide Group, Institute for Transuranium Elements (JRC-ITU), source: https://images-of-elements.com/curium.php'
    },
    block: 'f'
  },
  {
    name: 'Berkelium',
    atomic_mass: 247,
    number: 97,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Berkelium',
    summary:
      'Berkelium is a transuranic radioactive chemical element with symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series. It is named after the city of Berkeley, California, the location of the University of California Radiation Laboratory where it was discovered in December 1949.',
    symbol: 'Bk',
    xpos: 11,
    ypos: 10,
    wxpos: 11,
    wypos: 7,
    'cpk-hex': '8a4fe3',
    image: {
      title:
        'It took 250 days to make enough berkelium, shown here (in dissolved state), to synthesize element 117',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Berkelium.jpg',
      attribution: 'ORNL, Department of Energy, Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Californium',
    atomic_mass: 251,
    number: 98,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Californium',
    summary:
      'Californium is a radioactive metallic chemical element with symbol Cf and atomic number 98. The element was first made in 1950 at the University of California Radiation Laboratory in Berkeley, by bombarding curium with alpha particles (helium-4 ions). It is an actinide element, the sixth transuranium element to be synthesized, and has the second-highest atomic mass of all the elements that have been produced in amounts large enough to see with the unaided eye (after einsteinium).',
    symbol: 'Cf',
    xpos: 12,
    ypos: 10,
    wxpos: 12,
    wypos: 7,
    'cpk-hex': 'a136d4',
    image: {
      title:
        'A disc of californium metal (249Cf, 10 mg). The source implies that the disc has a diameter about twice the thickness of a typical pin, or on the order of 1 mm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Californium.jpg',
      attribution:
        'United States Department of Energy (see File:Einsteinium.jpg), Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Einsteinium',
    atomic_mass: 252,
    number: 99,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Einsteinium',
    summary:
      'Einsteinium is a synthetic element with symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide. Einsteinium was discovered as a component of the debris of the first hydrogen bomb explosion in 1952, and named after Albert Einstein.',
    symbol: 'Es',
    xpos: 13,
    ypos: 10,
    wxpos: 13,
    wypos: 7,
    'cpk-hex': 'b31fd4',
    image: {
      title: '300 micrograms of Einsteinium 253, which has a half-life of 20 days.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Einsteinium.jpg',
      attribution:
        'Haire, R. G., US Department of Energy.Touched up by Materialscientist at en.wikipedia., Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Fermium',
    atomic_mass: 257,
    number: 100,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Fermium',
    summary:
      'Fermium is a synthetic element with symbol Fm and atomic number 100. It is a member of the actinide series. It is the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities, although pure fermium metal has not yet been prepared.',
    symbol: 'Fm',
    xpos: 14,
    ypos: 10,
    wxpos: 14,
    wypos: 7,
    'cpk-hex': 'b31fba',
    image: {
      title: 'Fermium was first observed in the fallout from the Ivy Mike nuclear test.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Ivy_Mike_-_mushroom_cloud.jpg',
      attribution: 'U.S. Department of Energy, Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Mendelevium',
    atomic_mass: 258,
    number: 101,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Mendelevium',
    summary:
      'Mendelevium is a synthetic element with chemical symbol Md (formerly Mv) and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements. It is the antepenultimate actinide and the ninth transuranic element.',
    symbol: 'Md',
    xpos: 15,
    ypos: 10,
    wxpos: 15,
    wypos: 7,
    'cpk-hex': 'b30da6',
    image: {
      title:
        'This is only an illustration, not mendelevium itself. Chemically similar to Thulium, the highly radioactive heavy metal emits very energetic \u03b1-radiation.',
      url: 'https://images-of-elements.com/s/mendelevium.jpg',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/mendelevium.php'
    },
    block: 'f'
  },
  {
    name: 'Nobelium',
    atomic_mass: 259,
    number: 102,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Nobelium',
    summary:
      'Nobelium is a synthetic chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science. A radioactive metal, it is the tenth transuranic element and is the penultimate member of the actinide series.',
    symbol: 'No',
    xpos: 16,
    ypos: 10,
    wxpos: 16,
    wypos: 7,
    'cpk-hex': 'bd0d87',
    image: {
      title:
        'This is only an illustration, not nobelium itself. Nobelium can only be made in very small amounts and emits strong radiation of various kinds.',
      url: 'https://images-of-elements.com/nobelium.jpg',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/nobelium.php'
    },
    block: 'f'
  },
  {
    name: 'Lawrencium',
    atomic_mass: 266,
    number: 103,
    period: 7,
    group: 3,
    source: 'https://en.wikipedia.org/wiki/Lawrencium',
    summary:
      'Lawrencium is a synthetic chemical element with chemical symbol Lr (formerly Lw) and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron, a device that was used to discover many artificial radioactive elements. A radioactive metal, lawrencium is the eleventh transuranic element and is also the final member of the actinide series.',
    symbol: 'Lr',
    xpos: 17,
    ypos: 10,
    wxpos: 17,
    wypos: 7,
    'cpk-hex': 'c70066',
    image: {
      title:
        'This is only an illustration, not lawrencium itself. Lawrencium can only be made in very small amounts and emits strong radiation',
      url: 'https://images-of-elements.com/lawrencium.jpg',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/lawrencium.php'
    },
    block: 'd'
  },
  {
    name: 'Rutherfordium',
    atomic_mass: 267,
    number: 104,
    period: 7,
    group: 4,
    source: 'https://en.wikipedia.org/wiki/Rutherfordium',
    summary:
      'Rutherfordium is a chemical element with symbol Rf and atomic number 104, named in honor of physicist Ernest Rutherford. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 267Rf, has a half-life of approximately 1.3 hours. In the periodic table of the elements, it is a d - block element and the second of the fourth - row transition elements.',
    symbol: 'Rf',
    xpos: 4,
    ypos: 7,
    wxpos: 18,
    wypos: 7,
    'cpk-hex': 'cc0059',
    image: {
      title:
        'Decay traces in a spark chamber, not of rutherfordium, but of a pion. This is a completely different, unrelated particle, but the decay of rutherfordium would make streaks there, too.',
      url: 'https://images-of-elements.com/s/rutherfordium.jpg',
      attribution:
        'Image \u00a9 CERN, Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/rutherfordium.php'
    },
    block: 'd'
  },
  {
    name: 'Dubnium',
    atomic_mass: 268,
    number: 105,
    period: 7,
    group: 5,
    source: 'https://en.wikipedia.org/wiki/Dubnium',
    summary:
      'Dubnium is a chemical element with symbol Db and atomic number 105. It is named after the town of Dubna in Russia (north of Moscow), where it was first produced. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, dubnium-268, has a half-life of approximately 28 hours.',
    symbol: 'Db',
    xpos: 5,
    ypos: 7,
    wxpos: 19,
    wypos: 7,
    'cpk-hex': 'd1004f',
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/dubnium.php'
    },
    block: 'd'
  },
  {
    name: 'Seaborgium',
    atomic_mass: 269,
    number: 106,
    period: 7,
    group: 6,
    source: 'https://en.wikipedia.org/wiki/Seaborgium',
    summary:
      'Seaborgium is a synthetic element with symbol Sg and atomic number 106. Its most stable isotope 271Sg has a half-life of 1.9 minutes. A more recently discovered isotope 269Sg has a potentially slightly longer half-life (ca.',
    symbol: 'Sg',
    xpos: 6,
    ypos: 7,
    wxpos: 20,
    wypos: 7,
    'cpk-hex': 'd90045',
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/seaborgium.php'
    },
    block: 'd'
  },
  {
    name: 'Bohrium',
    atomic_mass: 270,
    number: 107,
    period: 7,
    group: 7,
    source: 'https://en.wikipedia.org/wiki/Bohrium',
    summary:
      'Bohrium is a chemical element with symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 270Bh, has a half-life of approximately 61 seconds.',
    symbol: 'Bh',
    xpos: 7,
    ypos: 7,
    wxpos: 21,
    wypos: 7,
    'cpk-hex': 'e00038',
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/bohrium.php'
    },
    block: 'd'
  },
  {
    name: 'Hassium',
    atomic_mass: 269,
    number: 108,
    period: 7,
    group: 8,
    source: 'https://en.wikipedia.org/wiki/Hassium',
    summary:
      'Hassium is a chemical element with symbol Hs and atomic number 108, named after the German state of Hesse. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 269Hs, has a half-life of approximately 9.7 seconds, although an unconfirmed metastable state, 277mHs, may have a longer half-life of about 130 seconds. More than 100 atoms of hassium have been synthesized to date.',
    symbol: 'Hs',
    xpos: 8,
    ypos: 7,
    wxpos: 22,
    wypos: 7,
    'cpk-hex': 'e6002e',
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/hassium.php'
    },
    block: 'd'
  },
  {
    name: 'Meitnerium',
    atomic_mass: 278,
    number: 109,
    period: 7,
    group: 9,
    source: 'https://en.wikipedia.org/wiki/Meitnerium',
    summary:
      'Meitnerium is a chemical element with symbol Mt and atomic number 109. It is an extremely radioactive synthetic element (an element not found in nature that can be created in a laboratory). The most stable known isotope, meitnerium-278, has a half-life of 7.6 seconds.',
    symbol: 'Mt',
    xpos: 9,
    ypos: 7,
    wxpos: 23,
    wypos: 7,
    'cpk-hex': 'eb0026',
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/meitnerium.php'
    },
    block: 'd'
  },
  {
    name: 'Darmstadtium',
    atomic_mass: 281,
    number: 110,
    period: 7,
    group: 10,
    source: 'https://en.wikipedia.org/wiki/Darmstadtium',
    summary:
      'Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is an extremely radioactive synthetic element. The most stable known isotope, darmstadtium-281, has a half-life of approximately 10 seconds.',
    symbol: 'Ds',
    xpos: 10,
    ypos: 7,
    wxpos: 24,
    wypos: 7,
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/darmstadtium.php'
    },
    block: 'd'
  },
  {
    name: 'Roentgenium',
    atomic_mass: 282,
    number: 111,
    period: 7,
    group: 11,
    source: 'https://en.wikipedia.org/wiki/Roentgenium',
    summary:
      'Roentgenium is a chemical element with symbol Rg and atomic number 111. It is an extremely radioactive synthetic element (an element that can be created in a laboratory but is not found in nature); the most stable known isotope, roentgenium-282, has a half-life of 2.1 minutes. Roentgenium was first created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research near Darmstadt, Germany.',
    symbol: 'Rg',
    xpos: 11,
    ypos: 7,
    wxpos: 25,
    wypos: 7,
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/roentgenium.php'
    },
    block: 'd'
  },
  {
    name: 'Copernicium',
    atomic_mass: 285,
    number: 112,
    period: 7,
    group: 12,
    source: 'https://en.wikipedia.org/wiki/Copernicium',
    summary:
      'Copernicium is a chemical element with symbol Cn and atomic number 112. It is an extremely radioactive synthetic element that can only be created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 29 seconds, but it is possible that this copernicium isotope may have a nuclear isomer with a longer half-life, 8.9 min.',
    symbol: 'Cn',
    xpos: 12,
    ypos: 7,
    wxpos: 26,
    wypos: 7,
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/copernicium.php'
    },
    block: 'd'
  },
  {
    name: 'Nihonium',
    atomic_mass: 286,
    number: 113,
    period: 7,
    group: 13,
    source: 'https://en.wikipedia.org/wiki/Ununtrium',
    summary:
      'Nihonium is a chemical element with atomic number 113. It has a symbol Nh. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and is extremely radioactive; its most stable known isotope, nihonium-286, has a half-life of 20 seconds.',
    symbol: 'Nh',
    xpos: 13,
    ypos: 7,
    wxpos: 27,
    wypos: 7,
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/nihonium.php'
    },
    block: 'p'
  },
  {
    name: 'Flerovium',
    atomic_mass: 289,
    number: 114,
    period: 7,
    group: 14,
    source: 'https://en.wikipedia.org/wiki/Flerovium',
    summary:
      'Flerovium is a superheavy artificial chemical element with symbol Fl and atomic number 114. It is an extremely radioactive synthetic element. The element is named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute for Nuclear Research in Dubna, Russia, where the element was discovered in 1998.',
    symbol: 'Fl',
    xpos: 14,
    ypos: 7,
    wxpos: 28,
    wypos: 7,
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/flerovium.php'
    },
    block: 'p'
  },
  {
    name: 'Moscovium',
    atomic_mass: 289,
    number: 115,
    period: 7,
    group: 15,
    source: 'https://en.wikipedia.org/wiki/Ununpentium',
    summary:
      'Moscovium is the name of a synthetic superheavy element in the periodic table that has the symbol Mc and has the atomic number 115. It is an extremely radioactive element; its most stable known isotope, moscovium-289, has a half-life of only 220 milliseconds. It is also known as eka-bismuth or simply element 115.',
    symbol: 'Mc',
    xpos: 15,
    ypos: 7,
    wxpos: 29,
    wypos: 7,
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/moscovium.php'
    },
    block: 'p'
  },
  {
    name: 'Livermorium',
    atomic_mass: 293,
    number: 116,
    period: 7,
    group: 16,
    source: 'https://en.wikipedia.org/wiki/Livermorium',
    summary:
      'Livermorium is a synthetic superheavy element with symbol Lv and atomic number 116. It is an extremely radioactive element that has only been created in the laboratory and has not been observed in nature. The element is named after the Lawrence Livermore National Laboratory in the United States, which collaborated with the Joint Institute for Nuclear Research in Dubna, Russia to discover livermorium in 2000.',
    symbol: 'Lv',
    xpos: 16,
    ypos: 7,
    wxpos: 30,
    wypos: 7,
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/livermorium.php'
    },
    block: 'p'
  },
  {
    name: 'Tennessine',
    atomic_mass: 294,
    number: 117,
    period: 7,
    group: 17,
    source: 'https://en.wikipedia.org/wiki/Tennessine',
    summary:
      'Tennessine is a superheavy artificial chemical element with an atomic number of 117 and a symbol of Ts. Also known as eka-astatine or element 117, it is the second-heaviest known element and penultimate element of the 7th period of the periodic table. As of 2016, fifteen tennessine atoms have been observed: six when it was first synthesized in 2010, seven in 2012, and two in 2014.',
    symbol: 'Ts',
    xpos: 17,
    ypos: 7,
    wxpos: 31,
    wypos: 7,
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/tenessine.php'
    },
    block: 'p'
  },
  {
    name: 'Oganesson',
    atomic_mass: 294,
    number: 118,
    period: 7,
    group: 18,
    source: 'https://en.wikipedia.org/wiki/Oganesson',
    summary:
      "Oganesson is IUPAC's name for the transactinide element with the atomic number 118 and element symbol Og. It is also known as eka-radon or element 118, and on the periodic table of the elements it is a p-block element and the last one of the 7th period. Oganesson is currently the only synthetic member of group 18.",
    symbol: 'Og',
    xpos: 18,
    ypos: 7,
    wxpos: 32,
    wypos: 7,
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/oganesson.php'
    },
    block: 'p'
  },
  {
    name: 'Ununennium',
    atomic_mass: 315,
    number: 119,
    period: 8,
    group: 1,
    source: 'https://en.wikipedia.org/wiki/Ununennium',
    summary:
      'Ununennium, also known as eka-francium or simply element 119, is the hypothetical chemical element with symbol Uue and atomic number 119. Ununennium and Uue are the temporary systematic IUPAC name and symbol respectively, until a permanent name is decided upon. In the periodic table of the elements, it is expected to be an s-block element, an alkali metal, and the first element in the eighth period.',
    symbol: 'Uue',
    xpos: 1,
    ypos: 8,
    wxpos: 1,
    wypos: 8,
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elments A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com'
    },
    block: 's'
  }
]
