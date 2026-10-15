import { notFound } from "next/navigation";
import KeystaticApp from "./keystatic";

/**
 * The editor. Without GitHub storage it can only write to this computer's
 * disk, so on the live site it stays hidden until GitHub is connected.
 */
export default function KeystaticLayout() {
  if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO) {
    notFound();
  }
  return <KeystaticApp />;
}
