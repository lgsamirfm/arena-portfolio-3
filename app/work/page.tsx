import Navbar from "@/components/navbar";
import TargetCursor from "@/components/TargetCursor";
import Work from "@/components/work";

export default function WorkPage() {
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
      <Work />
    </main>
  );
}