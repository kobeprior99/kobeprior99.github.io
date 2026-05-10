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
  },
  {
    slug: "low_noise_amplifier",
    title: "Low Noise Amplifier Design and Fabrication",
    description: "For the final project in mirowave devices (EENG 529) I worked in a group to design a full-duplex RF frontend, my component was the low noise amplifier. The LNA was designed around the Infineon BFP650 bipolar transistor using a common emitter topology with a single voltage bias and a resistive current divider generating appopriate base current and collector emitter voltage for desired class A operation. The simulation was performed in Keysight ADS and the amplifier was fabricated on a 60 mil 1oz copper Rogers RO3003C substrate. The amplifier was tested using a vector network analyzer and the measured gain and linearity figure were in good agreement with simulation.",
    fullDescription: `Full detailed writeup for the low noise amplifier project goes here.`,
    images: ["/projects/LNA.jpg"],
    tags: ["Amplifier Design", "BFP650", "KeysightADS", "Active Microwave Devices"],
    category: "hardware"
  },
  {
    slug: "kalman_filter",
    title: "Kalman Filter Implementation",
    description: "To create accurate estimates of the internal states of a non-linear, two-wheeled robot driving on a perforated surface with deterministic inputs and noisy measurements from RF sensors, an extended Kalman filter and Monte Carlo Kalman filter were in  MATLAB and Simulink.",
    fullDescription: `Full detailed writeup for the Kalman filter project goes here.`,
    images: ["/projects/Kalman_Filter.png"],
    tags: ["MATLAB", "Kalman Filter", "State Estimation"],
    category: "software"
  }, 
  {
    slug: "Bent_Pipe",
    title: "Bent Pipe Communication System",
    description: "During my summer internship at Rincon Research Coorporation, I worked on a project with 4 other interns to simulate, and implement a small scale demonstration of a bent pipe communicaiton system. My specific tasks involved creating a simulation of the system using a Python web-based graphical user interface and CesiumJS. The simulation involved scraping publicly available information of recent low Earth orbit (LEO) satellite launches and propagrating TLE data for a dynamic visualization of ideal link opportunities between two ground stations and the LEO satellites. The Doppler shift, noise floor, and path loss were calculated for each link opportunity to inform a channel model and a random phase rotation was applied. Signal allignment and demodulation was performed to extract a message from the received signal. ",
    fullDescription: `Full detailed writeup for the bent pipe communication system project goes here.`,
    images: ["/projects/Bent_Pipe.png"],
    tags: ["Software Defined Radio", "Communication Systems", "RF Amplification"],
    category: "hardware"

  }

];