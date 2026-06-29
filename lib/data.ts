// lib/data.ts — All portfolio content derived from Janvi's resume

export const personalInfo = {
  name: "Janvi Arora",
  title: "Software Engineer",
  roles: [
    "Full Stack Developer",
    "Agentic AI Developer",
    "Backend Engineer",
    "Problem Solver",
    "Open Source Contributor",
  ],
  tagline: "I build intelligent software that actually ships.",
  bio: "B.Tech Computer Science student at JIIT Noida, graduating 2027. I specialize in full-stack development and agentic AI systems — building products that combine React frontends, FastAPI backends, and LLM-powered intelligence. I care about clean architecture, measurable impact, and code that scales.",
  location: "Noida, India",
  email: "janvi.jiyaarora@gmail.com",
  phone: "+91 8708531425",
  links: {
    github: "https://github.com/JanviArora24",
    linkedin: "https://www.linkedin.com/in/janvi-arora-7b8299294",
    leetcode: "https://leetcode.com/u/Janvi_Arora242005/",
    resume: "/resume_general.pdf",
  },
};

export const skills = [
  {
    category: "Frontend",
    color: "#818CF8",
    items: ["React", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    category: "Backend",
    color: "#34D399",
    items: ["FastAPI", "REST APIs", "Authentication", "Python", "Argon2", "Async Python"],
  },
  {
    category: "AI / LLM",
    color: "#F472B6",
    items: ["Gemini API", "Generative AI", "Prompt Engineering", "OCR", "Edge-TTS", "RAG"],
  },
  {
    category: "Languages",
    color: "#FBBF24",
    items: ["Python", "JavaScript (ES6+)", "C++", "SQL", "TypeScript"],
  },
  {
    category: "Databases",
    color: "#60A5FA",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Cloud & Tools",
    color: "#A78BFA",
    items: ["Git", "GitHub", "Vercel", "Render", "Linux/Bash", "VS Code"],
  },
  {
    category: "CS Core",
    color: "#FB923C",
    items: ["DSA", "OOP", "DBMS", "OS", "CN","Graph Algorithms"],
  },
];

export const projects = [
  {
    id: "medilens",
    title: "MediLens",
    subtitle: "AI Health Report Analyzer",
    description:
      "An intelligent health report analysis platform that transforms raw medical PDFs into structured, conversational health insights using OCR and Gemini AI.",
    problem:
      "Patients receive medical reports full of clinical jargon they can't interpret. MediLens bridges that gap — turning lab reports into plain-language health summaries with trend tracking.",
    techStack: ["React", "FastAPI", "Python", "OCR", "Gemini API", "Tailwind CSS", "MongoDB", "JWT"],
    features: [
      "Processes 6+ medical report types (CBC, Lipid, LFT, KFT, Diabetes, Vitamins)",
      "Conversational AI interface for health Q&A",
      "Trend comparison across multiple reports",
      "Handles files up to 10 MB in 5–15 seconds",
      "Secure JWT auth + Argon2 password hashing",
    ],
    architecture:
      "React SPA → FastAPI microservices → OCR extraction pipeline → Gemini API analysis → MongoDB persistence. 9 REST endpoints with protected routes and persistent session management.",
    impact: "Processed reports for 10+ test users; 9 API endpoints; 5–15s analysis time",
    github: "https://github.com/JanviArora24/Medilens-AI-Health-Report-Analyzer",
    demo: "https://medilens-ai-health-report-analyzer.vercel.app/",
    color: "#6C63FF",
    tag: "AI Product",
  },
  {
    id: "ai-doc-intelligence",
    title: "AI Document Intelligence",
    subtitle: "Multi-Modal Document Processing System",
    description:
      "A full-stack collaborative system that turns raw academic documents into summaries, Q&A sessions, structured planners, and podcast-style audio — powered by Gemini AI.",
    problem:
      "Students and educators spend hours manually distilling documents. This system automates the entire pipeline — from a raw PDF to a podcast in minutes.",
    techStack: ["React", "FastAPI", "Gemini API", "Edge-TTS", "Pydub", "Python"],
    features: [
      "6 AI modules: summarization, Q&A, student/lecture/lab planner, podcast",
      "End-to-end podcast pipeline with multi-speaker audio",
      "Processes PDFs up to 80 pages and 15 MB",
      "Real-time processing feedback via async Fetch API",
      "Dynamic DOM updates with no page reloads",
    ],
    architecture:
      "Work in a 3-person team. Built 10+ FastAPI endpoints across 6 AI modules. Audio pipeline: Edge-TTS generation → Pydub multi-speaker merging → 2–10 min output.",
    impact: "10+ API endpoints; 80-page PDF support; 2–10 min podcast output",
    github: "https://github.com/Akshat-1618/AI-Document-Assisstant",
    demo: null,
    color: "#A78BFA",
    tag: "Agentic AI",
  },
  {
    id: "metro-simulator",
    title: "Metro System Simulator",
    subtitle: "Graph-Based Transit Engine",
    description:
      "A complete Delhi Metro simulation engine built in C++ using graph theory — featuring shortest-path routing, fare calculation, card management, and patrol generation.",
    problem:
      "A systems-level deep dive into graph algorithms, OOP design, and CLI engineering — replicating the real-world logic of a metro network from scratch.",
    techStack: ["C++", "OOP", "Dijkstra's Algorithm", "BFS", "Graph Theory", "Data Structures"],
    features: [
      "3-line, 25-station metro network",
      "50+ weighted edges with adjacency-list representation",
      "Dijkstra's algorithm for shortest-path routing",
      "BFS for multi-stop route planning",
      "Dual-mode CLI: User + Staff with 15+ commands",
    ],
    architecture:
      "Adjacency-list graph with weighted edges. OOP-designed station/line classes. Dijkstra + BFS hybrid routing. CLI command parser for two user personas.",
    impact: "25 stations, 50+ edges, 15+ CLI commands, complete metro logic",
    github: "https://github.com/SV2111004/Metro-system",
    demo: null,
    color: "#34D399",
    tag: "Systems",
  },
  {
  id: "crime-prediction",
  title: "Crime Prediction & Analysis",
  subtitle: "Machine Learning Analytics Platform",

  description:
    "A machine learning platform that analyzes historical crime datasets to identify patterns and visualize crime hotspots through an interactive dashboard.",

  problem:
    "Crime records contain valuable insights but are difficult to interpret at scale. This project combines machine learning and visualization to uncover trends, support data-driven analysis, and present findings through an interactive interface.",

  techStack: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Streamlit",
    "Matplotlib",
    "Folium",
  ],

  features: [
    "Historical crime pattern analysis",
    "Data preprocessing & feature engineering",
    "Exploratory Data Analysis (EDA)",
    "Supervised machine learning pipeline",
    "Interactive Streamlit dashboard",
    "Geographical crime hotspot visualization using Folium",
  ],

  architecture:
    "Python ML pipeline with Pandas and Scikit-learn for preprocessing, training, and evaluation. Interactive Streamlit frontend integrated with Matplotlib and Folium for analytics and geographic visualization.",

  impact:
    "ML prediction pipeline; Interactive analytics dashboard; Geographic hotspot visualization",

  github: "https://github.com/SV2111004/crime-prediction",

  demo: "https://crime-prediction-jsa.streamlit.app/",

  color: "#F59E0B",

  tag: "Machine Learning",
},
];

export const experience = [
  {
    title: "Open Source Contributor",
    org: "GirlScript Summer of Code (GSSoC) 2025",
    period: "2025",
    type: "Open Source",
    description:
      "Contributed to WebDevIn100Days — a community repository of 100+ web projects. Shipped a fully interactive Drum Kit app and resolved critical navigation and UI bugs.",
    highlights: [
      "Built interactive Drum Kit: keyboard/mouse event handling, audio sync, CSS animations",
      "Fixed broken About section navigation and dynamic project counter",
      "2 merged PRs across 3 issues following full Git workflow",
    ],
    color: "#F472B6",
  },
  {
  title: "MERN Stack Development Intern",
  org: "Maincraft Technologies",
  period: "2026",
  type: "Internship",
  description:
    "Completed a MERN Stack Development internship focused on building responsive web applications, implementing frontend features, and following collaborative Git workflows.",
  highlights: [
    "Built responsive frontend interfaces using React.js, HTML, CSS and JavaScript",
    "Worked with Git and GitHub for version control, documentation and project submission",
    "Developed and delivered MERN-based project modules following internship milestones",
  ],
  color: "#34D399",
},
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Jaypee Institute of Information Technology, Noida",
    period: "2023 – 2027",
    grade: "CGPA: 8.79 / 10",
    highlight: true,
  },
  {
    degree: "Class 12 — PCM",
    institution: "Sanatan Dharam Vidya Mandir, Panipat",
    period: "2023",
    grade: "96.17%",
    highlight: false,
  },
  {
    degree: "Class 10",
    institution: "Sanatan Dharam Vidya Mandir, Panipat",
    period: "2021",
    grade: "96.5%",
    highlight: false,
  },
];

export const achievements = [
  { label: "DSA Problems Solved", value: 400, suffix: "+", description: "LeetCode" },
  { label: "REST API Endpoints Built", value: 19, suffix: "+", description: "Across projects" },
  { label: "CGPA", value: 8.79, suffix: "/10", description: "JIIT Noida" },
  { label: "Open Source PRs", value: 2, suffix: " merged", description: "GSSoC 2025" },
  { label: "Medical Report Types", value: 6, suffix: "+", description: "MediLens" },
  { label: "Class 12 Score", value: 96, suffix: ".17%", description: "PCM + CS" },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    handle: "janviarora",
    url: "https://leetcode.com/u/Janvi_Arora242005/",
    stat: "400+ problems",
    color: "#FFA116",
    icon: "code",
  },
  {
    platform: "GitHub",
    handle: "janviarora",
    url: "https://github.com/JanviArora24",
    stat: "3 public projects",
    color: "#6C63FF",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    handle: "Janvi Arora",
    url: "https://www.linkedin.com/in/janvi-arora-7b8299294/",
    stat: "Open to opportunities",
    color: "#0A66C2",
    icon: "linkedin",
  },
 {
  platform: "Codeforces",
  handle: "janviarora",
  url: "https://codeforces.com/profile/janvi.jiyaarora",
  stat: "Competitive Programming",
  color: "#3B82F6",
  icon: "code",
},
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
