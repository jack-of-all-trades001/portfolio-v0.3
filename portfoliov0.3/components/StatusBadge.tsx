import type { Status } from "@/content/projects";
export default function StatusBadge({ status }: { status: Status }) {
  return <span className={`badge s-${status.replace(" ", "").toLowerCase()}`}><i aria-hidden />{status}</span>;
}
