export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    id: "c1",
    title: "Artificial Intelligence for Workspace",
    issuer: "Professional Certification",
    date: "2026",
    image: "/images/certificates/certificate-01.jpg",
  },
  {
    id: "c2",
    title: "Data Analytics Workshop",
    issuer: "Workshop",
    date: "2025",
    image: "/images/certificates/certificate-01.jpg",
  },
  {
    id: "c3",
    title: "AWS Cloud Computing & DevOps",
    issuer: "Workshop",
    date: "2025",
    image: "/images/certificates/certificate-01.jpg",
  },
  {
    id: "c4",
    title: "Full Stack using Spring Boot & MongoDB",
    issuer: "Workshop",
    date: "2025",
    image: "/images/certificates/certificate-01.jpg",
  },
];
