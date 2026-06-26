export interface ProjectResources {
  label: string;
  url: string;
  type: "paper" | "presentation" | "report" | "code" | "other"; 
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  tags: string[];
  category: ("hardware" | "software")[];
  resources ? : ProjectResources[];
}

export const projects: Project[] = [
  {
    slug: "phased-array",
    title: "Custom Phased Array for Scattering Analysis",
    description: "A custom  printed circuit board utilizes 5 4:1 Wilkinson power dividers to split 1 input channel into 16 equal amplitude output channels. Each output channel has a digital phase shifter (PE44820) controlled by an STM microcontroller. The software defined radio connects to the phase shifting network and an external probe antenna to probe scattered power similar to monostatic radar.",
    fullDescription: "I first started working on this project during the Fall semester of my senior year of undergraduate studies at Mines in a course called Phased Arrays and Scattering Applications. The core component of the low-cost 16 port phasing network is the PE44820 digital phase shifter from Peregrine Semiconductor. The phase shifters share three digital lines (SPI), and are controlled by an STM microcontroller which receives commands over USB from a computer hosting a graphical user interface, parses the commands into phase words and sends them to each phase shifter with a unique 4 bit address that allow each phase shifter to be individually controlled. Then a full-duplex software defined radio can be used as a signal source and sink for the system allowing radar like characterization of scattering or demonstration of coarse angle of arrival estimation.",
    images: ["/projects/parray/PArray.jpg","/projects/parray/block-diagram.png", "/projects/parray/parray2.jpg", "/projects/parray/parray3.jpg", "/projects/parray/parray4.jpg", "/projects/parray/parray5.jpg", "/projects/parray/parray6.jpg"],
    tags: ["RF", "Antenna Systems", "SDR", "Embedded Design"],
    category: ["hardware"],
    resources: [
        {
          label: "Target Illumination by Structured Beam for Advanced Radar Scattering Analysis",
          url: "/projects/parray/Kobe_MURF_Presentation-V6.pdf",
          type: "presentation"
        },
        {
          label: "16-Element Phased Array for Coarse AoA Estimation",
          url: "/projects/parray/Prior_16_Port_Phasing Network.pdf",
          type: "presentation"
        },
        {
          label: "Low-cost Software-controlled Phase Shifting Network for Generating Spatiotemporally Variable Waveforms",
          url: "/projects/parray/NRSM_Prior_Rev3.pdf",
          type: "report"
        },
      ]
  },

  {
    slug: "Drone-Localization",
    title: "3D Drone Localization using Passive Receivers",
    description: "In the 2026 Intern Cohort at Zeta Associates I worked on a project to localize a drone and create a dynamic visualization of the estimated position of the drone with a 95 percent confidence ellipsoid.",
    fullDescription: `Full detailed writeup for the drone project goes here.`,
    images: ["/projects/droneloc/geo_media.png", '/projects/droneloc/droneloc2.jpg', '/projects/droneloc/droneloc3.jpg', '/projects/droneloc/caf_peak.png'],
    tags: ["Geolocation", "TDOA", "Cross Ambiguity Function", "Cesium", "Python", "C++"],
    category: ["software", "hardware"]
  },

  {
    slug: 'smart_pick',
    title: "Smart Pick for Rock Cutting",
    description: "An intelligent sensing system to monitor forces and vibrations on a rock cutting pick used in mining operations. The system is useful in identifying what rock is being cut and when the pick is wearing down.Our approach enables preventative pick replacement, reducing the risk of cascading failures and costly shutdowns. Additionally, real-time rock characterization helps operators avoid cutting non-profitable or highly abrasive materials—extending tool life and preventing contamination that can lead to downstream processing costs.",
    fullDescription: `In mining applications, conical-type rock picks are used in machines like continuous miners and long-wall shearers. These picks today are changed based on instincts, and these instincts cost the mining industry in particular an estimated 43 million dollars in lost revenue per year. This is because when one pick wears down, if it isn't replaced in time, adjacent picks are more likely to fail quicker because of uneven wearing, which causes cascading failures. The drum of the mining machine itself can be damaged in catastrophic cases, causing very long downtimes. In a coal mine, a minute of downtime could equate to a thousand dollars lost. Our team implemented an intelligent sensing system that can measure the loads experienced on the pick and the vibrational harmonics to both characterize the rock that is being cut into as well as predict the wear status of each pick. Rock characterization serves two benefits for mine efficiency; first, by cutting only your desired mineral, you save the processors of the raw material lots of time sifting out unvaluable materials. Also, cutting into abrasive, harder rocks can reduce the time each rock pick lasts, meaning more downtime to replace them. Preliminary implementation of a 43-feature neural network proved to be effective in differentiating rock-type coal simulants vs hard rock simulants with 86 percent accuracy using 0.1s windows of data from the smart picks outputs (acceleration and capcitance readings from load cell).`,
    images: ["/projects/smart_pick/Smart_Pick.png", "/projects/smart_pick/smartpick2.jpg", '/projects/smart_pick/smartpick3.jpg', '/projects/smart_pick/smartpick4.jpg'],
    tags: ["Printed Circuit Board Design", "Embedded Systems", "Sensor Integration", "Data Analysis"],
    category: ["hardware"], 
    resources: [
      {
        label: "Final Design Report",
        url: "/projects/smart_pick/Smart_Pick_report.pdf",
        type: "report"
      },
      {
        label: "Project Synopsis",
        url: "/projects/smart_pick/Smart_Pick_Synopsis.pdf",
        type: "paper"
      },
      {
        label: "Showcase Poster",
        url: "/projects/smart_pick/Smart_Pick_Poster.pdf",
        type: "paper"
      },
    ]
  },

  {
    slug: "BPF",
    title: "Coupled Line Bandpass Filter with 2nd Harmonic Suppression",
    description: "For the final project in passive microwave devices, as a part of a theoretical coherent radar system a coupled line bandpass filter was designed to operate between 2401 MHz − 2495 MHz with second harmonic suppression.",
    fullDescription: `Full detailed writeup for the bandpass filter project goes here.`,
    images: ["/projects/band_pass_filt/coupled-line-bandpass.jpg"],
    tags: ["Passive MW Devices", "Keysight ADS", "Filter Design"],
    category: ["hardware"]
  },

  {
    slug: "patch-antenna",
    title: "X-Band Microstrip Patch Antennas",
    description: "Patch antennas were designed for 8.5 GHz using a finite difference time domain full-wave EM solver called CEMS, the patches were manufactured and the resonant frequency was confirmed with good agreement to simulation using a vector network analyzer.",
    fullDescription: 'The Introduction to Antennas course was the first time that I was enamoured with the thought of being some kind of RF engineer. The course was taught by Dr. Atef Z. Elsherbeni, a world renowned expert in the field of computational electromagnetics. He taught students how to simulate their antenna designs using a finite difference time domain full-wave EM solver called CEMS. One part of the course was fabricating and measuring the performance of a microstrip patch antenna. My antenna was designed for 4003C rogers substrate with a dielectric constant of 3.38 and a thickness of 60 mils. The patch was designed to resonate at 8.5 GHz (x-band) and the resonant frequency was confirmed with good agreement to simulation using a vector network analyzer.',
    images: ["/projects/xband_antenna/X-band.jpg"],
    tags: ["Antenna", "HFSS"],
    category: ["hardware"], 
    resources: [
      {
        label: "Simulated Vs Measured Results",
        url: "/projects/xband_antenna/Results.pdf",
        type: "presentation"
      }
    ]
  },

  {
    slug: "finance_dashboard",
    title: "Finance Dashboard",
    description: "A personal project using python, web-based graphical user interface to report data about my current finances using a google sheet api.",
    fullDescription: 'This was one of the first personal projects I worked on to learn python that related to my every day life. I am someone who spends a lot of time thinking about personal finance and I wanted to create a dashboard that would allow me to visualize my current progress towards financial goals as well as visualize whether or not I was on track to meet those goals. The dashboard uses a google sheet api to pull data from a google sheet that I use to track my finances and then uses matplotlib to create visualizations of the data. The dashboard is built using the nicegui python library and is a web-based graphical user interface. I interact with the google sheet through the command line by typing `finance keyword parameters` I can log recent expenses, add new income, adjust the current value of my investments and bank accounts.',
    images: ["/projects/Finance_dash/Finance_Dashboard.png"],
    tags: ["Python", "Data Visualization", "Google Sheets API"],
    category: ["software"]
  },

  {
    slug: "low_noise_amplifier",
    title: "Low Noise Amplifier Design and Fabrication",
    description: "For the final project in mirowave devices (EENG 529) I worked in a group to design a full-duplex RF frontend, my component was the low noise amplifier. The LNA was designed around the Infineon BFP650 bipolar transistor using a common emitter topology with a single voltage bias and a resistive current divider generating appopriate base current and collector emitter voltage for desired class A operation. The simulation was performed in Keysight ADS and the amplifier was fabricated on a 60 mil 1oz copper Rogers RO3003C substrate. The amplifier was tested using a vector network analyzer and the measured gain and linearity figure were in good agreement with simulation.",
    fullDescription: `For the final project in mirowave devices (EENG 529) I worked in a group to design a full-duplex RF frontend, my component was the low noise amplifier. The LNA was designed around the Infineon BFP650 bipolar transistor using a common emitter topology with a single voltage bias and a resistive current divider generating appopriate base current and collector emitter voltage for desired class A operation. The simulation was performed in Keysight ADS and the amplifier was fabricated on a 60 mil 1oz copper Rogers RO3003C substrate. The amplifier was tested using a vector network analyzer and the measured gain and linearity figure were in good agreement with simulation.`,
    images: ["/projects/LNA/LNA.jpg", "/projects/LNA/lna2.jpg", "/projects/LNA/lna3.jpg", "/projects/LNA/lna4.jpg", "/projects/LNA/lna5.jpg", "/projects/LNA/lna6.jpg"],
    tags: ["Amplifier Design", "BFP650", "KeysightADS", "Active Microwave Devices"],
    category: ["hardware"], 
    resources: [
      {
        label: "Active Microwave Devices Final Report", 
        url: '/projects/LNA/final_report.pdf', 
        type: 'report'
      }
    ]
  },

  {
    slug: "kalman_filter",
    title: "Kalman Filter Implementation",
    description: "To create accurate estimates of the internal states of a non-linear, two-wheeled robot driving on a perforated surface with deterministic inputs and noisy measurements from RF sensors, an extended Kalman filter and Monte Carlo Kalman filter were implemented in  MATLAB and Simulink.",
    fullDescription: "To create accurate estimates of the internal states of a non-linear, two-wheeled robot driving on a perforated surface with deterministic inputs and noisy measurements from RF sensors, an extended Kalman filter and Monte Carlo Kalman filter were implemented in  MATLAB and Simulink.",
    images: ["/projects/Kalman/kalman_cover.png","/projects/Kalman/Kalman_Filter.png"],
    tags: ["MATLAB", "Kalman Filter", "State Estimation"],
    category: ["software"],
    resources: [
      {
        label: "Kalman Filter Final Report",
        url: "/projects/Kalman/Kalman_Final.pdf",
        type: "report"
      }
    ]
  },

  {
    slug: "Bent_Pipe",
    title: "Bent Pipe Communication System",
    description: "During my summer internship at Rincon Research Coorporation, I worked on a project with 4 other interns to simulate, and implement a small scale demonstration of a bent pipe communicaiton system. My specific tasks involved creating a simulation of the system using a Python web-based graphical user interface and CesiumJS. The simulation involved scraping publicly available information of recent low Earth orbit (LEO) satellite launches and propagrating TLE data for a dynamic visualization of ideal link opportunities between two ground stations and the LEO satellites. The Doppler shift, noise floor, and path loss were calculated for each link opportunity to inform a channel model and a random phase rotation was applied. Signal allignment and demodulation was performed to extract a message from the received signal. ",
    fullDescription: "During my summer internship at Rincon Research Coorporation, I worked on a project with 4 other interns to simulate, and implement a small scale demonstration of a bent pipe communicaiton system. My specific tasks involved creating a simulation of the system using a Python web-based graphical user interface and CesiumJS. The simulation involved scraping publicly available information of recent low Earth orbit (LEO) satellite launches and propagrating TLE data for a dynamic visualization of ideal link opportunities between two ground stations and the LEO satellites. The Doppler shift, noise floor, and path loss were calculated for each link opportunity to inform a channel model and a random phase rotation was applied. Signal allignment and demodulation was performed to extract a message from the received signal.",
    images: ["/projects/Bent_Pipe/Bent_Pipe.png"],
    tags: ["Software Defined Radio", "Communication Systems", "Digital Communication", "Python", "CesiumJS"],
    category: ["software", "hardware"],
    resources: [
      {
        label: "GitHub Repository",
        url: "https://github.com/kpriorRincon/InternProj2025",
        type: "code"
      },
      {
        label: "Bent Pipe Communication System Presentation",
        url: "https://www.linkedin.com/in/kobeprior/overlay/Position/2650361938/treasury/?profileId=ACoAADF3jSwBYvQMZfxcLtG_3AwMNK0esRQeXgA",
        type: "presentation"
      },
      {
        label: "Small Scale Demonstration of a Bent Pipe Communication System",
        url: "https://youtu.be/UdC6h35kaHA",
        type: "presentation"
      },
      {
        label: "GUI Walkthrough",
        url: "https://youtu.be/UdC6h35kaHA",
        type: "presentation"
      }
    ]

  },

  {
    slug: "Stegonagraphy",
    title: "Stegonagraphy in C++",
    description: "Embedded messages into pixels of an image using a C++ program. The program ecodes on red blue or green color channel and the intensity of each pixel is used to encode 8 bits of data. The program can also decode the message from the image.",
    fullDescription: "Embedded messages into pixels of an image using a C++ program. The program ecodes on red blue or green color channel and the intensity of each pixel is used to encode 8 bits of data. The program can also decode the message from the image.",
    images: ["/projects/stegonagraphy/stegonagraphy.jpeg"],
    tags: ["Software Defined Radio", "Communication Systems", "RF Amplification"],
    category: ["software"],
    resources: [
      {
        label: "GitHub Repository",
        url: "https://github.com/kobeprior99/Stegonagraph-inator",
        type: "code"
      }
    ]
  },

  {
    slug: "IR eavesdropper",
    title: "Infrared Eavesdropping",
    description: "Collaborated with Blane Miller and Cooper Hammond on an embedded systems project exposing vulnerabilities in infrared (IR) communication and proposing a secure alternative. This multidisciplinary project involved designing software, implementing signal processing techniques, and addressing security challenges in communication protocols.",
    fullDescription: "Collaborated with Blane Miller and Cooper Hammond on an embedded systems project exposing vulnerabilities in infrared (IR) communication and proposing a secure alternative. This multidisciplinary project involved designing software, implementing signal processing techniques, and addressing security challenges in communication protocols.",
    images: ["/projects/Eavesdropper/eavesdrop.png"],
    tags: ["Embedded C", "Embedded Systems", "Finite State Machines", "Signal Processing"],
    category: ["software", "hardware"],
    resources: [
      {
        label: "Final Presentation",
        url: "/projects/Eavesdropper/final-presentation.pdf",
        type: "presentation"
      },
      {
        label: "Demonstration video ",
        url: "https://youtu.be/NZAeMqaXlls",
        type: "presentation"
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/kobeprior99/IR_Eavesdrop",
        type: "code"
      }
    ]
  },

  {
    slug: "Antenna_Demo",
    title: "Antenna Demonstration Module",
    description: "For my first semester involved in undergraduate research I worked on the hardware and software for a antenna demonstration module that transmitted with one antenna and reported the relative gain at the second antenna. This allowed for the dynamic demonstration of antenna propagation phenomenon like free space path loss and polarization loss. The module used an all in one touch screen raspberry pi and an ADALM PLUTO software defined radio driven by GNU radio.",
    fullDescription: "The Antenna Demonstration module demonstrated two propagation phenomena: free space path loss and polarization loss. The module consisted of two antennas, a software defined radio, and an all-in-one touch screen Raspberry Pi Module. The software defined radio transmitted a signal from one antenna and the second received the signal and reported the relative gain on the output display which could be used to demonstrate the effects of free space path loss and polarization loss. The software defined radio was driven by GNU Radio.",
    images: ["/projects/Antenna_demo/Antenna_Demo.jpeg"],
    tags: ["Software Defined Radio", "Communication Systems", "RF Amplification"],
    category: ["software", "hardware"],
    resources: [
    {
      label: "Hardware and Software Development of Antenna Demonstration Module",
      url: "/projects/Antenna_demo/AntennaDemonstrationPoster.pdf",
      type: "presentation"
    }
    ]
  },

  {
    slug: "SEED_BOT",
    title: "SEED Lab Autonomous Robot",
    description: "For a course designed to expose electrical engineering stduetns to the design process, myself and 3 other students designed a built an autonomoous robot that navigated a course using aruco markers with different colored arrows to indicate the direction the robot should turn. The robot was built using an arduino microcontroller, a motor driver, and a camera for computer vision.",
    fullDescription: "insert full description here",
    images: ["/projects/seedbot/proj_description.png","/projects/seedbot/Seed_Bot.jpeg", "/projects/seedbot/arrow_detection.png"],
    tags: ["Computer Vision", "Python", "Arduino", "Raspberry Pi"],
    category: ["software", "hardware"],
    resources: [
    {
      label: "GitHub Repository",
      url: "https://github.com/kobeprior99/SeedLab",
      type: "code"
    },
    {
      label: "Final Video Demonstration",
      url: "https://www.youtube.com/watch?v=ndHVUf-aqEA",
      type: "code"
    },
    {
      label: "Final Presentation",
      url: "https://www.linkedin.com/in/kobeprior/overlay/Project/852314179/treasury/?profileId=ACoAADF3jSwBYvQMZfxcLtG_3AwMNK0esRQeXgA",
      type: "presentation"
    }

    ]
  },
  {
    slug: "powersupply",
    title: "Voltage and Current Limited Power Supply", 
    description: "My field engineering course on printed circuit board design taught me how to use Eagle PCB to design a voltage and current limited power supply. The actual circuit design was completed in advance, we just needed to design the printed circuit board schematic and layout.", 
    fullDescription: "My field engineering course on printed circuit board design taught me how to use Eagle PCB to design a voltage and current limited power supply. The actual circuit design was completed in advance, we just needed to design the printed circuit board schematic and layout.",
    images: ["/projects/usupply/Power_Supply.jpg"],
    tags: ["Printed Circuit Board Design", "Eagle PCB"],
    category: ["hardware"]
  }
];