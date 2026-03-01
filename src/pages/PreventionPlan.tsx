import { useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Moon, Dumbbell, Brain, Stethoscope, CheckCircle2, Circle } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const sections = [
  {
    icon: Utensils, title: "Diet Optimization", color: "#00FF88", progress: 65,
    tasks: [
      { text: "Add omega-3 rich fish 2x/week", done: true },
      { text: "Replace refined grains with whole grains", done: true },
      { text: "Increase leafy greens to 2 servings/day", done: false },
      { text: "Reduce processed sugar intake below 25g/day", done: false },
      { text: "Add fermented foods for gut health", done: false },
    ],
  },
  {
    icon: Moon, title: "Sleep Recovery Protocol", color: "#00E5FF", progress: 40,
    tasks: [
      { text: "Set consistent sleep/wake time (10:30pm/6:30am)", done: true },
      { text: "No screens 1 hour before bed", done: false },
      { text: "Keep bedroom at 65-68°F", done: true },
      { text: "No caffeine after 2pm", done: false },
      { text: "Add magnesium glycinate supplementation", done: false },
    ],
  },
  {
    icon: Dumbbell, title: "Exercise Routine", color: "#FF6A00", progress: 55,
    tasks: [
      { text: "30 min moderate cardio 4x/week", done: true },
      { text: "Strength training 2x/week", done: true },
      { text: "Daily 10-min walk after meals", done: false },
      { text: "Weekly flexibility/mobility session", done: false },
    ],
  },
  {
    icon: Brain, title: "Stress Regulation", color: "#00E5FF", progress: 30,
    tasks: [
      { text: "10-min daily meditation", done: true },
      { text: "Journaling 3x/week", done: false },
      { text: "Deep breathing during stress triggers", done: false },
      { text: "Weekly nature exposure (60+ min)", done: false },
    ],
  },
  {
    icon: Stethoscope, title: "Medical Consultation", color: "#FF6A00", progress: 20,
    tasks: [
      { text: "Schedule comprehensive metabolic panel", done: true },
      { text: "Discuss inflammation markers with doctor", done: false },
      { text: "Sleep study evaluation", done: false },
      { text: "Review medication interactions", done: false },
    ],
  },
];

const PreventionPlan = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold">Prevention <span className="text-gradient-health">Plan</span></h1>
          <p className="text-sm text-muted-foreground mt-1">Your personalized AI-generated action plan for optimal health.</p>
        </div>

        {/* Motivational card */}
        <div className="glass-panel neon-border-green p-5 text-center">
          <p className="text-sm text-neon-green font-mono">🎯 You're making progress! 3 of 23 weekly goals completed.</p>
          <p className="text-xs text-muted-foreground mt-1">Small consistent changes create lasting health improvements.</p>
        </div>

        <div className="space-y-4">
          {sections.map((section, i) => (
            <motion.div key={i} className="glass-panel overflow-hidden" layout>
              <button
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                className="w-full p-5 flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ border: `1px solid ${section.color}40`, boxShadow: `0 0 10px ${section.color}20` }}>
                  <section.icon className="w-5 h-5" style={{ color: section.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{section.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: section.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${section.progress}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{section.progress}%</span>
                  </div>
                </div>
              </button>

              {expanded === i && (
                <motion.div
                  className="px-5 pb-5 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {section.tasks.map((task, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm">
                      {task.done ? (
                        <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                      )}
                      <span className={task.done ? "text-muted-foreground line-through" : "text-foreground"}>{task.text}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default PreventionPlan;
