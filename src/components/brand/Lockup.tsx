import Link from "next/link";

export function Mark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`brand-mark ${className}`} />;
}

/**
 * Primary horizontal lockup: mark, wordmark, descriptor. The mark's color is
 * set by the caller, since it changes with the ground it sits on.
 */
export function Lockup({ markClassName = "" }: { markClassName?: string }) {
  return (
    <Link href="/" aria-label="Matt Stacy, home" className="flex items-center gap-3.5">
      <Mark className={`h-9 transition-colors duration-300 ${markClassName}`} />
      <span className="leading-none">
        <span className="block text-base font-bold tracking-[0.18em]">MATT STACY</span>
        <span className="mt-1.5 block text-[9px] font-medium tracking-[0.32em] opacity-85">
          PHOTOGRAPHY &amp; FILM
        </span>
      </span>
    </Link>
  );
}
