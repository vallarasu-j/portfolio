export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
}

export const projectList: ProjectItem[] = [
  {
    title: "Advocates Management Platform",
    description: "Developed a web-based platform for advocate registration, case management, service requests, and online payments. Built scalable applications using React.js, TypeScript, Python (Flask), MongoDB, and AWS. Integrated Razorpay for secure payment processing.",
    technologies: ["React.js", "TypeScript", "Python (Flask)", "MongoDB", "AWS", "Razorpay"]
  },
  {
    title: "Law Universities Management Platform",
    description: "Developed a centralized portal for academic, administrative, and financial management. Built and maintained RESTful APIs and web modules using React.js, TypeScript, Python (Flask), and MongoDB. Integrated AI Pay payment solutions and deployed applications on AWS.",
    technologies: ["React.js", "TypeScript", "Python (Flask)", "MongoDB", "AWS", "AI Pay"]
  },
  {
    title: "AI-Powered Assessment & Evaluation Platform",
    description: "Developed an AI-powered assessment platform for test creation, automated evaluation, and performance analytics. Implemented AI-driven scoring, reporting, and insights to streamline assessment workflows. Built scalable frontend and backend solutions using React.js, Python, and MongoDB.",
    technologies: ["React.js", "Python", "MongoDB", "AI-driven scoring", "Analytics"]
  },
  {
    title: "AI-Powered Job Portal",
    description: "Developed a scalable job portal with AI-powered candidate search and intelligent candidate ranking. Implemented resume parsing, MongoDB Atlas Vector Search, automated candidate shortlisting, and interview scheduling workflows. Built end-to-end recruitment solutions using Python, React.js, MongoDB Atlas, and LLM technologies.",
    technologies: ["Python", "React.js", "MongoDB Atlas", "Vector Search", "LLMs"]
  }
];
