import { ScrollReveal } from "../ScrollReveal";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 opacity-30" style={{
        background: "radial-gradient(ellipse at center, rgba(255,106,0,0.15) 0%, transparent 60%)"
      }} />

      <ScrollReveal className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Start Tracking Your <span className="text-gradient-health">Health Vector</span> Today.
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Don't wait for symptoms. Let AI detect what you can't feel.
        </p>
        <button onClick={() => navigate("/onboarding")} className="btn-glow-primary text-lg">
          Begin Your Health Journey
        </button>
      </ScrollReveal>
    </section>
  );
};

export default CTASection;
