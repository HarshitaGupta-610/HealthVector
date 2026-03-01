import { ScrollReveal } from "../ScrollReveal";

const steps = [
  { title: "Data Sources", desc: "Wearables, labs, lifestyle" },
  { title: "AI Drift Engine", desc: "Pattern detection" },
  { title: "Risk Vector Modeling", desc: "Cross-system analysis" },
  { title: "Prediction", desc: "Early warning signals" },
  { title: "Prevention", desc: "Personalized action plans" },
];

const HowItWorksSection = () => (
  <section className="py-24 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          How It <span className="text-gradient-health">Works</span>
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Connector line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px" style={{
          background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.4), rgba(255,106,0,0.4), rgba(0,255,136,0.4), transparent)"
        }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i}>
              <div className="glass-panel p-6 text-center relative group">
                <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center font-display font-bold text-sm"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,106,0,${0.2 + i * 0.1}), rgba(0,229,255,${0.1 + i * 0.1}))`,
                    border: "1px solid rgba(255,106,0,0.3)",
                  }}>
                  {i + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{step.title}</h3>
                <p className="text-muted-foreground text-xs">{step.desc}</p>
                {i < 4 && (
                  <div className="lg:hidden text-neon-cyan text-xl mt-3">↓</div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
