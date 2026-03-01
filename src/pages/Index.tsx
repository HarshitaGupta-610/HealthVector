import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import AMDSection from "@/components/landing/AMDSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => (
  <div className="relative min-h-screen">
    <ParticleBackground />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AMDSection />
      <CTASection />
    </main>
    <footer className="relative z-10 text-center py-8 text-muted-foreground text-sm border-t border-border">
      © 2026 HealthVector. AI Leading Your Wellness.
    </footer>
  </div>
);

export default Index;
