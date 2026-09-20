/**
 * All portfolio copy lives here.
 * Extracted from rajankitpandey96.wixsite.com/raj-ankit-pandey and the CV PDF.
 * Edit this one file to update the whole site.
 */

export const profile = {
  name: 'Raj Ankit Pandey',
  role: 'Ph.D. Researcher in Functional Materials & Energy Harvesting',
  institute: 'Thapar Institute of Engineering & Technology',
  department: 'Department of Physics and Materials Science',
  location: 'Patiala, Punjab, 147004, India',
  email: 'rajankitpandey96@gmail.com',
  phone: '+91 7979018686',
  portrait: 'images/portrait.jpg',
  cv: 'Raj_Ankit_CV.pdf',
  bio: `I am a Ph.D. researcher in Physics and Materials Science at Thapar Institute of Engineering & Technology, working on triboelectric nanogenerators and sustainable energy-harvesting systems. My research explores biopolymer-based materials such as chitosan, cellulose, starch, and silk, along with ceramic–polymer composites for energy harvesting and self-powered sensors. I also work on piezoelectric materials, electroceramics, and functional nanocomposites. Alongside my doctoral research, I have worked on PTCR thermistor ceramics for industrial temperature-sensing applications. My expertise includes materials synthesis, electrospinning, ceramic processing, micro/nanostructuring, and electrical and structural characterization.`,
  rotating: ['Nanogenerators', 'Biopolymers', 'Electroceramics', 'Self-Powered Sensors', 'Clean Energy'],
  typed: [
    'Turning motion into electricity.',
    'Chitosan, cellulose, silk — reimagined as power.',
    'Ph.D. Physics · Materials Science.',
    'Seeking postdoctoral research opportunities.'
  ]
};

/** Real lab / figure imagery supplied by Raj. */
export const media = {
  collage: 'images/research/collage.jpg'
};

export const links = {
  scholar: 'https://scholar.google.com/citations?user=lXrVhR0AAAAJ&hl=en',
  researchgate: 'https://www.researchgate.net/profile/Raj-Pandey-14?ev=hdr_xprf',
  linkedin: 'https://www.linkedin.com/in/raj-ankit-3638b7315/',
  email: 'mailto:rajankitpandey96@gmail.com'
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Research', href: '#research' },
  { label: 'Thesis', href: '#thesis' },
  { label: 'Experience', href: '#experience' },
  { label: 'Awards', href: '#awards' },
  { label: 'Papers', href: '#publications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Connect', href: '#connect' }
];

export const stats = [
  { value: 5, suffix: '', label: 'Journal Publications' },
  { value: 3, suffix: '', label: 'Conference Presentations' },
  { value: 8.85, suffix: '', label: 'Ph.D. CGPA', decimals: 2 },
  { value: 4, suffix: '+', label: 'Years in the Lab' }
];

export const researchAreas = [
  {
    id: 'sustainable',
    index: '01',
    title: 'Sustainable Materials',
    tag: 'Biopolymers · Circular Economy',
    blurb:
      'Exploring biodegradable polymers and waste-derived materials for eco-friendly electronics.',
    detail:
      'Chitosan, cellulose, starch and silk are studied to understand how molecular structure, functional groups and surface polarity govern triboelectric charge generation — turning materials that normally end up as waste into working power sources.',
    bullets: [
      'Chitosan systems — strong positive triboelectric behaviour from amino & hydroxyl groups',
      'Microbial cellulose — hierarchical fibrous morphology, high surface area, edible and biodegradable',
      'Waste polystyrene reclaimed into a flexible, robust generator'
    ],
    image: 'images/research/sustainable.jpg',
    caption:
      'Cast biopolymer film, electrospun chitosan/PVA nanofibres (25 kX), ceramic microcrystals (10 kX) and a microbial-cellulose fibre network (500X).',
    accent: '#22d3ee'
  },
  {
    id: 'harvesting',
    index: '02',
    title: 'Energy Harvesting Systems',
    tag: 'Triboelectric · Piezoelectric · Electromagnetic',
    blurb:
      'Design and optimization of triboelectric, piezoelectric and electromagnetic generators for ambient energy conversion.',
    detail:
      'Device architectures are tuned for contact area, charge trapping and impedance matching so that ordinary vibration, tapping and acoustic noise become a usable electrical output — enough to charge capacitors and drive small electronics.',
    bullets: [
      'Vibrational and acoustic energy harvesting',
      'Capacitor charging and power-management demonstrations',
      'Hybrid piezoelectric–triboelectric coupling'
    ],
    image: 'images/research/harvesting.jpg',
    caption:
      'The contact–separation tapping device I built, a rectifier board driving LEDs from TENG output, and a hybrid electromagnetic–triboelectric wind harvester characterised against an anemometer.',
    accent: '#a855f7'
  },
  {
    id: 'sensors',
    index: '03',
    title: 'Self-Powered Sensors',
    tag: 'Motion · Speed · Impact · HMI',
    blurb:
      'Developing triboelectric sensing systems for motion, speed, impact detection, and human–machine interaction.',
    detail:
      'Because a triboelectric device generates its own signal, it can sense without a battery. Demonstrations include a self-powered speed sensor, a working game controller and a remote toy-car controller built directly from the nanogenerator output.',
    bullets: [
      'Self-powered speed sensing from chitosan/PVA nanofibre membranes',
      'Game controller driven by a BaTiO₃/chitosan composite TENG',
      'Human–machine interface from waste polystyrene'
    ],
    gallery: [
      {
        src: 'images/research/sensor-speed.jpg',
        label: 'Self-powered speed sensor',
        note: 'Two TENGs spaced 0.5 m apart on the road surface time a passing motorcycle from the delay between voltage spikes — t₁ = 3.12 s, t₂ = 3.27 s.'
      },
      {
        src: 'images/research/sensor-game.jpg',
        label: 'TENG game controller',
        note: 'TENG sensor pads feed a microcontroller that maps taps to directional input — driving a live game with no battery in the sensing layer.'
      },
      {
        src: 'images/research/sensor-security.jpg',
        label: 'Self-powered security node',
        note: 'Pressure on the TENG wakes an Arduino over Bluetooth, which triggers YOLO webcam detection and pushes a Telegram alert when a human is confirmed.'
      }
    ],
    accent: '#38bdf8'
  },
  {
    id: 'ceramics',
    index: '04',
    title: 'Advanced Ceramics',
    tag: 'Dielectric · Piezoelectric · PTCR',
    blurb:
      'Synthesis of high-performance dielectric, piezoelectric, and thermistor ceramics for industrial applications.',
    detail:
      'Alongside the doctoral work, a PTCR thermistor was developed end-to-end for industrial temperature sensing — from solid-state powder synthesis and roll milling through to nickel electroplating on sintered pellets.',
    bullets: [
      'PTCR thermistor delivered for industrial use (AJM India Pvt. Ltd.)',
      'BaTiO₃ and BCZT systems tuned for the semiconducting industry',
      'Electroplating and electroless nickel plating on ceramic pellets'
    ],
    image: 'images/research/ceramics.jpg',
    caption:
      'Sintered PTCR thermistor pellets developed for industrial temperature sensing, and a mains-load switching demonstration on the bench.',
    accent: '#f59e0b'
  }
];

export const thesis = {
  phd: {
    label: 'Ph.D. Thesis',
    title: 'Biopolymer-based triboelectric nanogenerators for energy harvesting and sensor applications',
    brief:
      'A systematic study of the triboelectric properties of biopolymer films, across multiple synthesis routes.',
    points: [
      'Multiple biodegradable polymers — chitosan, starch, silk and cellulose — explored systematically to understand how molecular structure, functional groups and surface polarity influence triboelectric charge generation.',
      'Chitosan-based systems showed strong positive triboelectric behaviour thanks to abundant amino and hydroxyl groups, enabling efficient charge transfer during contact electrification.',
      'Cellulose and cellulose-derived structures were investigated for their hierarchical fibrous morphology, high surface area and excellent biodegradability, which improved contact efficiency and output.',
      'Micro/nanostructuring by electrospinning and solution casting increased the effective contact area and significantly improved electrical output.',
      'Dielectric enhancement through ceramic fillers such as BaTiO₃ improved polarization, charge trapping and energy-storage capability of the biopolymer matrices.',
      'Device-level demonstrations: self-powered speed sensing, vibration and acoustic harvesting, capacitor charging, a game controller and a toy-car controller.'
    ]
  },
  msc: {
    label: 'M.Sc. Thesis',
    title: 'Energy harvesting from lead-free piezoelectric material',
    brief:
      'Environmentally benign piezoelectric harvesters built from lead-free materials as alternatives to conventional lead-based ceramics such as PZT.',
    points: [
      'BCZT powders synthesized and structurally analysed to confirm phase purity.',
      'PVDF incorporated as a flexible piezoelectric matrix for its light weight, mechanical flexibility and β-phase polarization.'
    ]
  }
};

export const education = [
  {
    degree: 'Ph.D. Physics',
    period: 'Jan 2022 – Present',
    score: 'CGPA 8.85',
    place: 'Thapar Institute of Engineering and Technology, Patiala'
  },
  {
    degree: 'M.Sc. Physics',
    period: 'Jul 2018 – Jul 2020',
    score: 'CGPA 9.01',
    place: 'Thapar Institute of Engineering and Technology, Patiala'
  },
  {
    degree: 'B.Sc. Physics',
    period: 'Jul 2014 – May 2017',
    score: '86.38%',
    place: 'Tilkamanjhi Bhagalpur University, Bhagalpur, Bihar'
  }
];

export const experience = [
  {
    period: 'July 2022 – June 2023',
    role: 'Lecturer (Contractual)',
    org: 'Dept. of Physics and Materials Science, Thapar Institute',
    points: [
      'Teaching undergraduate laboratory courses and tutorials for Engineering Materials.',
      'Assisted in writing research proposals for funding from various agencies.'
    ]
  },
  {
    period: 'July 2023 – June 2024',
    role: 'Assistant Professor (Contractual)',
    org: 'Dept. of Physics and Materials Science, Thapar Institute',
    points: [
      'Teaching undergraduate laboratory courses.',
      'Demonstrating instrument capabilities with real-time analysis to students.',
      'Tutorials for the Engineering Materials course.'
    ]
  },
  {
    period: 'July 2024 – Sept. 2024',
    role: 'Assistant Professor (Contractual)',
    org: 'Dept. of Physics and Materials Science, Thapar Institute',
    points: ['Teaching undergraduate laboratory courses.', 'Tutorials for the Applied Physics course.']
  },
  {
    period: 'Oct. 2024 – Dec. 2025',
    role: 'Senior Research Fellow (SRF)',
    org: 'Industry-sponsored project · AJM India Pvt. Ltd.',
    points: [
      'Synthesis and characterization of ceramics for a thermistor.',
      'Successfully developed the PTCR thermistor for industrial applications.',
      'Fabricated roll milling for homogeneous powder mixing.',
      'Fabricated a sample holder for high-temperature dielectric measurement.',
      'Electroplating and electroless plating of nickel on ceramic pellets.'
    ]
  },
  {
    period: 'Jan. 2026 – Present',
    role: 'Assistant Professor (Contractual)',
    org: 'Dept. of Physics and Materials Science, Thapar Institute',
    points: ['Teaching undergraduate laboratory courses.', 'Tutorials for the Applied Physics course.']
  }
];

export const awards = [
  {
    title: 'Best Research Poster Award',
    meta: 'RAICGC 2025 · IIT Bombay',
    detail:
      'First place at the International Conference on Research Advancements and Challenges in Glass and Ceramics (RAICGC-2025), 27–29 November 2025, at the 89th annual session of the Indian Ceramic Society, Indian Institute of Technology Bombay, Mumbai, India.',
    icon: 'trophy'
  },
  {
    title: 'Senior Research Fellowship (SRF)',
    meta: 'AJM India Pvt. Ltd.',
    detail:
      'Selected for the SRF on the basis of academic performance and a research proposal in an industry-sponsored project.',
    icon: 'badge'
  },
  {
    title: 'Distinction — B.Sc. Physics',
    meta: 'Tilkamanjhi Bhagalpur University',
    detail: 'Distinction in the B.Sc. (Physics) examination, Bhagalpur, India.',
    icon: 'star'
  },
  {
    title: 'APC Waiver',
    meta: 'Materials Today Advances (Elsevier)',
    detail:
      'Article Processing Charge waiver awarded in recognition of research quality.',
    icon: 'spark'
  },
  {
    title: 'Top 5 Rank Holder — M.Sc. Physics',
    meta: 'Thapar Institute, Patiala',
    detail: 'Placed among the top five of the M.Sc. (Physics) cohort.',
    icon: 'rank'
  },
  {
    title: '1st Place — District Science Quiz',
    meta: 'Vidya-Bharti · Classes XI & XII',
    detail: 'First place in the district-level science quiz conducted by Vidya-Bharti.',
    icon: 'quiz'
  }
];

export const publications = [
  {
    n: '01',
    year: '2026',
    authors: 'R. Ankit, P. Prakash, R. Singla, J. Kolte',
    title:
      'Energy from trash: a flexible, facile, and robust triboelectric nanogenerator based on waste polystyrene and application as a human–machine interface',
    journal: 'RSC Advances',
    detail: '16(5), 4107–4115',
    doi: 'https://doi.org/10.1039/d5ra09473a'
  },
  {
    n: '02',
    year: '2026',
    authors: 'R. Ankit, S. Kaur, S. Athwal, T. Kaur, J. Kolte',
    title:
      'An edible microbial cellulose-based triboelectric nanogenerator: a sustainable approach for energy harvesting',
    journal: 'Materials Advances',
    detail: '7(3), 1508–1518',
    doi: 'https://doi.org/10.1039/d5ma01186h'
  },
  {
    n: '03',
    year: '2025',
    authors: 'R. Ankit, J. Kolte',
    title:
      'High-performance piezoelectric 2D-single crystalline BaTiO₃/chitosan composite-based triboelectric nanogenerator for vibrational energy harvesting and game controller',
    journal: 'Materials Today Advances',
    detail: '28, 100630',
    doi: 'https://doi.org/10.1016/j.mtadv.2025.100630'
  },
  {
    n: '04',
    year: '2025',
    authors: 'R. Ankit, J. Kolte',
    title:
      'Engineering of chitosan/poly(vinyl alcohol) nanofibrous membrane as triboelectric nanogenerator for energy harvesting and self-powered speed sensor',
    journal: 'Journal of Materials Science: Materials in Electronics',
    detail: '36(22), 1366',
    doi: 'https://doi.org/10.1007/s10854-025-15399-2'
  },
  {
    n: '05',
    year: '2025',
    authors: 'R. Ankit, T. Chakraborty, J. Kolte',
    title:
      'Scalable electrospun chitosan/PVA nanofibers: a pathway for triboelectric nanogenerator-based energy harvesting',
    journal: 'Polymer',
    detail: '335, 128848',
    doi: 'https://doi.org/10.1016/j.polymer.2025.128848'
  }
];

export const conferences = [
  {
    title:
      'Highly sensitive triboelectric nanogenerator based on chitosan/PVA for energy harvesting and human motion sensors',
    meta: 'ICRABB-2023 · NIT Jalandhar · 13–14 October 2023'
  },
  {
    title:
      'Highly sensitive triboelectric nanogenerator based on chitosan/PVA for energy harvesting and human motion sensors',
    meta: 'ICSEE-2024 · MANIT Bhopal · 23–24 February 2024'
  },
  {
    title: 'Tuning of electrical properties of barium titanate-based ceramics for the semiconducting industry',
    meta: 'RAICGC-2025 · IIT Bombay · 27–29 November 2025'
  }
];

export const skills = [
  {
    group: 'Characterization',
    items: [
      'SEM',
      'FESEM',
      'XRD',
      'EDX',
      'Raman',
      'FTIR',
      'Dielectric',
      'Impedance',
      'Piezoelectric',
      'Triboelectric',
      'I–V',
      'C–V'
    ]
  },
  {
    group: 'Synthesis & Fabrication',
    items: [
      'Sol-gel route',
      'Solid-state reaction',
      'Powder compaction',
      'Electrospinning',
      'Tape casting',
      'Spray coating',
      'RTGG',
      'Electroplating',
      'Electroless Ni plating'
    ]
  },
  {
    group: 'Software',
    items: ['OriginPro', "X'Pert HighScore", 'ImageJ', 'MS Office']
  }
];

export const facilities = [
  'Designed and installed a sample holder for temperature-dependent dielectric measurement.',
  'Designed and installed a linear-motor-based tapping device for triboelectric measurements.',
  'Fabricated roll milling for homogeneous mixing of powder via a solid-state reaction route.'
];

export const researchInterests = [
  'Triboelectric Nanogenerators (TENGs) and Self-Powered Systems',
  'Energy Harvesting from Mechanical and Acoustic Sources',
  'Biopolymer-Based Functional Materials for Sustainable Electronics',
  'Polymer–Ceramic Nanocomposites (BCZT, BaTiO₃, PVDF Systems)',
  'Self-Powered Sensing and Smart Monitoring Systems',
  'Surface Engineering and Micro/Nanostructuring for Charge Enhancement',
  'Dielectric and Ferroelectric Materials for Energy Applications',
  'Waste-Derived Functional Materials and Circular Economy Materials',
  'Electrospinning and Solution-Processed Functional Films',
  'Hybrid Energy Harvesting Devices (Piezoelectric–Triboelectric Coupling)',
  'Electroceramics and Functional Ceramic Devices',
  'Thermistor Materials and Temperature Sensors for Industrial Applications'
];

export const references = [
  {
    name: 'Dr. Jayant Kolte',
    role: 'Associate Professor',
    org: 'Dept. of Physics & Materials Science, Thapar Institute, Patiala',
    email: 'jayantkolte@thapar.edu'
  },
  {
    name: 'Prof. Kulvir Singh',
    role: 'Professor',
    org: 'Dept. of Physics & Materials Science, Thapar Institute, Patiala',
    email: 'kusingh@thapar.edu'
  }
];

export const connect = {
  heading: "Let's Connect",
  body:
    'I am currently seeking postdoctoral research opportunities in Materials Science. My research interests include triboelectric/piezoelectric nanogenerators, sustainable functional materials, ceramic–polymer composites, electroceramics, and self-powered sensing.'
};

/** Frame sequences driving the scroll animations. */
export const sequences = {
  hero: { dir: 'frames/hero', count: 121, pad: 3, ext: 'jpg' },
  lab: { dir: 'frames/lab', count: 96, pad: 3, ext: 'jpg' }
};
