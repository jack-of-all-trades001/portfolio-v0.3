// EDIT THIS FILE: ideas that are NOT built. Keep each entry short.
export type Concept = { title: string; status: "Concept" | "Exploring" | "Designing"; what: string; why: string; explores: string };
export const concepts: Concept[] = [
  { title: "Production Incident Training Platform", status: "Concept", what: "A practice platform for debugging realistic production incidents across L1/L2/L3 difficulty.", why: "Tutorials rarely teach how to debug a system that is failing.", explores: "Incident diagnosis, logs, databases, failure scenarios, production debugging." },
  { title: "Order & Payment Flow", status: "Exploring", what: "A study of how an order and its payment move through a system.", why: "Both sides must agree even when a step fails.", explores: "Consistency across steps, retries, partial failure." },
  { title: "Idempotency & Outbox", status: "Exploring", what: "Notes and experiments on making repeated requests and event publishing safe.", why: "Retries are normal; duplicated effects are not.", explores: "Idempotency keys, the outbox pattern, duplicate handling." },
];
