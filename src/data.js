
export const personalInfo = {
  name: "Rushikesh More",
  title: "Full Stack Developer ",
  designation: "Software Developer ",
  experience: "1+ Years",
  email: "morerushi193002@gmail.com",
  phone: "+91 7721060873",
  location: "Pune, Maharashtra, India",

  shortDescription:
    "I am a Full Stack Developer specializing in MERN Stack, Python, Java, DevOps, Cloud Computing, and Generative AI.",

  about:
    "Passionate Software Developer and Technical Trainer with 1+ years of experience in building modern and responsive web applications. Experienced in creating scalable full-stack solutions, integrating REST APIs, deploying cloud infrastructure, and training developers on modern tech stacks.",

  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

export const projectsList = [
  {
     id: 1,
    slug: "ai-task-manager",
    title: "AI-Powered Task Manager",
    shortDescription: "A full-stack productivity app with smart task prioritization and real-time updates.",
    image: "/images/ai-task-manager.png", 
    techStack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    githubUrl: "https://github.com/ai-task-manager",
    liveUrl: "https://your-demo-link.com",
  },
  {
    id: 2,
    slug: "cloud-deployment-dashboard",
    title: "Cloud Deployment Dashboard",
    shortDescription:
      "Containerized microservice monitor built with Docker and AWS SDK.",
    techStack: ["Python",  "AWS", " CSS"],
    githubUrl: "https://github.com/cloud-dashboard",
    liveUrl: "https://your-demo-link.com",
  },
  {
     id:3,
     
  "slug": "website",
  "title": "Computer sales and services",
  "shortDescription": "A responsive web application for browsing computer hardware, purchasing devices, and booking IT repair services. Built using HTML, CSS, and Java.",
  "techStack": ["html", "css", "java"]
  
}



  

 
];

export const projectsDetails = {
  "ai-task-manager": {
    title: "AI-Powered Task Manager",
    overview:
      "Designed and developed a full-stack task management platform that automatically categorizes and prioritizes daily tasks using generative AI.",
    features: [
      "JWT-based user authentication and role management",
      "Automated deadline suggestions powered by LLMs",
      "Real-time status synchronization across devices",
    ],
    techStack: [
      "React",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "OpenAI API",
    ],
    githubUrl: "https://github.com/ai-task-manager",
    liveUrl: "https://your-demo-link.com",
  },

  "cloud-deployment-dashboard": {
    title: "Cloud Deployment Dashboard",
    overview:
      "A centralized monitoring interface for tracking Docker container health and AWS EC2 resource utilization.",
    features: [
      "Live CPU and memory usage metrics",
      "One-click container restart and log streaming",
      "Automated email alerts for service downtime",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "Docker",
      "AWS",
    ],
    githubUrl: "https://github.com/cloud-dashboard",
    liveUrl: "https://your-demo-link.com",
  },
};

export const skills = {
  frontend: [
    "React",
    "JavaScript ",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],

  backend: [
    "Node.js",
    "Express.js",
    "Python",
    "Java",
    "REST APIs",
  ],

  devopsAndCloud: [
    "Docker",
    "AWS",
    "Git",
    "GitHub Actions",
    "Linux",
  ],

  databases: [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ],
};


export const certificates = [
  {
    id: 1,
    provider: "Great Learning",
    title: "HTML & CSS",
    description: "Certificate in HTML and CSS Development",
  },
  {
    id: 2,
    provider: "Course",
    title: "java Programming",
    description: "Certificate in java Programming",
  },
  {
    id: 3,
    provider: "Great Learning",
    title: "JavaScript",
    description: "Certificate in JavaScript Development",
  },
];
