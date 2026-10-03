// EDIT THIS FILE: evidence from the Digital Wallet. Only add what exists in the code.
// Add a "Git" group (feature branches, pull requests) and Postman test results once you can show them.
export type PState = "Implemented" | "Currently building" | "Planned";
export const proof: { group: string; items: { t: string; s: PState }[] }[] = [
  { group: "Authentication", items: [{ t: "Registration", s: "Implemented" }, { t: "Login", s: "Implemented" }, { t: "BCrypt password hashing", s: "Implemented" }, { t: "JWT", s: "Currently building" }] },
  { group: "Database", items: [{ t: "PostgreSQL (Neon) persistence", s: "Implemented" }, { t: "Entity relationships", s: "Planned" }] },
  { group: "API", items: [{ t: "REST endpoints", s: "Implemented" }, { t: "Request validation", s: "Implemented" }, { t: "Exception handling and error responses", s: "Planned" }] },
  { group: "Testing", items: [{ t: "API testing with Postman", s: "Currently building" }, { t: "Automated API tests, JMeter", s: "Planned" }] },
];
