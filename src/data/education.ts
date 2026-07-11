export interface Degree {
  degree: string;
  institution: string;
  dates: string;
  imageLight?: string;
  imageDark?: string;
  gpa?: string;
  details?: string[];
}

export interface Award {
  name: string;
  org?: string;
  year?: string;
  image?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  image?: string;
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
}

export const degrees: Degree[] = [
  {
    degree: "M.S. Electrical Engineering",
    institution: "Colorado School of Mines",
    dates: "2025 – Present",
    imageLight: "/education/Mines-center.png",
    imageDark: "/education/Mines-center-white.png",
    details: ["Thesis Track", "IEEE HKN Honor Society", "GPA: 4.0/4.0"],
  },
  {
    degree: "B.S. Electrical Engineering",
    institution: "Colorado School of Mines",
    dates: "2022 – 2026",
    imageLight: "/education/Mines-center.png",
    imageDark: "/education/Mines-center-white.png",
    details: ["Outstanding Graduating Senior", "Dean's List (all semesters)", "GPA: 4.0/4.0"],
  },
  {
    degree: "Honors High School Diploma",
    institution: "Bayfield High School",
    dates: "2018 – 2022",
    imageLight: "/education/BHS.png",
    details: ["Valedictorian", "AP Scholar with Distinction", "Unweighted GPA: 4.0/4.0"],
  },
];

export const fellowships: Award[] = [
  // { name: "...", org: "...", year: "...", image: "/images/education/awards/..." },
];

export const scholarships: Award[] = [
  // { name: "...", org: "...", year: "...", image: "/images/education/awards/..." },
];

export const academicAwards: Award[] = [
  // { name: "...", org: "...", year: "...", image: "/images/education/awards/..." },
];

export const publications: Publication[] = [
  {
    title: "A Full-Wave Method for Radar Cross-Section Analysis with Locally Generated Structured Electromagnetic Waves",
    authors: "Matthew J. Dodd, Kobe Prior, Joseph E. Diener, Veysel Demir, Atef Z. Elsherbeni",
    venue: "ACES Journal (Applied Computational Electromagnetics Society)",
    year: "2026",
    image: "/education/paper_1.png",
    link: "https://doi.org/10.13052/2026.ACES.J.410302"
  },
  {
    title: "Low-Cost Software-controlled Phase Shifting Network for Generating Spatiotemporally Variable Waveforms",
    authors: "Kobe Prior, Aidan Malensek, Matthew Dodd, and Atef Z. Elsherbeni",
    venue: "USNC URSI National Radio Science Meeting",
    year: "2026",
    image: "/education/paper_2.png",
    link: "https://usncursi.org/archive/nrsm/2026/papers/1014.pdf"
  }
];

export const certifications: Certification[] = [
  // { name: "...", issuer: "...", date: "...", image: "...", link: "..." },
];