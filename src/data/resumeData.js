export const personalInfo = {
  name: "Shrishti Pandey",
  title: "Product Designer & Front End Developer",
  tagline: "Product designer and front end developer with a passion for designing beautiful, accessible and functional user experiences.",
  email: "shrishtip028@gmail.com",
  linkedin: "https://linkedin.com/in/shrishtipandey0611",
  github: "https://github.com/shrishti630",
  location: "Mumbai, Maharashtra, India",
  status: "Available for Roles & Projects",
  resumeUrl: "/Shrishti-Pandey.pdf",
  objective: "Product designer and front end developer with hands-on experience building responsive web applications using React.js, Tailwind CSS, JavaScript, and modern UI design systems. Experienced in developing reusable UI components, integrating APIs, and creating accessible user interfaces through internship and commercial projects."
};

export const aestheticReferences = [
  { name: "Adham Dannaway", url: "https://www.adhamdannaway.com/", description: "Dual identity hero & interactive split interface" },
  { name: "Rob Bowen Digital", url: "https://robbowen.digital/", description: "Creative developer obsidian theme & neon accents" },
  { name: "Adrien Gervaix", url: "https://www.adriengervaix.com/", description: "Refined minimalist spacing & motion polish" },
  { name: "Mitacore", url: "https://mitacore.co/", description: "Futuristic glassmorphism & high-tech UI density" }
];

export const statistics = [
  { label: "Companies & Internships", value: "3+", detail: "iBraine, AIVOT AI, Easy Pay" },
  { label: "Production & Featured Projects", value: "5+", detail: "React, Tailwind, APIs, AI" },
  { label: "SIH 2024 Grand Finalist", value: "National Top", detail: "Smart India Hackathon" },
  { label: "HSC Board Academic Score", value: "91.50%", detail: "Distinction Excellence" }
];

export const skillsData = {
  frontend: [
    { name: "React.js", level: "Advanced", icon: "Code2" },
    { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
    { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode2" },
    { name: "Express JS", level: "Intermediate", icon: "Server" },
    { name: "HTML5 / CSS3", level: "Expert", icon: "Layout" },
    { name: "Responsive Web Design", level: "Expert", icon: "Monitor" }
  ],
  backend: [
    { name: "Express.js", level: "Intermediate", icon: "Server" },
    { name: "REST APIs", level: "Advanced", icon: "Network" },
    { name: "FastAPI Auth Integration", level: "Intermediate", icon: "ShieldCheck" },
    { name: "Django", level: "Basic/Intermediate", icon: "Database" },
    { name: "MongoDB", level: "Intermediate", icon: "HardDrive" }
  ],
  languages: [
    { name: "JavaScript", level: "Advanced", icon: "FileCode2" },
    { name: "HTML / CSS", level: "Expert", icon: "Layout" },
    { name: "Python", level: "Intermediate", icon: "Terminal" },
    { name: "SQL", level: "Intermediate", icon: "Database" }
  ],
  tools: [
    { name: "Git", level: "Advanced", icon: "GitBranch" },
    { name: "GitHub", level: "Advanced", icon: "Github" },
    { name: "Vite", level: "Advanced", icon: "Zap" },
    { name: "Postman", level: "Intermediate", icon: "Send" },
    { name: "VS Code", level: "Expert", icon: "Cpu" }
  ]
};

export const experiences = [
  {
    id: "ibraine",
    role: "Website Developer",
    company: "iBraine Digital LLP",
    location: "Mumbai, India",
    period: "Jul 2026 - Present",
    current: true,
    description: "Developing and maintaining the commercial iBraine CRM platform with a dedicated focus on high-performance frontend architecture.",
    highlights: [
      "Building responsive interfaces, modular reusable UI components, and enhancing CRM modules for commercial readiness.",
      "Collaborating closely with product teams to improve usability, page loading speed, and overall user experience.",
      "Implementing clean code practices and design consistency across multi-tenant enterprise dashboards."
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "CRM Development"]
  },
  {
    id: "aivot",
    role: "Frontend Developer Intern",
    company: "AIVOT AI Private Limited",
    location: "Navi Mumbai (Remote)",
    period: "Apr 2026 - Aug 2026",
    current: false,
    description: "Engineered high-impact web solutions for NGO platforms and interactive AI measurement applications.",
    highlights: [
      "NGO Website: Engineered a responsive website using React.js, Vite, and CSS featuring reusable UI components, responsive mobile/desktop layouts, and full Marathi language support for accessibility.",
      "Body Measurement Website: Developed frontend interfaces in React.js and Vite, integrated authentication via FastAPI, and created complex CSS micro-animations and hover effects."
    ],
    tech: ["React.js", "Vite", "FastAPI", "CSS Animations", "Localization (Marathi)", "UI Reusability"]
  },
  {
    id: "easypay",
    role: "Frontend Intern",
    company: "Easy Pay Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Jun 2024 - Jul 2024",
    current: false,
    description: "Contributed to web development and user interface design for ONDC ecosystem products.",
    highlights: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
      "Contributed to frontend development for an ONDC-related product ensuring cross-browser compatibility.",
      "Participated in daily standups and code reviews to refine web accessibility."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "ONDC Product UI", "Responsive Design"]
  }
];

export const projects = [
  {
    id: "finance-dashboard",
    title: "Finance Analytics Dashboard",
    date: "Apr 2026",
    category: "React / Frontend",
    type: "Dashboard & Design System",
    image: "/projects/finance-dashboard.jpg",
    description: "Comprehensive financial dashboard built using React.js for tracking and visualizing real-time financial metrics, balance trends, and expense distributions.",
    highlights: [
      "Interactive data charts and visual financial indicators",
      "Modular dashboard widgets with dark/obsidian aesthetics",
      "Fully responsive grid for desktop and mobile analytical views"
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Chart.js/Recharts"],
    githubUrl: "https://github.com/shrishti630/finance-dashboard",
    demoUrl: "https://github.com/shrishti630/finance-dashboard",
    featured: true
  },
  {
    id: "movie-xplore",
    title: "Movie Xplore - TMDB Media Platform",
    date: "Jan 2026",
    category: "JavaScript / API",
    type: "REST API & Streaming UI",
    image: "/projects/movie-xplore.jpg",
    description: "Movie and TV discovery platform built using JavaScript, Tailwind CSS, and TMDB REST APIs for fetching, searching, and displaying trending media details.",
    highlights: [
      "Dynamic REST API integration with TMDB endpoints",
      "Live search with debounced queries and category filtering",
      "Sleek media cards with detailed modal overlays"
    ],
    tech: ["JavaScript (ES6+)", "Tailwind CSS", "TMDB API", "HTML5"],
    githubUrl: "https://github.com/shrishti630/movie-xplore",
    demoUrl: "https://github.com/shrishti630/movie-xplore",
    featured: true
  },
  {
    id: "virtual-tryon",
    title: "3D Virtual Try-On System",
    date: "May 2025",
    category: "AI / 3D Web",
    type: "Research Paper & 3D Web UI",
    image: "/projects/virtual-tryon.jpg",
    description: "Virtual clothing try-on system designed to visualize garment fitting using 3D mannequin models generated from user body measurements. Co-authored research paper.",
    highlights: [
      "Co-authored published academic research paper on 3D Virtual Try-On",
      "Simulates garment fit on 3D mannequin mesh structures",
      "User-friendly parameter controls for accurate sizing visualization"
    ],
    tech: ["React.js", "Python / 3D Graphics", "Body Measurement Algorithms"],
    githubUrl: "https://github.com/shrishti630/3d-virtual-tryon",
    demoUrl: "https://github.com/shrishti630/3d-virtual-tryon",
    featured: true
  },
  {
    id: "road-monitoring",
    title: "Aerial Road Construction Monitoring",
    date: "Sep 2024 - Dec 2024",
    category: "SIH 2024 Grand Finalist",
    type: "SIH 2024 Finalist & GIS AI",
    image: "/projects/aerial-road.jpg",
    description: "Smart India Hackathon 2024 Grand Finalist Project. Automated system for monitoring road construction progress using drone imagery, geotagged data, and AI analysis.",
    highlights: [
      "Grand Finalist at Smart India Hackathon (SIH 2024)",
      "Built Streamlit-based interactive monitoring dashboard",
      "Geotagged drone image analysis for progress verification and measurement"
    ],
    tech: ["Python", "Streamlit", "AI Vision", "Drone Geotagging", "GIS"],
    githubUrl: "https://github.com/shrishti630/aerial-road-monitoring",
    demoUrl: "https://github.com/shrishti630/aerial-road-monitoring",
    featured: true
  },
  {
    id: "aivot-ngo",
    title: "NGO Web Platform & Marathi Localization",
    date: "Apr 2026",
    category: "React / Frontend",
    type: "NGO Community Platform",
    image: "/projects/aivot-ngo.jpg",
    description: "Accessible NGO community platform engineered at AIVOT AI featuring responsive layouts, reusable UI components, and complete Marathi language localization for broader community reach.",
    highlights: [
      "Full dual-language Marathi and English localization toggle",
      "Modular card design system and accessible typography",
      "Developed interactive donor and initiative tracking views"
    ],
    tech: ["React.js", "Vite", "Tailwind CSS", "i18n Localization"],
    githubUrl: "https://github.com/shrishti630",
    demoUrl: "https://github.com/shrishti630",
    featured: true
  },
  {
    id: "face-music",
    title: "Face Recognition Music Recommender",
    date: "Apr 2024",
    category: "AI / Web",
    type: "Computer Vision & Music AI",
    image: "/projects/face-music.jpg",
    description: "Intelligent music recommendation system that detects user facial emotions via computer vision and suggests tailored song playlists in real time.",
    highlights: [
      "Real-time facial emotion recognition pipeline",
      "Automated mood-to-genre mapping logic",
      "Interactive media player and playlist stream UI"
    ],
    tech: ["Python", "OpenCV", "JavaScript", "Web Speech / Emotion API"],
    githubUrl: "https://github.com/shrishti630/face-music-recommender",
    demoUrl: "https://github.com/shrishti630/face-music-recommender",
    featured: false
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Watumull Institute of Engineering and Technology, Maharashtra",
    grade: "CGPA: 7.88",
    period: "2021 - 2025",
    description: "Specialized in Web Application Development, Data Structures, Software Engineering, and AI/ML project applications."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    grade: "91.50%",
    period: "2021",
    description: "Achieved distinction grade with strong foundation in Science and Mathematics."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    grade: "81.00%",
    period: "2019",
    description: "Completed secondary education with top honors."
  }
];

export const achievements = [
  {
    title: "Smart India Hackathon 2024 Grand Finalist",
    organization: "Ministry of Education & SIH 2024",
    description: "Selected among top teams nationally for developing an AI-driven Aerial Road Construction Monitoring system using drone geotagged analytics."
  },
  {
    title: "Research Paper Author - 3D Virtual Try-On",
    organization: "Academic Conference Publication",
    description: "Co-authored research paper on 3D Virtual Clothing Try-On Systems using body measurement algorithms for garment fitting visualization."
  }
];
