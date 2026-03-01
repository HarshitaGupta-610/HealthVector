import { AlertTriangle, TrendingUp, TrendingDown, Info, Activity } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const entries = [
  { date: "Feb 28", type: "alert", icon: AlertTriangle, color: "#FF6A00", title: "Inflammation score rose above threshold", desc: "CRP proxy marker increased by 12% over 2 weeks." },
  { date: "Feb 25", type: "shift", icon: TrendingUp, color: "#FF6A00", title: "Sleep risk vector shifted upward", desc: "HRV during sleep declined 8% this week." },
  { date: "Feb 22", type: "action", icon: Activity, color: "#00FF88", title: "You completed 4/5 exercise goals", desc: "Weekly exercise completion improved." },
  { date: "Feb 20", type: "info", icon: Info, color: "#00E5FF", title: "AI recalibrated your baseline", desc: "New data from lab results adjusted your risk model." },
  { date: "Feb 18", type: "shift", icon: TrendingDown, color: "#00FF88", title: "Liver risk decreased", desc: "Dietary changes showing positive ALT trend." },
  { date: "Feb 15", type: "alert", icon: AlertTriangle, color: "#FF6A00", title: "Cortisol pattern detected", desc: "Elevated evening cortisol detected for 5 consecutive days." },
  { date: "Feb 12", type: "action", icon: Activity, color: "#00FF88", title: "Lab report uploaded", desc: "Comprehensive metabolic panel processed and integrated." },
];

const InsightsLog = () => (
  <AppLayout>
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="font-display text-2xl font-bold">Insights <span className="text-gradient-data">Log</span></h1>

      <div className="space-y-3">
        {entries.map((entry, i) => (
          <div key={i} className="glass-panel p-4 flex gap-4 items-start">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ border: `1px solid ${entry.color}40` }}>
              <entry.icon className="w-4 h-4" style={{ color: entry.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold truncate">{entry.title}</h3>
                <span className="text-xs text-muted-foreground shrink-0">{entry.date}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{entry.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default InsightsLog;
