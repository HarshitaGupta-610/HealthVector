import { useState } from "react";
import { ScrollReveal } from "../ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const diseases = [
  { name: "NAFLD", label: "Liver Drift", desc: "Non-alcoholic fatty liver disease detected through metabolic pattern shifts before enzyme elevations appear.", color: "neon-orange" },
  { name: "Sleep Apnea", label: "Sleep Risk", desc: "Obstructive and central sleep apnea patterns identified via HRV and SpO2 micro-variations.", color: "neon-cyan" },
  { name: "Kidney Risk", label: "Early Kidney", desc: "Pre-CKD filtration decline detected through creatinine trajectory and fluid balance modeling.", color: "neon-green" },
  { name: "PCOS", label: "Hormonal Imbalance", desc: "Polycystic ovary syndrome and hormonal drift identified through multi-system correlation analysis.", color: "neon-orange" },
  { name: "POTS", label: "Autonomic Dysfunction", desc: "Postural orthostatic tachycardia patterns identified through continuous autonomic monitoring.", color: "neon-cyan" },
  { name: "CRP", label: "Chronic Inflammation", desc: "Systemic inflammatory drift detected before clinical CRP elevation through immune marker modeling.", color: "neon-green" },
  { name: "Cognitive", label: "Cognitive Decline", desc: "Early neurological drift patterns identified through reaction time and cognitive load analysis.", color: "neon-orange" },
];

const FeaturesSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            What HealthVector <span className="text-gradient-data">Detects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Seven critical disease vectors monitored continuously through AI drift analysis.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {diseases.map((d, i) => (
            <ScrollReveal key={i}>
              <motion.div
                className={`glass-panel-hover p-6 cursor-pointer`}
                onClick={() => setExpanded(expanded === i ? null : i)}
                layout
              >
                <div className={`text-${d.color} font-mono text-xs uppercase tracking-widest mb-2`}>{d.name}</div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{d.label}</h3>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.p
                      className="text-muted-foreground text-sm"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {d.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
