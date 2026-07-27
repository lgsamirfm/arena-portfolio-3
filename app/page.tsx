import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-svh bg-paper">
      <Navbar />
      <Hero />
    </main>
  );
}
