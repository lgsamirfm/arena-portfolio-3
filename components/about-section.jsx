import Image from "next/image";
import Shuffle from "./Shuffle";
import SplitText from "./SplitText";
import { ArrowUpRight, Discord, GitHub, Instagram, Telegram } from "./icons";

const stats = [
  { value: "9+", label: "Years Experience" },
  { value: "40+", label: "Projects Completed" },
  { value: "25+", label: "Happy Clients" },
  { value: "12+", label: "Technologies Used" },
];

const process = [
  {
    title: "Discover",
    description:
      "A deep dive into your goals, audience, and constraints to frame the problem before touching any pixels or code.",
  },
  {
    title: "Research",
    description:
      "Exploring references, user needs, and technical options to find the smartest direction for the product.",
  },
  {
    title: "Design",
    description:
      "Sketching, wireframing, and refining clean interfaces with a focus on hierarchy, spacing, and clarity.",
  },
  {
    title: "Develop",
    description:
      "Turning designs into fast, accessible, production-ready code with modern tooling and careful testing.",
  },
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    years: "2024 — Present",
  },
  {
    role: "Frontend Developer",
    company: "Agency Name",
    years: "2022 — 2024",
  },
  {
    role: "UI Developer",
    company: "Studio Name",
    years: "2021 — 2022",
  },
];

const achievements = [
  {
    title: "Awwwards Honorable Mention",
    year: "2025",
    description:
      "Recognized for a portfolio concept pairing bold typography with a minimal editorial layout.",
  },
  {
    title: "Top Rated Freelancer",
    year: "2024",
    description:
      "Earned top-rated status with a 100% success score across delivered web projects.",
  },
  {
    title: "Hackathon Grand Prize",
    year: "2023",
    description:
      "Won first place for designing and shipping a real-time collaboration tool in 48 hours.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    position: "Product Manager, Northwind",
    // Placeholder portrait — swap for the client's real photo when available.
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Working with him was effortless. He understood the product vision quickly and delivered an interface that felt polished from day one.",
  },
  {
    name: "Daniel Reyes",
    position: "Founder, Studio Nine",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Fast, reliable, and detail-obsessed. The new site loads instantly and our conversion rate jumped within weeks.",
  },
  {
    name: "Amelia Chen",
    position: "Creative Director, Axis Labs",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "A rare mix of engineering and design sensibility. Every interaction feels considered, and the codebase is a pleasure to maintain.",
  },
];

// Contact channels — swap in your real handles and profile URLs.
const contactChannels = [
  {
    label: "Discord",
    handle: "@yourdiscord",
    href: "https://discord.com/users/your-user-id",
    Icon: Discord,
  },
  {
    label: "Instagram",
    handle: "@yourinstagram",
    href: "https://instagram.com/yourinstagram",
    Icon: Instagram,
  },
  {
    label: "Telegram",
    handle: "@yourtelegram",
    href: "https://t.me/yourtelegram",
    Icon: Telegram,
  },
  {
    label: "GitHub",
    handle: "@yourgithub",
    href: "https://github.com/yourgithub",
    Icon: GitHub,
  },
];

export default function AboutSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-paper px-5 pt-32 pb-20 sm:px-8 sm:pt-36 sm:pb-24 lg:px-12 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />

      <div className="mx-auto max-w-[1400px]">
        {/* 1 — Section header */}
        <header className="animate-rise">
          <Shuffle
            text="Who I Am"
            className="font-pixel text-sm font-semibold tracking-[0.2em] text-muted uppercase"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover
            respectReducedMotion={true}
            loop={false}
            loopDelay={0}
          />

          <h1
            id="about-heading"
            className="mt-3 cursor-target text-[14vw] leading-[0.85] font-semibold tracking-[-0.055em] text-ink sm:text-8xl lg:text-[10rem] xl:text-[12rem]"
          >
            About <span className="text-hollow">Me</span>
          </h1>

          <div className="mt-10 flex items-baseline justify-between font-pixel text-xs tracking-[0.18em] text-muted uppercase sm:mt-14 sm:text-sm">
            <span>{currentYear}</span>
            <span>Present</span>
          </div>
          <div aria-hidden className="mt-4 h-px bg-ink/10" />
        </header>

        {/* 2 — Introduction */}
        <p
          className="animate-rise mx-auto mt-16 max-w-[46rem] text-center text-xl leading-relaxed text-ink sm:mt-20 sm:text-2xl lg:text-[2rem]"
          style={{ animationDelay: "160ms" }}
        >
          I&rsquo;m a passionate full-stack developer focused on creating fast,
          modern, and visually engaging web experiences. I enjoy transforming
          ideas into polished interfaces — obsessing over detail, usability,
          and performance from the first sketch to the final deploy.
        </p>

        {/* 3 — Portrait */}
        {/*
          Portrait placeholder: swap the src below for a dedicated photo when
          one is available. The existing project portrait is reused so the
          page never ships a broken image.
        */}
        <div
          className="animate-rise mx-auto mt-16 max-w-[38rem] overflow-hidden rounded-[2rem] bg-[#f5f5f5] ring-1 ring-black/5 lg:mt-20"
          style={{ animationDelay: "240ms" }}
        >
          <Image
            src="/portrait.png"
            alt="Portrait of Lgs Amirfm, full-stack developer"
            width={1078}
            height={1012}
            sizes="(max-width: 768px) 100vw, 608px"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>

        {/* 4 — Stats row */}
        <section aria-label="Key statistics" className="mt-20 sm:mt-24 lg:mt-28">
          <dl className="grid grid-cols-2 gap-x-5 gap-y-12 text-center md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-rise cursor-target"
                style={{ animationDelay: `${160 + index * 90}ms` }}
              >
                <dd className="text-5xl font-semibold tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl">
                  {stat.value}
                </dd>
                <dt className="mt-3 font-pixel text-[11px] font-medium tracking-[0.18em] text-muted uppercase sm:text-xs">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </section>

        {/* 5 — My Process */}
        <section
          aria-labelledby="process-heading"
          className="mt-24 sm:mt-28 lg:mt-36"
        >
          <div className="animate-rise flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Shuffle
                text="How I Work"
                className="font-pixel text-sm font-semibold tracking-[0.2em] text-muted uppercase"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
              />
              <h2
                id="process-heading"
                className="mt-3 cursor-target text-[11vw] leading-[0.85] font-semibold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl"
              >
                My <span className="text-hollow">Process</span>
              </h2>
            </div>
            <SplitText
              text="A simple, transparent workflow that keeps every project focused — from the first conversation to the final deploy."
              className="max-w-sm cursor-target text-center text-sm leading-relaxed text-muted"
              delay={200}
              duration={1.25}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          <ol className="mt-12 lg:mt-16">
            {process.map((step, index) => (
              <li
                key={step.title}
                className="group animate-rise cursor-target grid gap-3 border-t border-ink/10 py-8 sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.6fr)] sm:items-baseline sm:gap-8 lg:py-12"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="font-pixel text-sm text-muted transition-colors duration-300 group-hover:text-ink">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* 6 — Experience */}
        <section
          aria-labelledby="experience-heading"
          className="mt-24 sm:mt-28 lg:mt-36"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
            <div className="animate-rise">
              <Shuffle
                text="Career"
                className="font-pixel text-sm font-semibold tracking-[0.2em] text-muted uppercase"
                textAlign="start"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
              />
              <h2
                id="experience-heading"
                className="mt-3 cursor-target text-[11vw] leading-[0.85] font-semibold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl"
              >
                Experience
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
                A timeline of the teams and clients I&rsquo;ve worked with, and
                the roles I&rsquo;ve grown through along the way.
              </p>
            </div>

            <ol>
              {experience.map((job, index) => (
                <li
                  key={job.role}
                  className="group animate-rise cursor-target grid gap-1.5 border-t border-ink/10 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-x-8 lg:py-8"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <h3 className="text-xl font-semibold tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                    {job.role}
                  </h3>
                  <span className="font-pixel text-xs text-muted sm:text-sm">
                    {job.years}
                  </span>
                  <p className="text-sm text-muted">{job.company}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 7 — Achievements */}
        <section
          aria-labelledby="achievements-heading"
          className="mt-24 sm:mt-28 lg:mt-36"
        >
          <div className="animate-rise flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Shuffle
                text="Recognition"
                className="font-pixel text-sm font-semibold tracking-[0.2em] text-muted uppercase"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
              />
              <h2
                id="achievements-heading"
                className="mt-3 cursor-target text-[11vw] leading-[0.85] font-semibold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl"
              >
                Achievements
              </h2>
            </div>
            <SplitText
              text="A few milestones and moments of recognition collected along the journey so far."
              className="max-w-sm cursor-target text-center text-sm leading-relaxed text-muted"
              delay={200}
              duration={1.25}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          <ol className="mt-12 lg:mt-16">
            {achievements.map((achievement, index) => (
              <li
                key={achievement.title}
                className="group animate-rise cursor-target grid gap-1.5 border-t border-ink/10 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-x-8 lg:py-8"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="text-xl font-semibold tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                  {achievement.title}
                </h3>
                <span className="font-pixel text-xs text-muted sm:text-sm">
                  {achievement.year}
                </span>
                <p className="max-w-xl text-sm leading-relaxed text-muted">
                  {achievement.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* 8 — Testimonials */}
        <section
          aria-labelledby="testimonials-heading"
          className="mt-24 sm:mt-28 lg:mt-36"
        >
          <div className="animate-rise flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Shuffle
                text="Kind Words"
                className="font-pixel text-sm font-semibold tracking-[0.2em] text-muted uppercase"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
              />
              <h2
                id="testimonials-heading"
                className="mt-3 cursor-target text-[11vw] leading-[0.85] font-semibold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl"
              >
                Testimonials
              </h2>
            </div>
            <SplitText
              text="What clients and collaborators say about working together on shipped products."
              className="max-w-sm cursor-target text-center text-sm leading-relaxed text-muted"
              delay={200}
              duration={1.25}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                className="group animate-rise cursor-target flex flex-col rounded-[2rem] bg-white p-6 shadow-[0_2px_22px_rgba(13,13,13,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_34px_rgba(13,13,13,0.13)] sm:p-7"
                style={{ animationDelay: `${160 + index * 110}ms` }}
              >
                <figcaption className="flex items-center gap-4">
                  {/*
                    Portrait placeholder: swap this URL for the client's real
                    photo when one is available.
                  */}
                  <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
                    <Image
                      src={testimonial.photo}
                      alt=""
                      width={48}
                      height={48}
                      sizes="48px"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <div>
                    <div className="text-sm font-semibold tracking-tight text-ink">
                      {testimonial.name}
                    </div>
                    <div className="mt-0.5 text-xs text-muted">
                      {testimonial.position}
                    </div>
                  </div>
                </figcaption>

                <blockquote className="mt-6 text-sm leading-relaxed text-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>
        </section>

        {/* 9 — Contact */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="mt-24 sm:mt-28 lg:mt-36"
        >
          <div className="animate-rise flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Shuffle
                text="Contact"
                className="font-pixel text-sm font-semibold tracking-[0.2em] text-muted uppercase"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
              />
              <h2
                id="contact-heading"
                className="mt-3 cursor-target text-[11vw] leading-[0.85] font-semibold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl"
              >
                Let&rsquo;s <span className="text-hollow">Talk</span>
              </h2>
            </div>
            <SplitText
              text="The fastest way to reach me is a direct message — Discord, Instagram, Telegram, or GitHub."
              className="max-w-sm cursor-target text-center text-sm leading-relaxed text-muted"
              delay={200}
              duration={1.25}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
            {contactChannels.map((channel, index) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group animate-rise cursor-target flex items-center gap-4 rounded-[2rem] bg-white p-6 shadow-[0_2px_22px_rgba(13,13,13,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_34px_rgba(13,13,13,0.13)]"
                style={{ animationDelay: `${160 + index * 90}ms` }}
              >
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink p-3 text-white transition-colors duration-300 group-hover:bg-signal"
                >
                  <channel.Icon />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold tracking-tight text-ink">
                    {channel.label}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted">
                    {channel.handle}
                  </span>
                </span>
                <span className="ml-auto h-3.5 w-3.5 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}