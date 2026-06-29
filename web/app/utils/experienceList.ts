export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experienceList: ExperienceItem[] = [
  {
    company: "SISCASO Pvt Ltd",
    location: "Chennai, India",
    role: "Full Stack Developer",
    period: "Jul 22 - Present",
    bullets: [
      "Designed, developed, and deployed scalable full-stack web applications using React.js, TypeScript, JavaScript, Python (Flask), and MongoDB across legal-tech and ed-tech platforms.",
      "Built reusable and responsive frontend applications using React.js, Redux, Tailwind CSS, and Ant Design, improving user experience, maintainability, and application performance.",
      "Developed secure RESTful APIs using Python (Flask), MongoDB, JWT authentication, role-based access control (RBAC), and encrypted data transmission.",
      "Optimized application performance through lazy loading, code splitting, database indexing, query optimization, and caching, reducing page load times by 35%.",
      "Architected modular backend services for payment processing, document generation, notifications, and business workflows, improving scalability and maintainability.",
      "Optimized PDF generation and document-processing pipelines using multi-threading and asynchronous processing, reducing execution time by 40%.",
      "Integrated third-party APIs and payment gateways, including Razorpay and AI Pay, supporting 15,000+ monthly transactions and automated business processes.",
      "Managed AWS cloud infrastructure (EC2, S3, Route 53, SES), Docker-based deployments, and CI/CD pipelines to ensure reliable and scalable application delivery.",
      "Served as Technical Lead for 3+ years, leading a team of 3-5 engineers, conducting code reviews, managing Agile/Scrum processes, collaborating with stakeholders, and delivering end-to-end software solutions."
    ]
  },
  {
    company: "SISCASO Pvt Ltd",
    location: "Chennai, India",
    role: "Full Stack Developer (Intern)",
    period: "Feb 22 - Jul 22",
    bullets: [
      "Assisted in development of full-stack web applications using React.js, TypeScript, Python (Flask), and MongoDB.",
      "Supported backend API development, frontend feature implementation, debugging, and performance optimization tasks.",
      "Assisted in AWS deployment and configuration using EC2 and S3 services.",
      "Contributed to Agile development workflows including sprint planning, testing, bug fixing, and peer code reviews.",
      "Gained hands-on experience in scalable application architecture, cloud deployment, and full SDLC processes."
    ]
  }
];
