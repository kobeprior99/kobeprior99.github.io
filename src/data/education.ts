eport interface Degree {
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
    details: ["Antennas and Wireless Communications", "GPA: 4.0/4.0"],
  },
  {
    degree: "B.S. Electrical Engineering",
    institution: "Colorado School of Mines",
    dates: "2022 – 2026",
    imageLight: "/education/Mines-center.png",
    imageDark: "/education/Mines-center-white.png",
    details: ["GPA: 4.0/4.0"],
  },
  {
    degree: "Honors High School Diploma",
    institution: "Bayfield High School",
    dates: "2018 – 2022",
    imageLight: "/education/BHS.png",
    details: ["Unweighted GPA: 4.0/4.0"],
  },
];

export const fellowships: Award[] = [
  // { name: "...", org: "...", year: "...", image: "/images/education/awards/..." },
  { name: "Mines Undergraduate Research Fellowship (MURF)", org: "Colorado School of Mines", year: "2025-2026" },
  { name: "First-Year Innovationa and Research Scholar Training (FIRST)", org: "Colorado School of Mines", year: "2022-2023" },
];

export const scholarships: Award[] = [
  // { name: "...", org: "...", year: "...", image: "/images/education/awards/..." },
  { name: "Colorado Scholar Fund", org: "State of Colorado", year: "2022 - 2026" },
  { name: "VICEROY Scholarship", org: "AFRL, USWR&E and Griffis Institute", year: "2024 - 2026" },
  { name: "Bashen, George & Betty Scholarship", org: "Colorado School of Mines", year: "2024 - 2026" },
  { name: "Schoonover Current Use Scholarship", org: "Colorado School of Mines", year: "2024 - 2026" },
  { name: "Steve Westhoff Scholarship", org: "SGM", year: "2022 - 2023" },
  { name: "Ray Barron Strength & Honor Fund Scholarship", org: "RBS&HF", year: "2022" },
  { name: "Durango Elk's Lodge Scholarship", org: "Durango Elk's Lodge", year: "2022" },
];

export const academicAwards: Award[] = [
  { name: "Outstanding Graduating Senior", org: "Colorado School of Mines", year: "2026" },
  { name: "Capstone Design Overall Top Honors Second Place", org: "Colorado School of Mines", year: "2026" },
  { name: "Dean's List (6x)", org: "Colorado School of Mines", year: "2022 - 2026" },
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
  { name: "Altium Global Scholarship Program", issuer: "Altium Designer", date: "2026",  link: "https://ti-user-certificates.s3.amazonaws.com/8d271d4d-1d22-4519-8219-3870666aff3b/d9382a3d-43e8-4fa1-97b6-374657da36be-kobe-prior-414977bd-95d3-455c-b2eb-daa8f24af4d1-certificate.pdf" },
  { name: "Altium Workspace User Management", issuer: "Altium Designer", date: "2026",  link: "https://ti-user-certificates.s3.amazonaws.com/8d271d4d-1d22-4519-8219-3870666aff3b/d9382a3d-43e8-4fa1-97b6-374657da36be-kobe-prior-08d96784-12d3-4978-a253-cf8cec3e4164-certificate.pdf" },
  { name: "Altium Designer Essentials - On Demand (English)", issuer: "Altium Designer", date: "2026",  link: "https://ti-user-certificates.s3.amazonaws.com/8d271d4d-1d22-4519-8219-3870666aff3b/d9382a3d-43e8-4fa1-97b6-374657da36be-kobe-prior-43c7881b-78c2-41ec-9bb2-c7797efdbf82-certificate.pdf" },
  { name: "Signal Processing with MATLAB", issuer: "MathWorks", date: "2024",  link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=c9dcaf24-0e7d-4d72-814e-ca713577c0e3&" },
  { name: "Responsible Conduct of Research", issuer: "CITI Program", date: "2022",  link: "https://www.citiprogram.org/verify/?we61dfbbd-8472-4bfe-bc74-2e374e58688e-52459970" },
  { name: "Legacy Responsive Web Design V8", issuer: "freeCodeCamp", date: "2020",  link: "https://www.freecodecamp.org/certification/kobe_prior/responsive-web-design" },
];
