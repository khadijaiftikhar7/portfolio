export const profile = {
  name: "Khadija Iftikhar",
  eyebrow: "Computer Science · NUST",
  lede: "Computer Science undergraduate with a growing interest in computer vision and machine learning, currently exploring research and building practical applications.",
  email: "dija07987@gmail.com",
  github: "https://github.com/khadijaiftikhar7",
};

export const experience = [
  {
    when: "June 2026 — Present",
    role: "AI Intern, CSN Labs · NUST",
    bullets: [
      "Researching VLM-based drone swarm detection and the gaps in existing approaches.",
      "Built a YOLOv8n auto-labeling pipeline and a custom YOLOv12n-P2ECA model for small-drone detection.",
      "Integrated detection, tracking, zone intrusion, FastVLM context and CSV logging into a single pipeline.",
      "Ran ablation studies evaluating mAP, precision, recall and FPS.",
    ],
  },
  {
    when: "June 2026 — July 2026",
    role: "Web Development Intern, Software Productivity Strategists",
    bullets: [
      "Industrial frontend work in HTML, CSS, JavaScript and React.",
      "Bootstrap, jQuery, DOM manipulation, SEO and responsive design.",
      "Built interfaces and dashboards on the Velzon admin template, capped with a final dashboard project.",
    ],
  },
];

export const work = [
  {
    num: "01",
    slug: "nigehban",
    title: "Nigehban",
    url: "https://github.com/rehabshahzad/NIGEHBAAN",
    desc: "A MERN web system that digitizes crime records for faster, structured management.",
    details: "Nigehban is a crime record management system built with the MERN stack. It provides role-based access, structured crime records, officer assignment and dashboard views for analyzing crime data.",
    contribution: [
      "Built the React frontend for login, registration, dashboard and crime record workflows.",
      "Connected frontend forms and dashboard data using Axios APIs.",
      "Worked with city, crime type and date filters for dashboard analysis.",
      "Contributed to the overall interface and user flow as part of the project team."
    ],
    screenshots: [
      "/projects/nigehban/screenshot-1.png",
      "/projects/nigehban/screenshot-2.png"
    ],
    tags: ["MongoDB", "Express", "React", "Node", "JWT"],
  },
  {
    num: "02",
    slug: "song-aesthetics",
    title: "Song Aesthetics Evaluator",
    when: "Oct 2025 — Dec 2025",
    url: "https://github.com/khadijaiftikhar7/AI-FINAL-PROJECT---SONG-AESTHETIC-EVALUATOR",
    desc: "A machine learning project that predicts a song's musicality from extracted audio features.",
    details: "The Song Aesthetics Evaluator explores whether audio features can be used to predict how musical or aesthetically pleasing a song is. Several machine learning approaches were compared using extracted acoustic features.",
    contribution: [
      "Prepared and explored the audio feature dataset.",
      "Worked with features such as spectral centroid, bandwidth, flatness and richness.",
      "Compared different machine learning models using regression metrics.",
      "Analyzed model performance and the relationship between audio features and the target."
    ],
    screenshots: [
      "/projects/song-aesthetics/screenshot-1.png",
      "/projects/song-aesthetics/screenshot-2.png"
    ],
    tags: ["Python", "Machine Learning", "Audio Features"],
  },
  {
    num: "03",
    slug: "disaster-management",
    title: "Disaster Management System",
    when: "Feb 2025 — May 2025",
    url: "https://github.com/khadijaiftikhar7",
    desc: "A coordination platform designed to organize disaster response, resources and requests.",
    details: "The Disaster Management & Relief Coordination System was designed to help coordinate victims, volunteers, teams, zones, resources and relief requests through a structured database-backed application.",
    contribution: [
      "Worked on the application structure and database design.",
      "Designed relationships between users, victims, volunteers, teams, resources and requests.",
      "Worked on interfaces for coordinating disaster response information.",
      "Contributed to the overall project as part of a semester team."
    ],
    screenshots: [
      "/projects/disaster-management/screenshot-1.png",
      "/projects/disaster-management/screenshot-2.png"
    ],
    tags: ["Java", "Spring Boot", "Database", "Thymeleaf"],
  },
  {
    num: "04",
    slug: "iot-data-aggregator",
    title: "IoT Data Aggregator",
    url: "https://github.com/khadijaiftikhar7",
    desc: "A campus IoT dashboard for processing sensor readings and turning them into useful visualizations.",
    details: "The IoT Data Aggregator processes campus sensor data such as temperature, humidity, CO2 and occupancy, then presents the readings through dashboards and visualizations for easier monitoring.",
    contribution: [
      "Worked with public sensor datasets rather than simulated readings.",
      "Built a Node-RED flow for ingesting, parsing and normalizing data.",
      "Added pacing, room filtering and dashboard visualizations.",
      "Worked with MongoDB Atlas for storing sensor readings."
    ],
    screenshots: [
      "/projects/iot-data-aggregator/screenshot-1.png",
      "/projects/iot-data-aggregator/screenshot-2.png"
    ],
    tags: ["IoT", "Node-RED", "MongoDB", "Dashboards"],
  },
  {
    num: "05",
    slug: "netseceval",
    title: "NetSecEval",
    url: "https://github.com/khadijaiftikhar7",
    desc: "An AI-assisted network security evaluation system for scanning, analysis and reporting.",
    details: "NetSecEval combines network discovery and security evaluation features with a reporting workflow. The project includes host discovery, port scanning, controlled security simulations, history and generated reports.",
    contribution: [
      "Worked with Wireshark captures representing normal and suspicious network activity.",
      "Contributed to data preparation and evaluation of network traffic.",
      "Worked with the Flask-based application and its evaluation workflow.",
      "Contributed to the report-generation and history components."
    ],
    screenshots: [
      "/projects/netseceval/screenshot-1.png",
      "/projects/netseceval/screenshot-2.png"
    ],
    tags: ["Python", "Flask", "Network Security", "Machine Learning"],
  },
  {
    num: "06",
    slug: "drone-detection",
    title: "Small-Drone Detection Pipeline",
    url: "https://github.com/khadijaiftikhar7",
    desc: "Research work at CSN Labs focused on small-drone detection, tracking and contextual analysis.",
    details: "This research project focuses on detecting small drones in difficult visual conditions. The pipeline combines an auto-labeling workflow, a custom YOLOv12n-P2ECA detector, tracking, zone-intrusion logic, FastVLM context and CSV logging.",
    contribution: [
      "Researched existing approaches for VLM-based drone swarm detection.",
      "Built a YOLOv8n auto-labeling pipeline and worked on a custom YOLOv12n-P2ECA detector.",
      "Integrated detection, tracking, zone intrusion and FastVLM context into the pipeline.",
      "Ran ablation studies using mAP, precision, recall and FPS."
    ],
    screenshots: [
      "/projects/drone-detection/screenshot-1.png",
      "/projects/drone-detection/screenshot-2.png"
    ],
    tags: ["YOLO", "Computer Vision", "PyTorch", "VLM"],
  },
];

export const skills = [
  { label: "Languages", value: "C++, Python, Java, JavaScript, HTML/CSS, SQL, Assembly" },
  { label: "Tools & Frameworks", value: "React, Bootstrap, jQuery, Git, Figma, Vercel" },
  { label: "Focus Areas", value: "App Development, Website Design & UI, Database Design, ML & Data Analysis, 3D Modelling & Animation" },
  { label: "Coursework", value: "Data Structures & Algorithms, Artificial Intelligence, Web Technologies, OOP, Advanced DBMS" },
];

export const languages = ["English", "Urdu"];

export const about = [
  "I'm a Computer Science undergraduate at the National University of Science and Technology in Islamabad, where I'm carrying a 3.75 CGPA through a degree that started in 2024. Before that, pre-engineering at Bahria College Islamabad.",
  "Most of my time goes to two things: training vision models that have to work on small, fast, awkward targets, and building the interfaces that make that kind of work legible to other people. I like problems where the research and the product side both have to hold up.",
  "I've led semester project teams of three or more, and served as an HR Executive at the Google Developers Club at NUST, looking after coordination and member engagement.",
];

export const navItems = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
