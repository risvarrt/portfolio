import React from "react";
import { FaGraduationCap, FaJava, FaCogs, FaDatabase, FaChalkboardTeacher } from "react-icons/fa";


// 👉 replace these with actual screenshots in /public
import tripmate from "@/public/1.png";
import matchify from "@/public/0.png";
import roadhrm from "@/public/2.png";
import emotion from "@/public/3.png";
import dbms from "@/public/4.png";
import cksp from "@/public/5.png";
import hla from "@/public/6.png";
import nutrifit from "@/public/7.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
   { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Contents", hash: "#contents" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer (Contract)",
    location: "Redbrick Technologies, Victoria, BC",
    description:
      "I worked as a Full Stack Developer on the Shift browser product. I implemented and documented the migration of feature flags using Vue.js, Nuxt.js, TypeScript, and ConfigCat, which optimized ad performance for over 30,000 active users. I created end-to-end and unit tests with Playwright and Vitest, improving code coverage by 20%. I also achieved better observability and reliability by building Datadog monitors that reduced downtime by 25%. In addition, I completed CI/CD pipelines for ad deployment with Python, AWS CodePipeline, and GitHub Actions, which streamlined workflows and accelerated release cycles.",
    date: "Jan 2025 – Present",
    category: "work",
    icon:React.createElement(FaCogs),
  },
  {
    title: "Software Engineer",
    location: "Aeris Communications",
    description:
      "As a Software Engineer at Aeris, I led the migration of CDR billing systems from Oracle BRM to Google Cloud Platform. I achieved 22.4% cost savings by leveraging BigQuery for efficient data warehousing and processing. I worked on streamlining ETL workflows with Apache Airflow, ensuring smooth data migration with minimal downtime. I also developed and executed CRON jobs to automate billing processes across three different billing schemes, completing filtering, rating, and reporting stages successfully.",
    date: "Mar 2023 – Dec 2023",
    category: "work",
    icon: React.createElement(FaDatabase),
  },
  {
    title: "Software Engineer",
    location: "Ericsson",
    description:
      "As a Software Engineer at Ericsson, I contributed to the IoT-Accelerator platform, a cloud-based connectivity solution. I worked on designing and delivering features for the Location Based Service (LBS) API, which enabled usage-based charging for enterprise customers and resulted in a 5.67% increase in revenue. I also managed subsystem responsibility for ActiveMQ, ensuring reliable message queuing, monitoring metrics through Grafana dashboards, and resolving bugs and performance issues.",
    date: "Feb 2022 – Mar 2023",
    category: "work",
    icon: React.createElement(FaJava),
  },
  {
    title: "Software Developer (Contract)",
    location: "Zoho Corporation",
    description:
      "At Zoho, I designed and built a Railway Ticket Reservation MVP. I used Struts2 and Java design patterns to implement core reservation features while eliminating third-party dependencies by applying XML mapping. This approach ensured a lightweight and maintainable system.",
    date: "Feb 2022 – Mar 2023",
    category: "work",
    icon: React.createElement(FaJava),
  },
  {
    title: "Teaching Assistant & Marker",
    location: "Dalhousie University, Halifax, NS",
    description:
      "As a Teaching Assistant and Marker, I worked across multiple courses, including CSCI 5709 (Advanced Web Development), DGIN 5201 (Digital Transformation), and CSCI 2210 (Data Structures & Algorithms). I guided and mentored students, led tutorials on FastAPI and containerized microservices, supported project development, graded assignments and exams, and assisted with proctoring. I helped bridge concepts between theory and practice for over 60 graduate students.",
    date: "Aug 2024 – May 2025",
    category: "work",
    icon: React.createElement(FaChalkboardTeacher),
  },
  {
    title: "Master of Applied Computer Science",
    location: "Dalhousie University, Canada",
    description:
      "Recently completed my Master’s degree with a CGPA of 4.08/4.30. Alongside coursework, I worked as a TA and marker, where I supported student learning in areas such as web development, digital transformation, and algorithms. My academic journey has deepened my expertise in cloud computing, AI, and applied software engineering.",
    date: "Jan 2024 – May 2025",
    category: "education",
    icon: React.createElement(FaGraduationCap),
  },
  {
    title: "Bachelor of Engineering in Computer Science",
    location: "Anna University, India",
    description:
      "I completed my undergraduate degree with first class distinction, achieving a CGPA of 9.06/10. My studies gave me a strong foundation in computer science, data structures, object-oriented programming, and software engineering principles.",
    date: "Aug 2018 – Jun 2022",
    category: "education",
    icon: React.createElement(FaGraduationCap),
  },
] as const;

export const projectsData = [
  {
    title: "TripMateAI",
    description:
      "An AI-powered travel planning system which can be used to generate personalized itineraries for users. It integrates Google Vertex AI with a serverless 3-tier AWS architecture to create customized trip plans, export them as PDFs, and enable real-time collaboration. The system uses Cognito for authentication and leverages Lambda, DynamoDB, and S3 for scalable back-end operations.",
    tags: ["Vue.js", "Node.js", "AWS", "Vertex AI"],
    imageUrl: tripmate,
    projectUrl: "https://github.com/risvarrt/TripMateAI",
  },
  {
    title: "Contextual Knowledge Search Platform",
    description:
      "An AI-powered knowledge search system which can be used to retrieve information from large document sets in a secure on-prem environment. It integrates Cohere LLMs, Chroma vector DB, and LangChain pipelines to provide contextual, semantic search and retrieval without relying on cloud-based services.",
    tags: ["React", "Flask", "Cohere", "LangChain", "MongoDB"],
    imageUrl: cksp,
    projectUrl: "https://github.com/risvarrt/Contextual-Knowledge-Search-Platform",
  },
  {
    title: "NutriFit",
    description:
      "A wellness platform which can be used to plan workouts, track progress, and generate AI-powered recipes. It also integrates e-commerce features and program builder modules. The system is built on the MERN stack and includes CI/CD pipelines for automated testing and deployment.",
    tags: ["React", "Express", "MongoDB", "OpenAI"],
    imageUrl: nutrifit,
    projectUrl: "https://github.com/risvarrt/NutriFit",
  },
  {
    title: "RoadSafetyHRM",
    description:
      "A data-driven application which can be used to analyze road safety in Halifax. It employs DBSCAN clustering to identify accident hotspots and Naïve Bayes classification to predict collision risks. The system includes interactive dashboards built with Dash and Plotly for visualization.",
    tags: ["Python", "Dash", "scikit-learn", "Plotly"],
    imageUrl: roadhrm,
    projectUrl: "https://github.com/risvarrt/RoadSafetyHRM",
  },
  {
    title: "Matchify",
    description:
      "A social matching platform which can be used to connect people through shared interests and events. It enables users to join activities, find matches, and chat in real-time. The system was built with Spring Boot, React, and MySQL, and includes TDD methodology, Dockerized deployment, and CI/CD pipelines.",
    tags: ["Spring Boot", "React", "MySQL", "Docker", "Mockito"],
    imageUrl: matchify,
    projectUrl: "https://github.com/risvarrt/Matchify",
  },
  {
    title: "Virtual Lab Assistant",
    description:
      "A virtual lab system which can be used to conduct online coding assessments and technical interviews. It integrates an in-browser compiler, chat, and screen sharing, while using FaceNet and Faster-RCNN for real-time ID and device verification to ensure exam integrity.",
    tags: ["React", "MongoDB", "FaceNet", "Faster-RCNN"],
    imageUrl: hla,
    projectUrl: "https://github.com/risvarrt/Virtual-Lab-Assistant",
  },
  {
    title: "MySQL Prototype",
    description:
      "A lightweight database management system which can be used to execute basic SQL operations. It supports DDL and DML commands (CREATE, INSERT, UPDATE, SELECT) with transaction handling, commit/rollback, JSON storage, and regex-based parsing. Implemented entirely in Java to understand DBMS internals.",
    tags: ["Java", "DBMS", "Transactions"],
    imageUrl: dbms,
    projectUrl: "https://github.com/risvarrt/MySQL-Prototype",
  },
  {
    title: "Emotion Detector",
    description:
      "An AI-powered emotion detection system which can be used to identify user emotions in real time through a webcam. It employs a CNN model built with Keras and OpenCV, and responds with matching motivational quotes and music to enhance user experience.",
    tags: ["Python", "Flask", "Keras", "OpenCV"],
    imageUrl: emotion,
    projectUrl: "https://github.com/risvarrt/Emotion_Detector",
  },
] as const;

// ---------- SKILLS (Full-Stack) ----------
export const skillsFullStack = {
  languages: ["Core Java", "JavaScript", "TypeScript", "Python"],
  frameworks: ["Spring Boot", "Node.js (Express)", "Flask", "React.js", "Vue.js"],
  libraries: ["Redux", "Elasticsearch"],
  databases: ["MySQL", "MongoDB", "Firebase", "BigQuery", "DynamoDB"],
  devopsCloud: ["Git", "Jenkins", "Docker", "Kubernetes", "Ansible", "CI/CD"],
  messaging: ["Kafka", "ActiveMQ"],
  monitoring: ["Grafana", "Datadog"],
  concepts: [
    "Agile",
    "OOPS",
    "SOLID",
    "TDD",
    "Unit & Integration Testing",
  ],
  certifications: [
    "AWS SAA-C03",
    "GCP Fundamentals (Coursera)",
    "Azure Fundamentals (AZ-900)",
  ],
} as const;

// ---------- SKILLS (Data Science) ----------
export const skillsDataScience = {
  frameworksLibs: [
    "scikit-learn",
    "Keras",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "Matplotlib",
    "OpenCV",
    "Dash",
  ],
  concepts: [
    "Machine Learning Algorithms",
    "Neural Networks",
    "Data Visualization",
    "Statistical Analysis",
  ],
  certifications: ["Machine Learning (Andrew Ng)"],
} as const;
