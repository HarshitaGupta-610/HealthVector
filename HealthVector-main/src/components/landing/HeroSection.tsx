import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Radial glow behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(255,106,0,0.3) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Animated arrow */}
        <motion.div
          className="mx-auto mb-8 w-16 h-16"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <defs>
              <linearGradient id="arrow-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(153, 100%, 50%)" />
                <stop offset="100%" stopColor="hsl(189, 100%, 50%)" />
              </linearGradient>
            </defs>
            <path d="M32 56 L32 12 M18 24 L32 8 L46 24" stroke="url(#arrow-grad)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient-primary">Predict Disease</span>
          <br />
          <span className="text-foreground">Before It Begins.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          HealthVector detects invisible health drift across your body before symptoms appear.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button onClick={() => navigate("/onboarding")} className="btn-glow-primary text-lg">
            Start Monitoring
          </button>
          <button onClick={() => navigate("/dashboard")} className="btn-glow-secondary text-lg">
            Explore Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
