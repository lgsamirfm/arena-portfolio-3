import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import TargetCursor from "@/components/TargetCursor";


export default function Home() {
  return (
    <main className="relative min-h-svh bg-paper">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
  hoverDuration={0.2}
  cursorColor="#000"
  cursorColorOnTarget="#000"
/>
      <Navbar />
      <Hero />
    </main>
  );
}
