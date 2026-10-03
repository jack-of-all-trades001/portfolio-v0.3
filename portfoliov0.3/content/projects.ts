// EDIT THIS FILE to add / update the three built projects. Ideas that aren't built go in content/concepts.ts.
// "PLACEHOLDER" URLs are hidden. Statuses for FOMS are my assumption: confirm.
export type Status = "Completed" | "In Progress" | "Exploring" | "Concept";
export type PState = "Implemented" | "Currently building" | "Planned";
export type Section = { title: string; state?: PState; body?: string; diagram?: string; image?: string };
export type Project = {
  title: string; slug: string; tier: "featured" | "selected" | "other"; label: string;
  shortDescription: string; longDescription: string; status: Status;
  implementationStage: { implemented: string[]; building: string[]; exploring: string[] }; // exploring = "Next"
  technologies: string[]; topics?: string[]; problem: string; approach: string;
  whatILearned: string[]; githubUrl: string; liveUrl: string; screenshots: { src: string; alt: string }[];
  flow?: string[]; nodes?: { label: string; state: "implemented" | "building" | "planned" }[];
  caseStudy?: Section[];
};
const P = "PLACEHOLDER";
export const projects: Project[] = [
  {
    title: "Digital Wallet", slug: "wallet", tier: "featured", label: "Currently building",
    shortDescription: "A Spring Boot wallet backend I'm pushing from a basic application toward production-minded financial software.",
    longDescription: "The wallet is where I practice authentication, data integrity and failure handling on a system where correctness matters.",
    status: "In Progress",
    nodes: [{ label: "Authentication", state: "building" }, { label: "Domain model", state: "building" }, { label: "PostgreSQL", state: "implemented" }, { label: "Transactions", state: "planned" }, { label: "Failure handling", state: "planned" }],
    implementationStage: {
      implemented: ["User registration", "Login", "BCrypt password hashing", "Username / account identity rules", "Request validation", "PostgreSQL persistence (Neon)"],
      building: ["JWT-based authentication"],
      exploring: ["Wallet / account modeling and database relationships", "Transactions and data integrity", "Idempotency", "Failure scenarios and exception handling"],
    },
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Neon", "REST", "BCrypt"],
    problem: "", approach: "", whatILearned: [], githubUrl: P, liveUrl: P, screenshots: [],
    caseStudy: [
      { title: "Problem", body: "A wallet looks simple until requests race, retry or fail halfway. I'm building a wallet backend to work out what the system has to guarantee: who is calling, what they may do, and that stored data stays correct." },
      { title: "Architecture", state: "Implemented", body: "A Spring Boot REST API persisting to PostgreSQL, hosted on Neon.", diagram: "Architecture diagram" },
      { title: "Database", state: "Currently building", body: "Users and account identity are persisted in PostgreSQL. Wallet/account and transaction tables come next.", diagram: "Database diagram" },
      { title: "Registration and login", state: "Implemented", body: "Registration validates input and applies username/account identity rules. Passwords are hashed with BCrypt before they are stored. Login verifies the credentials." },
      { title: "Authentication", state: "Currently building", body: "BCrypt hashing is done. JWT-based authentication is being added so later requests don't resend credentials." },
      { title: "Validation and failure handling", state: "Planned", body: "Request validation is implemented. Consistent error responses, transactions, idempotency and failure scenarios are the next work. None of that is implemented yet." },
      { title: "Testing", state: "Currently building", body: "Manual API testing with Postman. Automated API tests and JMeter are planned." },
    ],
  },
  {
    title: "JavaArch", slug: "javaarch", tier: "selected", label: "Built to track my learning",
    shortDescription: "A Java architecture learning platform I built to track and structure my own backend/Java learning. A personal project, not a product.",
    longDescription: "Built to learn by building. It holds structured modules and exercises on Java fundamentals, object-oriented programming, references, collections, immutability, defensive copying and common bugs. Each exercise reproduces a bug, explains the mechanism, then fixes it.",
    status: "In Progress",
    flow: ["Code", "Bug", "Why?", "Understand the language behavior", "Fix"],
    implementationStage: { implemented: [], building: [], exploring: [] },
    topics: ["References and aliasing", "Defensive copying", "equals / hashCode", "Mutable HashSet keys", "Immutability", "NullPointerException"],
    technologies: ["Java"],
    problem: "I wanted a structured place to track my Java and backend learning, built around real bugs rather than only theory.",
    approach: "Reproduce the bug, explain the mechanism, fix it, and write down the rule.",
    whatILearned: ["Mutating an object used as a HashSet key can make it unfindable."],
    githubUrl: P, liveUrl: P, screenshots: [],
  },
  {
    title: "Front Office Management System", slug: "foms", tier: "other", label: "Starter Spring Boot project",
    shortDescription: "My early project for learning Spring Boot, CRUD APIs, database interaction and basic backend application structure.",
    longDescription: "A starter project. It is not production-grade, and it is here because it is where my Spring Boot foundation started.",
    status: "Completed", implementationStage: { implemented: [], building: [], exploring: [] },
    technologies: ["Spring Boot", "MySQL", "CRUD", "REST APIs", "Basic frontend"],
    problem: "", approach: "", whatILearned: [], githubUrl: P, liveUrl: P, screenshots: [],
  },
];
