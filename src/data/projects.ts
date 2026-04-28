export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  tags: string[];
  category: "hardware" | "software";
}

export const projects: Project[] = [
  {
    slug: "phased-array",
    title: "Custom Phased Array for Scattering Analysis",
    description: "A custom printed circuit board utilizes 5 4:1 Wilkinson power dividers to split 1 input channel into 16 equal amplitude output channels. Each output channel has a digital phase shifter (PE44820) controlled by an STM microcontroller. The software defined radio connects to the phase shifting network and an external probe antenna to probe scattered power similar to monostatic radar.",
    fullDescription: `Full detailed writeup for the phased array project goes here.`,
    images: ["/projects/PArray.jpg"],
    tags: ["RF", "Antenna Systems", "SDR", "Embedded Design"],
    category: "hardware"
  },
  {
    slug: "BPF",
    title: "Coupled Line Bandpass Filter with 2nd Harmonic Suppression",
    description: "For the final project in passive microwave devices, as a part of a theoretical coherent radar system a coupled line bandpass filter was designed to operate between 2401 MHz − 2495 MHz with second harmonic suppression.",
    fullDescription: `Full detailed writeup for the bandpass filter project goes here.`,
    images: ["/projects/coupled-line-bandpass.jpg"],
    tags: ["Passive MW Devices", "Keysight ADS", "Filter Design"],
    category: "hardware"
  },
  {
    slug: "patch-antenna",
    title: "X-Band Microstrip Patch Antennas",
    description: "Patch antennas were designed for 8.5 GHz using a finite difference time domain full-wave EM solver called CEMS, the patches were manufactured and the resonant frequency was confirmed with good agreement to simulation using a vector network analyzer.",
    fullDescription: `Full detailed writeup for the patch antenna project goes here.`,
    images: ["/projects/X-band.jpg"],
    tags: ["Antenna", "HFSS"],
    category: "hardware"
  },

  {
    slug: "finance_dashboard",
    title: "Finance Dashboard",
    description: "A personal project using python, web-based graphical user interface to report data about my current finances using a google sheet api.",
    fullDescription: `Full detailed writeup for the patch antenna project goes here.`,
    images: ["/projects/Finance_Dashboard.png"],
    tags: ["Python", "Data Visualization", "Google Sheets API"],
    category: "software"
  }

];