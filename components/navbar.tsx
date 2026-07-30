"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./icons";

const links = [
  { label: "Work", meta: "[40]", href: "/work" },
  { label: "Main", meta: "", href: "/" },
  { label: "About Me", meta: "", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the drawer is open, and restore whatever the
  // original value was (rather than assuming it was "").
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // If the viewport grows to desktop while the drawer is open, close it so we
  // don't leave a hidden drawer holding the scroll lock.
  useEffect(() => {
    if (!open || !window.matchMedia) return;
    const query = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [open]);

  return (
    <header className="animate-fade absolute inset-x-0 top-0 z-30">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-7 lg:px-12"
      >
        {/* Left — availability pill */}
        <a
          href="#contact"
          className="group cursor-target inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-[11px] font-medium tracking-tight text-ink shadow-[0_2px_14px_rgba(13,13,13,0.09)] ring-1 ring-black/5 transition hover:shadow-[0_4px_20px_rgba(13,13,13,0.14)] sm:px-4 sm:text-xs"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="whitespace-nowrap">Available for New Project</span>
        </a>

        {/* Center — nav links (desktop) */}
        <ul className="hidden items-center gap-2 md:flex lg:gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group cursor-target relative inline-flex items-baseline gap-1.5 rounded-full px-3 py-2 text-[15px] font-medium tracking-tight text-ink transition-colors  lg:px-4"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-[width] duration-300 ease-out group-hover:w-full" />
                </span>
                {link.meta ? (
                  <span className="text-[10px] font-normal text-subtle">
                    {link.meta}
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — CTA (desktop) */}
        <a
          href="#contact"
          className="group cursor-target hidden shrink-0 items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium tracking-tight text-white transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex sm:px-5 sm:py-3 sm:text-sm"
        >
          Let&rsquo;s Talk
          <span className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight />
          </span>
        </a>

        {/* Right — hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="cursor-target inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-[0_2px_14px_rgba(13,13,13,0.09)] ring-1 ring-black/5 transition hover:shadow-[0_4px_20px_rgba(13,13,13,0.14)] md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <span aria-hidden className="flex w-4 flex-col gap-[3px]">
            <span className="h-px w-full bg-ink" />
            <span className="h-px w-full bg-ink" />
            <span className="h-px w-full bg-ink" />
          </span>
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-ink/20 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        // Kept mounted so the slide transition can run, but pulled out of the
        // tab order / a11y tree while closed (React 19 supports `inert`).
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(20rem,82vw)] flex-col bg-paper shadow-[0_0_40px_rgba(13,13,13,0.18)] transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="text-[11px] font-medium tracking-[0.18em] text-subtle uppercase">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink ring-1 ring-black/10 transition hover:bg-black/[0.04]"
          >
            <span className="sr-only">Close menu</span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="h-4 w-4"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-1 px-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-2 rounded-2xl px-4 py-3.5 text-lg font-medium tracking-tight text-ink transition-colors hover:bg-black/[0.04]"
              >
                {link.label}
                {link.meta ? (
                  <span className="text-[11px] font-normal text-subtle">
                    {link.meta}
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto px-6 pt-6 pb-8">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-medium tracking-tight text-white"
          >
            Let&rsquo;s Talk
            <span className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}