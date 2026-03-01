import { motion } from "framer-motion";
import { ArrowUp, ArrowRight, ArrowDown, Bell, Calendar, Brain } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import HealthGauge from "@/components/HealthGauge";
import MiniTrendChart from "@/components/MiniTrendChart";
import { Link } from "react-router-dom";

const riskModules = [
  { name: "Liver Risk", level: "Low", drift: -2.1, color: "#00FF88", data: [30, 28, 25, 27, 24, 22, 20] },
  { name: "Sleep Risk", level: "Moderate", drift: 5.3, color: "#FF6A00", data: [40, 42, 45, 48, 50, 53, 55] },
  { name: "Kidney Risk", level: "Low", drift: -0.8, color: "#00FF88", data: [15, 14, 16, 13, 14, 12, 13] },
  { name: "Hormonal Risk", level: "Low", drift: 1.2, color: "#00E5FF", data: [25, 24, 26, 27, 25, 26, 28] },
  { name: "Autonomic Risk", level: "Low", drift: -1.5, color: "#00FF88", data: [20, 19, 18, 17, 18, 16, 15] },
  { name: "Inflammation", level: "Elevated", drift: 8.7, color: "#FF6A00", data: [35, 38, 42, 45, 48, 50, 55] },
  { name: "Cognitive", level: "Stable", drift: 0.3, color: "#00E5FF", data: [80, 82, 81, 83, 82, 84, 83] },
];

const alerts = [
  { text: "Inflammation markers trending upward — consider anti-inflammatory diet.", type: "warn" },
  { text: "Sleep quality declining — review sleep hygiene protocol.", type: "warn" },
  { text: "Kidney markers stable. Great progress.", type: "good" },
];

const Dashboard = () => (
  <AppLayout>
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold">Health <span className="text-gradient-primary">Dashboard</span></h1>
        <p className="text-muted-foreground text-sm mt-1">Your personal health overview — updated in real-time.</p>
      </div>

      {/* Top section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 flex justify-center">
          <HealthGauge value={74} />
        </div>

        <div className="glass-panel p-6 flex flex-col justify-center items-center gap-3">
          <p className="text-muted-foreground text-sm uppercase tracking-widest">Health Direction</p>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-neon-cyan" />
            <span className="font-display text-xl font-bold text-neon-cyan">Stable</span>
          </div>
          <p className="text-xs text-muted-foreground">Minor drifts detected in 2 vectors</p>
        </div>

        <div className="glass-panel p-6">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-4 h-4 text-neon-orange" />
            <p className="text-sm font-semibold">AI Summary</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Overall health is stable. Two areas need attention: sleep quality is declining and systemic inflammation is rising.
            Consider adjusting your sleep schedule and adding anti-inflammatory foods.
          </p>
        </div>
      </div>

      {/* Risk modules grid */}
      <div>
        <h2 className="font-display text-lg font-semibold mb-4">Disease Vectors</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {riskModules.map((mod, i) => (
            <Link to="/risks" key={i}>
              <motion.div
                className="glass-panel-hover p-4 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold">{mod.name}</h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{
                    color: mod.color,
                    background: `${mod.color}15`,
                    border: `1px solid ${mod.color}30`,
                  }}>{mod.level}</span>
                </div>
                <MiniTrendChart data={mod.data} color={mod.color} />
                <div className="flex items-center gap-1 mt-2">
                  {mod.drift > 0 ? <ArrowUp className="w-3 h-3" style={{ color: mod.drift > 5 ? "#FF6A00" : "#00E5FF" }} /> :
                    <ArrowDown className="w-3 h-3 text-neon-green" />}
                  <span className="text-xs text-muted-foreground">
                    {mod.drift > 0 ? "+" : ""}{mod.drift}% drift (30d)
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-panel p-5">
          <div className="flex items-center gap-2 mb-3">
            <Bell className="w-4 h-4 text-neon-orange" />
            <h3 className="text-sm font-semibold">Active Alerts</h3>
          </div>
          <div className="space-y-2">
            {alerts.map((a, i) => (
              <div key={i} className={`text-xs p-2 rounded-lg ${a.type === "warn" ? "bg-primary/5 border border-primary/20" : "bg-neon-green/5 border border-neon-green/20"}`}>
                {a.text}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-5">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-neon-cyan" />
            <h3 className="text-sm font-semibold">Upcoming</h3>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between"><span>Lab Panel Review</span><span className="text-xs text-neon-cyan">Mar 15</span></div>
            <div className="flex justify-between"><span>Sleep Study Follow-up</span><span className="text-xs text-neon-cyan">Mar 22</span></div>
            <div className="flex justify-between"><span>CRP Recheck</span><span className="text-xs text-neon-cyan">Apr 1</span></div>
          </div>
        </div>

        <div className="glass-panel p-5">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-4 h-4 text-neon-green" />
            <h3 className="text-sm font-semibold">AI Recommendations</h3>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Add omega-3 supplementation</p>
            <p>• Reduce screen time before bed</p>
            <p>• Increase daily step count to 8,000</p>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
);

export default Dashboard;
