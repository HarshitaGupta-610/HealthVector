import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, HeartPulse, Watch, FileText, ClipboardList, ChevronRight, ChevronLeft } from "lucide-react";
import logo from "@/assets/healthvector-logo.png";

const steps = [
  { icon: User, title: "Basic Profile", desc: "Tell us about yourself" },
  { icon: HeartPulse, title: "Health History", desc: "Share your medical background" },
  { icon: Watch, title: "Connect Wearables", desc: "Link your health devices" },
  { icon: FileText, title: "Upload Labs", desc: "Add recent lab results" },
  { icon: ClipboardList, title: "Lifestyle", desc: "Daily habits questionnaire" },
];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(180deg, hsl(220,50%,8%) 0%, hsl(0,0%,0%) 100%)" }}>
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src={logo} alt="HealthVector" className="w-10 h-10 rounded-full" />
          <span className="font-display text-xl font-bold">Health<span className="text-gradient-primary">Vector</span></span>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {steps.map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-secondary">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #FF6A00, #FFB800)" }}
                initial={{ width: "0%" }}
                animate={{ width: i <= step ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="glass-panel p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              {(() => { const Icon = steps[step].icon; return <div className="w-10 h-10 rounded-lg neon-border-orange flex items-center justify-center"><Icon className="w-5 h-5 text-neon-orange" /></div>; })()}
              <div>
                <h2 className="font-display text-lg font-bold">{steps[step].title}</h2>
                <p className="text-sm text-muted-foreground">{steps[step].desc}</p>
              </div>
            </div>

            {/* Form fields per step */}
            <div className="space-y-4">
              {step === 0 && (
                <>
                  <input placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  <input placeholder="Age" type="number" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                  </select>
                </>
              )}
              {step === 1 && (
                <>
                  <textarea placeholder="Known conditions (e.g., diabetes, hypertension)" rows={3} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
                  <textarea placeholder="Current medications" rows={2} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
                  <textarea placeholder="Family health history" rows={2} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
                </>
              )}
              {step === 2 && (
                <div className="space-y-3">
                  {["Apple Watch", "Fitbit", "Oura Ring", "Garmin", "Whoop"].map((d) => (
                    <label key={d} className="flex items-center gap-3 p-3 rounded-lg bg-secondary border border-border cursor-pointer hover:border-primary/30 transition-colors">
                      <input type="checkbox" className="accent-primary" />
                      <span className="text-sm">{d}</span>
                    </label>
                  ))}
                </div>
              )}
              {step === 3 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full neon-border-cyan mx-auto mb-4 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-neon-cyan" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Upload blood work, metabolic panels, or other lab reports.</p>
                  <button className="btn-glow-secondary text-sm py-2 px-6">Choose Files</button>
                </div>
              )}
              {step === 4 && (
                <>
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Average sleep hours</option>
                    <option>Less than 5</option>
                    <option>5-6 hours</option>
                    <option>6-7 hours</option>
                    <option>7-8 hours</option>
                    <option>8+ hours</option>
                  </select>
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Exercise frequency</option>
                    <option>Sedentary</option>
                    <option>1-2x per week</option>
                    <option>3-4x per week</option>
                    <option>5+ per week</option>
                  </select>
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Stress level</option>
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>High</option>
                    <option>Very High</option>
                  </select>
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Diet type</option>
                    <option>Balanced</option>
                    <option>Vegetarian</option>
                    <option>Vegan</option>
                    <option>Keto</option>
                    <option>Mediterranean</option>
                    <option>No specific diet</option>
                  </select>
                </>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button onClick={handleNext} className="btn-glow-primary text-sm py-2 px-6 flex items-center gap-1">
                {step === steps.length - 1 ? "Launch Dashboard" : "Continue"} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Step {step + 1} of {steps.length}
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
