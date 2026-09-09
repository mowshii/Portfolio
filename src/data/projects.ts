export type ProjectLayout = "left" | "right" | "full";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  detailImage?: string;
  github: string;
  live?: string;
  layout: ProjectLayout;
  problem: string;
  approach: string;
  technology: string;
  architecture: string[];
  implementation: string;
  challenges: string;
  solution: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "intelligent-sales-deed-analysis",
    number: "01",
    title: "Intelligent Sales Deed Analysis",
    category: "AI · NLP · DOCUMENT INTELLIGENCE",
    description:
      "An intelligent document-analysis system designed to extract important information from property documents and present it in a clear and useful format.",
    technologies: [
      "Python",
      "Flask",
      "React",
      "PostgreSQL",
      "OCR",
      "NLP",
      "LLM",
    ],
    image: "/images/projects/sales-deed.jpg",
    detailImage: "/images/projects/sales-deed-detail.jpg",
    github: "https://github.com/mowshii",
    layout: "left",
    problem:
      "Sales deeds and property documents are long, inconsistently formatted and often scanned. Lawyers, buyers and clerks still extract parties, survey numbers, consideration, boundaries and encumbrances by hand — slow, error-prone, and difficult to search later.",
    approach:
      "Treat the deed as a pipeline, not a single model call. Ingest the document, recover text with OCR, preserve layout, then combine rule-based NLP with a constrained LLM to fill a legal schema. Surface every extraction in a review UI so a person can confirm before it is stored.",
    technology:
      "Python orchestrates the pipeline. Flask exposes REST endpoints. React is the review surface. PostgreSQL holds documents, extracted fields and audit history. OCR recovers text from scans; NLP and an LLM collaborate on clause-level understanding.",
    architecture: [
      "Document intake and secure file storage",
      "OCR and layout reconstruction",
      "Clause segmentation and candidate spans",
      "Hybrid NLP + LLM schema filling",
      "Validation, confidence scores and human review",
      "Structured records in PostgreSQL",
    ],
    implementation:
      "Uploads move through a Flask service that runs OCR, normalises pages and chunks the deed by clause. A schema-constrained extraction step pulls parties, dates, consideration, schedule of property and exceptions. The React workspace shows the original page beside structured fields so reviewers can jump from a value back to its source span.",
    challenges:
      "Poor scans, stamps over text, bilingual pages, and legal phrasing that does not look like training data. Layout also varies wildly between registrars — a single template parser was never going to be enough.",
    solution:
      "A hybrid stack: OCR with image cleanup, layout-aware chunking, rules for high-precision fields, and an LLM with a strict JSON schema for the rest. Low-confidence fields stay flagged until a reviewer accepts them.",
    result:
      "A deed becomes a structured brief — parties, property schedule, consideration and caveats — ready to search, compare and hand to the next step of a transaction instead of a stack of unmarked pages.",
  },
  {
    slug: "pattern-analysis-toolkit",
    number: "02",
    title: "Pattern Analysis Toolkit",
    category: "AI · MEDICAL DOCUMENT INTELLIGENCE",
    description:
      "An AI-powered medical document analysis system involving PDF processing, OCR, NLP-based event extraction, REST APIs and PostgreSQL integration.",
    technologies: [
      "Python",
      "Flask",
      "React",
      "OCR",
      "spaCy",
      "PostgreSQL",
      "REST APIs",
    ],
    image: "/images/projects/pattern-analysis.jpg",
    github: "https://github.com/mowshii",
    layout: "right",
    problem:
      "Clinical paperwork — discharge summaries, lab printouts, referral notes — hides events in prose. Teams need those events as structured timelines, not as another unread PDF.",
    approach:
      "Build an end-to-end document intelligence toolkit: ingest PDFs, recover text, extract clinical events with NLP, expose the work through APIs, and persist results for later analytics and review.",
    technology:
      "Python and Flask form the service layer. OCR handles scanned pages. spaCy drives event and entity extraction. PostgreSQL stores documents and events. React presents a reviewable timeline. REST APIs connect every stage.",
    architecture: [
      "PDF intake and page rendering",
      "OCR with artefact cleanup",
      "spaCy pipelines for entities and events",
      "Event normalisation into a clinical timeline",
      "REST API surface for clients",
      "PostgreSQL persistence and audit",
    ],
    implementation:
      "Built during an internship at Big Prime. The service accepts PDFs, runs OCR, then a spaCy pipeline that labels events (admissions, procedures, findings, medications) and writes them as structured rows. A React console lets a reviewer inspect source sentences next to each extracted event.",
    challenges:
      "Medical language is dense, abbreviated and inconsistent. Scanned forms mix tables with free text. Extraction has to be useful without ever inventing a clinical fact.",
    solution:
      "Keep models conservative: extract with evidence spans, store confidence, and never overwrite source documents. Human review is part of the product, not an afterthought.",
    result:
      "A working medical document toolkit — from PDF to OCR to event timeline — that turns paperwork into something a system, and a clinician, can actually use.",
  },
  {
    slug: "multi-agent-travel-planner",
    number: "03",
    title: "Multi-Agent Travel Planner",
    category: "GENERATIVE AI · MULTI-AGENT SYSTEM",
    description:
      "A multi-agent travel planning application for automated itinerary generation and personalized travel recommendations.",
    technologies: [
      "Python",
      "FastAPI",
      "MongoDB",
      "Docker",
      "Generative AI",
    ],
    image: "/images/projects/travel-planner.jpg",
    github: "https://github.com/mowshii",
    layout: "full",
    problem:
      "Trip planning scatters across tabs — flights, stays, food, pace, budget. A single chatbot tends to ramble. Travellers need a coordinated plan, not a paragraph of suggestions.",
    approach:
      "Give each concern its own agent: research, itinerary, constraints and critique. A coordinator sequences them, and a FastAPI service returns a structured, editable plan rather than a wall of prose.",
    technology:
      "Python agents behind FastAPI. MongoDB stores trips, preferences and generated plans. Docker packages the stack. Generative models draft and revise; code owns structure, validation and persistence.",
    architecture: [
      "Preference intake and trip profile",
      "Research agent for places and pacing",
      "Itinerary agent for day-by-day structure",
      "Constraint agent for budget, season and pace",
      "Critic agent to check conflicts",
      "Persisted plan in MongoDB, served via FastAPI",
    ],
    implementation:
      "Agents share a typed trip state. The coordinator runs research, then itinerary, then a constraint pass, then a critic that flags clashes (too much transit, closed days, budget drift). Docker Compose brings API and database up as one piece.",
    challenges:
      "Agents can hallucinate opening hours or overpack a day. Without shared state they contradict each other. Latency also adds up if every agent waits on a full essay.",
    solution:
      "Short structured outputs, a single source of trip state, and a critic with veto power. The model writes; the schema and the critic decide what survives.",
    result:
      "A travel product that feels designed: a coordinated itinerary with recommendations that can be stored, revised and regenerated — not a one-shot chat transcript.",
  },
  {
    slug: "health-analysis-system",
    number: "04",
    title: "Health Analysis System",
    category: "MACHINE LEARNING · HEALTH TECHNOLOGY",
    description:
      "A predictive health analysis application that analyzes patient health data and generates yoga-based recovery recommendations.",
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],
    image: "/images/projects/health-analysis.jpg",
    github: "https://github.com/mowshii",
    layout: "right",
    problem:
      "People collect health numbers — vitals, habits, recovery notes — and still receive generic advice. The gap is a model that reads those signals and answers with a specific, gentle next step.",
    approach:
      "A machine-learning analysis layer on structured health data, presented in Streamlit, with yoga-based recovery recommendations grounded in the predicted state rather than a static pamphlet.",
    technology:
      "Pandas and NumPy prepare the dataset. Scikit-learn trains and evaluates models. Matplotlib makes the analysis visible. Streamlit is the application surface — charts, inputs and recommendations in one place.",
    architecture: [
      "Health feature intake and cleaning",
      "Exploratory analysis and visualisation",
      "Model training and validation",
      "Risk / recovery state prediction",
      "Yoga recommendation mapping",
      "Streamlit dashboard for interaction",
    ],
    implementation:
      "Tabular health features are cleaned, visualised and fed to a scikit-learn model. Predictions map to a curated set of yoga-based recovery suggestions. The Streamlit app lets someone enter values, see the analysis, and read a recommendation with the charts beside it.",
    challenges:
      "Health data is sensitive, often incomplete, and easy to overfit. Recommendations must stay supportive — never a diagnosis, never a promise.",
    solution:
      "Keep the model interpretable, show the charts that led to a prediction, and frame yoga suggestions as wellness support with clear limits. Missing values are handled explicitly rather than silently filled.",
    result:
      "A calm health dashboard: metrics, a prediction, and a recovery recommendation a person can actually follow — software that treats wellbeing as a design problem, not a gimmick.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
