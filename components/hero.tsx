import Image from "next/image";
import { ArrowUpRight } from "./icons";
import SocialRail from "./social-rail";
import TextType from './TextType';
import Shuffle from './Shuffle';


export default function Hero() {
  return (
    // overflow-x-clip on mobile, not overflow-hidden: the desktop layout needs
    // horizontal clipping for the oversized headline, but clipping vertically
    // traps the stacked mobile content and kills page scrolling on short
    // viewports. Desktop is absolutely positioned and never overflows, so it
    // keeps the original overflow-hidden.
    <section className="relative flex min-h-svh flex-col items-center gap-10 overflow-x-clip px-5 pt-28 pb-14 sm:pt-32 lg:block lg:min-h-screen lg:gap-0 lg:overflow-hidden lg:p-0">
      {/* Big display name */}
      <h1 className="animate-rise pointer-events-none z-10 w-full text-center leading-[0.82] font-semibold tracking-[-0.045em] select-none lg:absolute lg:top-[17%] lg:left-1/2 lg:-translate-x-1/2 lg:whitespace-nowrap">
        <span className="block text-[19vw] lg:inline lg:text-[14.2vw]">
          <span className="text-hollow">DYMAS</span>{" "}
          <span className="text-ink">ALFIN</span>
        </span>
      </h1>

      {/* Left — intro copy */}
      <div
        className="animate-rise z-20 max-w-[25rem] text-center  lg:absolute lg:top-auto lg:bottom-[20%] lg:left-14 lg:max-w-[25rem] lg:text-left xl:left-20 xl:max-w-[25rem]"
        style={{ animationDelay: "220ms" }}
      >
        <Shuffle
          className="text-3xl font-pixel  cursor-target font-semibold tracking-tight sm:text-[30px]"
          textAlign="start"
          text="Full-Stack Developer"
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
        
        <p className="mt-2.5 text-[13px] cursor-target leading-relaxed text-subtle sm:text-sm">
          Designing digital products that are clear, usable, and conversion
          focused.
        </p>
        <a
          href="#contact"
          className="group cursor-target mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium tracking-tight text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          Let&rsquo;s collaborate
          <span className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight />
          </span>
        </a>
      </div>

      {/* Center — portrait, layered above the headline */}
      <div className="animate-fade z-[15] flex w-full justify-center lg:absolute lg:inset-x-0 lg:bottom-0">
        <Image
          src="/portrait.png"
          alt="Portrait of Dymas Alfin"
          width={1078}
          height={1012}
          priority
          sizes="(max-width: 1024px) 70vw, 52vw"
          className="h-auto  w-[70vw] max-w-[340px] object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)] lg:max-h-[72vh] lg:w-[52vw] lg:max-w-[640px] lg:[mask-image:none]"
        />
      </div>

      {/* Right — social links */}
      <div className="z-20 lg:absolute lg:right-14 lg:bottom-[9%] xl:right-20">
        <SocialRail />
      </div>
    </section>
  );
}