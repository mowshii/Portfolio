export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    label: "Programming",
    items: ["Python", "Java", "JavaScript", "R"],
  },
  {
    id: "web",
    label: "Web Development",
    items: [
      "HTML",
      "CSS",
      "React.js",
      "Flask",
      "FastAPI",
      "Spring Boot",
      "Node.js",
    ],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Generative AI",
      "Agentic AI",
    ],
  },
  {
    id: "data",
    label: "Data Science",
    items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Plotly"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle SQL", "XAMPP"],
  },
  {
    id: "ai-tools",
    label: "AI Tools",
    items: ["Ollama", "Qwen3"],
  },
  {
    id: "tools",
    label: "Tools",
    items: ["Git", "GitHub", "Docker", "Power BI", "Tableau", "Figma"],
  },
  {
    id: "other",
    label: "Other",
    items: ["Linux", "Ubuntu Server"],
  },
];
