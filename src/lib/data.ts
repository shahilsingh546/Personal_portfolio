export const profile = {
  name: "Sahil Singh",
  role: "Software Engineer",
  company: "MediaTek",
  location: "Bengaluru, India",
  email: "shahilsingh456@gmail.com",
  github: "https://github.com/shahilsingh546",
  linkedin: "https://www.linkedin.com/in/sahil-singh-1474b1228",
  summary:
    "I build scalable backend systems, full-stack web applications, and AI-powered automation tools. Currently at MediaTek, working on Python backend services, REST APIs, and internal AI platforms. Interested in backend engineering, platform engineering, and fintech.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "MediaTek",
    role: "Software Engineer",
    period: "Jul 2024 — Present",
    location: "Noida, India",
    highlights: [
      "Developed and maintain a large-scale Python backend (10K+ LOC) with 15+ REST APIs; cut customer-reported issues by 80% through bug fixes and comprehensive PyTest coverage.",
      "Built a Flask-based web automation platform that parses large log files and generates network configuration profiles — reducing a 3–4 hour manual process to seconds.",
      "Designed an AI-powered automation platform on the FastMCP framework with STDIO and Streamable HTTP transports, deployed to the internal AI marketplace.",
      "Engineered an AI-assisted system that converts natural-language test scenarios into executable scripts, cutting creation time from 8 hours to minutes.",
      "Shipped a global KPI monitoring dashboard (Python, React, Node.js, MySQL) serving 50+ concurrent users with real-time network metrics.",
    ],
    stack: ["Python", "Flask", "FastMCP", "React", "Node.js", "MySQL", "LLM Integration"],
  },
  {
    company: "Ericsson",
    role: "Software Development Engineer",
    period: "Mar 2023 — Sep 2023",
    location: "Noida, India",
    highlights: [
      "Worked across the stack on automation lifecycle management tooling using JavaScript, Ext JS, Groovy, and SQL.",
      "Built new React components with styled-components and contributed to API integration and data verification.",
    ],
    stack: ["React", "JavaScript", "Ext JS", "Groovy", "SQL"],
  },
  {
    company: "Octro Inc.",
    role: "Software Engineer Intern",
    period: "Aug 2022 — Oct 2022",
    location: "Noida, India",
    highlights: [
      "Developed client-side features for multiplayer games using C++ and the Cocos2d-x cross-platform engine.",
      "Authored architecture and API documentation for existing game codebases across mobile and web.",
    ],
    stack: ["C++", "Cocos2d-x"],
  },
  {
    company: "Desi QnA",
    role: "Software Engineer Intern",
    period: "Mar 2022 — Jun 2022",
    location: "Remote",
    highlights: [
      "Eliminated 1000+ spam registrations and bot posts by designing hashmap-based detection and integrating Google reCAPTCHA.",
    ],
    stack: ["JavaScript", "reCAPTCHA"],
  },
];

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "PaisaFlow",
    description:
      "Full-stack digital wallet platform with secure authentication, wallet management, and bank webhook reconciliation.",
    highlights: [
      "RESTful APIs for wallet and transaction processing with Prisma ORM and PostgreSQL, using database transactions for reliable balance updates.",
      "Bank webhook handler that processes external payment events and automatically reconciles transaction statuses.",
      "JWT-based authorization, bcrypt password hashing, and Zod request validation; containerized with Docker and deployed on Vercel.",
    ],
    stack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Docker"],
    github: "https://github.com/shahilsingh546/PaisaFlow",
  },
  {
    name: "WriteFlow",
    description:
      "Private publishing platform with role-based access control and owner-only content management, running on the edge.",
    highlights: [
      "RESTful APIs built with Hono on Cloudflare Workers, backed by Prisma ORM and PostgreSQL.",
      "Shared TypeScript package for types and Zod schemas, ensuring end-to-end type safety.",
      "Centralized error handling and rate limiting on serverless edge infrastructure.",
    ],
    stack: ["React", "TypeScript", "Hono", "Cloudflare Workers", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/shahilsingh546/Writeflow",
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "C++"] },
  { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Recoil"] },
  { label: "Backend", items: ["Node.js", "Express.js", "Hono", "Flask", "REST APIs", "NextAuth / JWT"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"] },
  { label: "Cloud & DevOps", items: ["Docker", "AWS EC2", "Nginx", "Cloudflare Workers", "Vercel"] },
  { label: "Tools", items: ["Git", "TurboRepo", "OpenAPI", "PyTest", "FastMCP"] },
];

export const education = {
  school: "GL Bajaj Institute of Technology and Management",
  degree: "B.Tech, Electronics and Communication Engineering",
  period: "2019 — 2023",
  detail: "CGPA 8.17 · Greater Noida, India",
};
