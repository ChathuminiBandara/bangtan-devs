import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CommunitySection from "@/components/CommunitySection";
import JoinSection from "@/components/JoinSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <CommunitySection />
      <JoinSection />
    </div>
  );
}
