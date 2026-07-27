import { ArrowUpRight } from "./icons";

const links = [
  { label: "Work", meta: "[40]", href: "#work" },
  { label: "Service", meta: "[4]", href: "#service" },
  { label: "Experience", meta: "[9y+]", href: "#experience" },
  { label: "Contact", meta: "", href: "#contact" },
];

export default function Navbar() {
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

        {/* Center — nav links */}
        <ul className="hidden items-center gap-5 md:flex lg:gap-10">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group cursor-target relative inline-flex items-baseline gap-1 text-[15px] font-medium tracking-tight text-ink"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-[width] duration-300 ease-out group-hover:w-full" />
                </span>
                {link.meta ? (
                  <span className="text-[10px] font-normal text-muted">
                    {link.meta}
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — CTA */}
        <a
          href="#contact"
          className="group cursor-target inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium tracking-tight text-white transition-transform duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-sm"
        >
          Let&rsquo;s Talk
          <span className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight />
          </span>
        </a>
      </nav>
    </header>
  );
}
