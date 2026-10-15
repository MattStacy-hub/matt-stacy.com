"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CONTACT_PAGE, FIELD_LIMITS, PROJECT_TYPES } from "@/data/contact";
import { CONTACT } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD =
  "block w-full border border-varnish/25 bg-canvas px-4 py-3.5 text-[17px] leading-normal transition-colors placeholder:text-varnish/45 hover:border-varnish/50 focus:border-varnish focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petroglyph";
const LABEL = "mb-2 block text-[15px] font-semibold";

/**
 * Name, email, project type and the message, as on the current site. Arriving
 * from a service page (?service=drone-cinematography) preselects that service.
 */
export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [projectType, setProjectType] = useState("");
  const sentRef = useRef<HTMLDivElement>(null);

  // The form collapses to a short note once sent: bring it into view, so the
  // confirmation isn't left above the screen on a phone.
  useEffect(() => {
    if (status !== "sent") return;
    sentRef.current?.focus({ preventScroll: true });
    sentRef.current?.scrollIntoView({ block: "center" });
  }, [status]);

  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("service");
    if (service && PROJECT_TYPES.some((type) => type.value === service)) {
      // Read after mount: the page is static, so the query string isn't known when it renders.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProjectType(service);
    }
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div ref={sentRef} tabIndex={-1} role="status" className="border-t-2 border-petroglyph pt-8 focus:outline-none">
        <p className="font-display mb-4 text-[clamp(30px,3.4vw,44px)] leading-[1.1]">
          {CONTACT_PAGE.sentHeading}
        </p>
        <p className="max-w-[46ch] text-[17px]">{CONTACT.replyTime}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={LABEL}>
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            maxLength={FIELD_LIMITS.name}
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={LABEL}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={FIELD_LIMITS.email}
            className={FIELD}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-type`} className={LABEL}>
          Project type
        </label>
        <div className="relative">
          <select
            id={`${id}-type`}
            name="projectType"
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
            className={`${FIELD} appearance-none pr-12 ${projectType ? "" : "text-varnish/55"}`}
          >
            <option value="">Select an option</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 size-2.5 -translate-y-3/4 rotate-45 border-r-2 border-b-2 border-varnish"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={LABEL}>
          {CONTACT_PAGE.messageLabel}
        </label>
        <p id={`${id}-message-hint`} className="-mt-1 mb-2 text-[14px] opacity-70">
          {CONTACT_PAGE.messageHint}
        </p>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={7}
          maxLength={FIELD_LIMITS.message}
          aria-describedby={`${id}-message-hint`}
          className={`${FIELD} resize-y`}
        />
      </div>

      {/* Hidden from people and screen readers; a bot that fills it is ignored. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="label group inline-flex cursor-pointer gap-3 bg-petroglyph px-6.5 py-4 text-white disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send inquiry"}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <p className="text-[14px] opacity-70">{CONTACT.replyTime}</p>
      </div>

      <p role="alert" className="text-[15px] text-petroglyph empty:hidden">
        {status === "error" && (
          <>
            That didn&apos;t send. Please try again, or email me at{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold underline">
              {CONTACT.email}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
