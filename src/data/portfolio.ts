export const portfolioData = {
  personal: {
    name: "Suhani Srivastava",
    title: "Full Stack Software Engineer",
    location: "Gurgaon, India",
    email: "srisuhani9651@gmail.com",
    phone: "+91-9651575545",
    linkedin: "https://linkedin.com/in/suhani-srivastava",
    github: "https://github.com/suhani-srivastava",
    summary:
      "Motivated Full Stack Software Engineer with hands-on experience in developing scalable web applications and RESTful APIs. Proficient in Node.js, Express.js, React, and PostgreSQL, with expertise in designing optimized schemas, writing complex queries, improving performance using indexes, and building reliable backend systems.",
  },

  education: [
    {
      degree: "Master of Computer Application",
      institution: "Chandigarh University",
      period: "Aug 2022 - Sept 2024",
      grade: "CGPA: 7.6",
    },
  ],

  technicalSkills: [
    { category: "Databases", skills: ["PostgreSQL", "MongoDB"] },
    { category: "Languages", skills: ["JavaScript", "Java (Basics)"] },
    { category: "Frameworks", skills: ["React", "Node.js", "Express", "Spring Boot"] },
    { category: "ORM", skills: ["Sequelize"] },
    { category: "Deployment", skills: ["Docker"] },
    { category: "CI/CD", skills: ["Git", "GitHub", "Bitbucket"] },
    { category: "Tools", skills: ["VS Code", "WebStorm", "Jira", "PgAdmin", "Postman", "Chrome DevTools"] },
  ],

  softSkills: [
    "Detail Oriented",
    "Communication",
    "Problem Solving",
    "Debugging",
    "Critical Thinking",
    "Teamwork",
    "Adaptability",
    "Code Optimization",
  ],

  experience: [
    {
      role: "Associate Software Engineer",
      company: "MPC Cloud Consulting Pvt. Ltd.",
      location: "Gurugram, Haryana",
      period: "Oct 2024 - Present",
      projects: [
        {
          name: "SaaS Based HRMS Project",
          highlights: [
            "Developed scalable web applications and RESTful APIs using Spring Boot",
            "Designed and implemented PostgreSQL database schemas, including functions and procedures",
            "Optimized relational tables using indexes, reducing data retrieval time from 2–3 seconds to under 700 ms",
          ],
        },
        {
          name: "Invoice Management System",
          highlights: [
            "Built web applications and RESTful APIs using Node.js and Express.js",
            "Designed relational data models and implemented PostgreSQL functions using ORM (Sequelize)",
            "Created and maintained table structures using Node.js models for invoice workflows",
            "Deployed backend services using Docker for stable and portable runtime",
          ],
        },
      ],
    },
  ],
};
