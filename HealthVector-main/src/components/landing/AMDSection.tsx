import { ScrollReveal } from "../ScrollReveal";
import { motion } from "framer-motion";
import { Cpu, Zap, BarChart3, Activity } from "lucide-react";

const features = [
  { icon: Cpu, title: "AMD Ryzen AI Optimized", desc: "AI Drift Engine runs natively on AMD neural processing units." },
  { icon: Zap, title: "GPU-Accelerated Modeling", desc: "AMD Instinct accelerates parallel disease vector calculations." },
  { icon: Activity, title: "Edge Inference", desc: "Sub-millisecond latency with on-device health processing." },
  { icon: BarChart3, title: "Parallel Cross-Disease", desc: "Simultaneous modeling across all 7 disease vectors." },
];

const AMDSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Powered by <span className="text-gradient-primary">AMD AI</span> Acceleration
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Real-time health drift modeling requires massive parallel computation. AMD hardware makes it possible.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {features.map((f, i) => (
          <ScrollReveal key={i}>
            <div className="glass-panel-hover p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 neon-border-cyan">
                <f.icon className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Animated chip visual */}
      <ScrollReveal className="flex justify-center">
        <motion.div
          className="glass-panel neon-border-orange px-8 py-4 inline-flex items-center gap-3"
          animate={{ boxShadow: ["0 0 20px rgba(255,106,0,0.2)", "0 0 40px rgba(255,106,0,0.4)", "0 0 20px rgba(255,106,0,0.2)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Cpu className="w-5 h-5 text-neon-orange" />
          <span className="font-mono text-sm text-neon-orange">Edge Mode Enabled</span>
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse-glow" />
        </motion.div>
      </ScrollReveal>
    </div>
  </section>
);

export default AMDSection;
