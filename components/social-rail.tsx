import { Behance, Dribbble, Instagram, LinkedIn } from "./icons";

const socials = [
  { label: "Dribbble", Icon: Dribbble, href: "https://dribbble.com" },
  { label: "Instagram", Icon: Instagram, href: "https://instagram.com" },
  { label: "LinkedIn", Icon: LinkedIn, href: "https://linkedin.com" },
  { label: "Behance", Icon: Behance, href: "https://behance.net" },
];

export default function SocialRail() {
  return (
    <ul className="flex flex-row font-pixel flex-wrap items-center justify-center gap-2.5 lg:flex-col lg:items-end">
      {socials.map(({ label, Icon, href }, i) => (
        <li
          key={label}
          className="animate-rise cursor-target" 
          style={{ animationDelay: `${560 + i * 90}ms` }}
        >
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white/85 px-3.5 py-2.5 text-[13px] font-medium tracking-tight text-ink shadow-[0_2px_14px_rgba(13,13,13,0.08)] ring-1 ring-black/5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white lg:w-[132px]"
          >
            <span className="h-4 w-4 shrink-0">
              <Icon />
            </span>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
