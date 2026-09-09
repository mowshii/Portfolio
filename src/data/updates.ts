export type Update = {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
};

export const updates: Update[] = [
  {
    id: "u1",
    date: "01 / 09 / 2026",
    category: "BUILDING",
    title: "AI-powered document analysis",
    description:
      "Continuing work on intelligent document systems — OCR, clause extraction and review interfaces that make long paperwork actually usable.",
  },
  {
    id: "u2",
    date: "AUGUST 2026",
    category: "EXPLORING",
    title: "Generative & Agentic AI",
    description:
      "Studying multi-agent workflows, tool use and how small, well-scoped agents outperform a single rambling model.",
  },
  {
    id: "u3",
    date: "2026",
    category: "GROWING",
    title: "Full-stack development",
    description:
      "Deepening React, Flask/FastAPI and database work so the intelligence layer always sits on software that can ship.",
  },
];
