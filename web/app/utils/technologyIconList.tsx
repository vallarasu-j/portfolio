import React from "react";
import {
  CSSSVG,
  JavascriptSVG,
  TypescriptSVG,
  ReactSVG,
  TailwindSVG,
  AntdSVG,
  AWSSVG,
  MongoDBSVG,
  ExpressSVG,
  PythonSVG,
  GithubSVG,
} from "../components/ui/icons";

export interface SkillItem {
  name: string;
  icon?: React.ReactNode;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const color = "currentColor"; // use parent color
const size = 20;

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <ReactSVG color={color} size={size} /> },
      { name: "JavaScript (ES6+)", icon: <JavascriptSVG color={color} size={size} /> },
      { name: "TypeScript", icon: <TypescriptSVG color={color} size={size} /> },
      { name: "HTML5" },
      { name: "CSS3", icon: <CSSSVG color={color} size={size} /> },
      { name: "Tailwind CSS", icon: <TailwindSVG color={color} size={size} /> },
      { name: "Ant Design", icon: <AntdSVG color={color} size={size} /> },
      { name: "Responsive Web Design" },
      { name: "RESTful API Integration" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: <PythonSVG color={color} size={size} /> },
      { name: "Flask" },
      { name: "Node.js", icon: <ExpressSVG color={color} size={size} /> },
      { name: "RESTful APIs" },
      { name: "Secure API Design" },
      { name: "JWT Authentication & Authorization" },
      { name: "Middleware Architecture" },
      { name: "Data Encryption" },
    ],
  },
  {
    category: "AI Integration",
    items: [
      { name: "Large Language Models (LLMs)" },
      { name: "Retrieval Augmented Generation (RAG)" },
      { name: "OpenAI API" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "Embeddings" },
      { name: "Semantic Search" },
      { name: "AI Application Development" },
      { name: "AI Feature Integration" },
      { name: "AI-Assisted Development" },
      { name: "Machine Learning Fundamentals" },
    ],
  },
  {
    category: "Databases, Cloud & Tools",
    items: [
      { name: "MongoDB", icon: <MongoDBSVG color={color} size={size} /> },
      { name: "AWS EC2", icon: <AWSSVG color={color} size={size} /> },
      { name: "AWS S3" },
      { name: "AWS Route 53" },
      { name: "Docker" },
      { name: "CI/CD Pipelines" },
      { name: "Git" },
      { name: "GitHub", icon: <GithubSVG color={color} size={size} /> },
      { name: "Full SDLC" },
      { name: "Clean Code Practices" },
      { name: "Scalable Architecture" },
      { name: "Client Collaboration" },
      { name: "Agile/Scrum" },
    ],
  },
];
