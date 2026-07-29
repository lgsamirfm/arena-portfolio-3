import Image from "next/image";
import { ArrowUpRight } from "./icons";
import SplitText from "./SplitText";
import Shuffle from "./Shuffle";
import ShinyText from './ShinyText';



const projects = [
  {
    title: "Brand Landing Page",
    category: "Website",
    image: "/projects/brand-landing.svg",
    imageAlt: "Screenshot preview of a brand landing page project",
    href: "https://example.com",
    caption:
      "A clean marketing website focused on bold visuals, clear messaging, and smooth conversion paths.",
  },
  {
    title: "Analytics Dashboard",
    category: "Web App",
    image: "/projects/analytics-dashboard.svg",
    imageAlt: "Screenshot preview of an analytics dashboard project",
    href: "https://example.com",
    caption:
      "A responsive dashboard experience with simple data views, quick actions, and polished interaction states.",
  },
  {
    title: "Mobile Booking App",
    category: "App Design",
    image: "/projects/mobile-booking.svg",
    imageAlt: "Screenshot preview of a mobile booking app project",
    href: "https://example.com",
    caption:
      "A streamlined booking flow designed to help users compare options and complete tasks faster.",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-paper px-5 pt-32 pb-20 sm:px-8 sm:pt-36 sm:pb-24 lg:px-12 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />
      <div className="mx-auto max-w-[1400px]">
        <div className="animate-rise flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
          <Shuffle
            text="Selected Work"
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
            className="font-pixel  text-sm font-semibold tracking-[0.2em] text-muted uppercase"
          />
            
            
            <h2 className="mt-3 cursor-target max-w-3xl text-[14vw] leading-[0.85] font-semibold tracking-[-0.055em] text-ink sm:text-7xl lg:text-8xl">
              
              Project <span className="text-hollow">Gallery</span>
            </h2>
          </div>
          <SplitText
              text="A small collection of past website and app projects with preview
            shots, captions, and links to visit the live work."
              className="max-w-sm text-center text-sm cursor-target leading-relaxed text-muted"
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
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group animate-rise  overflow-hidden rounded-[2rem] bg-white shadow-[0_2px_22px_rgba(13,13,13,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_34px_rgba(13,13,13,0.13)]"
              style={{ animationDelay: `${160 + index * 110}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex min-h-[15rem] flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-ink px-3 py-1.5 text-[11px] font-medium tracking-tight text-white">
                    {project.category}
                  </span>
                  <span className="font-pixel text-xs text-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
                <ShinyText
                  text={project.title}
                  speed={2}
                  delay={0}
                  color="#0d0d0d"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
                  
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.caption}
                </p>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/link mt-3 cursor-target inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 px-4 py-2.5 text-sm font-medium tracking-tight text-ink transition duration-300 hover:bg-ink hover:text-white"
                >
                  Visit website
                  <span className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                    <ArrowUpRight />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}