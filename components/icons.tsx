type IconProps = {
  className?: string;
};

const base = "h-full w-full";

export function ArrowUpRight({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${base} ${className}`}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function Dribbble({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${base} ${className}`}
    >
      <circle cx="12" cy="12" r="9.25" />
      <path d="M18.4 5.8C15 9.5 10.3 10.7 3.2 11.1" />
      <path d="M20.9 13.6c-6-1.3-11 .9-14.9 5.8" />
      <path d="M8.7 3.4c4 5.5 5.5 8.6 7.3 16.2" />
    </svg>
  );
}

export function Instagram({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${base} ${className}`}
    >
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.25" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedIn({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${base} ${className}`}
    >
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="4" />
      <path d="M7.2 10.6v6.2" />
      <circle cx="7.2" cy="7.5" r="0.95" fill="currentColor" stroke="none" />
      <path d="M11.2 16.8v-3.4a2.6 2.6 0 0 1 5.2 0v3.4" />
      <path d="M11.2 13.4v-2.8" />
    </svg>
  );
}

export function Behance({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`${base} ${className}`}
    >
      <path d="M2.6 6.2h5.1c1.95 0 3.05.95 3.05 2.42 0 1.02-.5 1.74-1.4 2.16 1.22.36 1.94 1.28 1.94 2.6 0 1.86-1.36 3.02-3.5 3.02H2.6V6.2Zm2.14 4.03h2.6c.83 0 1.32-.4 1.32-1.05 0-.66-.49-1.06-1.32-1.06h-2.6v2.11Zm0 4.36h2.9c.93 0 1.47-.44 1.47-1.16 0-.73-.54-1.17-1.47-1.17h-2.9v2.33Z" />
      <path d="M14.1 7.15h5.5v1.5h-5.5z" />
      <path d="M16.85 9.9c2.12 0 3.55 1.45 3.55 3.6v.5h-5.15c.17 1 .83 1.6 1.75 1.6.7 0 1.2-.27 1.44-.78h1.87c-.38 1.5-1.68 2.4-3.31 2.4-2.2 0-3.68-1.47-3.68-3.66 0-2.17 1.44-3.66 3.53-3.66Zm-1.6 2.9h3.24c-.16-.9-.77-1.44-1.62-1.44s-1.46.54-1.62 1.44Z" />
    </svg>
  );
}

export function Discord({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${base} ${className}`}
    >
      <path d="M19.2 5.9a15.6 15.6 0 0 0-4-1.2l-.5 1a14.2 14.2 0 0 0-5.4 0l-.5-1A15.6 15.6 0 0 0 4.8 5.9 15.9 15.9 0 0 0 2.4 17a16.3 16.3 0 0 0 5.2 2.6l1-1.7a10 10 0 0 1-1.7-.8l.4-.3a11.6 11.6 0 0 0 10.3 0l.4.3c-.6.3-1.1.6-1.7.8l1 1.7A16.3 16.3 0 0 0 21.6 17a15.9 15.9 0 0 0-2.4-11.1Z" />
      <circle cx="9" cy="12.5" r="1.05" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12.5" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Telegram({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${base} ${className}`}
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export function GitHub({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${base} ${className}`}
    >
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}
