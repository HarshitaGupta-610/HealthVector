import { useState } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import AppLayout from "@/components/AppLayout";

const diseases = [
  { name: "Liver Risk", key: "liver" },
  { name: "Sleep Risk", key: "sleep" },
  { name: "Kidney Risk", key: "kidney" },
  { name: "Hormonal Risk", key: "hormonal" },
  { name: "Autonomic Risk", key: "autonomic" },
  { name: "Inflammation", key: "inflammation" },
  { name: "Cognitive", key: "cognitive" },
];

const generateData = (base: number, trend: number) =>
  Array.from({ length: 24 }, (_, i) => ({
    week: `W${i + 1}`,
    value: Math.max(0, Math.min(100, base + trend * i + (Math.random() - 0.5) * 8)),
  }));

const diseaseData: Record<string, ReturnType<typeof generateData>> = {
  liver: generateData(30, -0.3),
  sleep: generateData(35, 0.8),
  kidney: generateData(15, -0.1),
  hormonal: generateData(25, 0.2),
  autonomic: generateData(22, -0.3),
  inflammation: generateData(30, 1.2),
  cognitive: generateData(80, -0.1),
};

const factors: Record<string, string[]> = {
  liver: ["High fructose intake", "Sedentary behavior", "Elevated ALT trend"],
  sleep: ["Irregular schedule", "Screen exposure", "Caffeine after 2pm"],
  kidney: ["Adequate hydration", "Stable creatinine", "Controlled BP"],
  hormonal: ["Stress response", "Sleep quality impact", "Cortisol cycling"],
  autonomic: ["HRV improving", "Regular exercise", "Hydration"],
  inflammation: ["Processed food intake", "Low omega-3", "Chronic stress"],
  cognitive: ["Good sleep pattern", "Mental exercises", "Social engagement"],
};

const simulations = ["Improve Sleep", "Improve Diet", "Reduce Stress", "Increase Activity"];

const MyRisks = () => {
  const [selected, setSelected] = useState("inflammation");
  const [activeSim, setActiveSim] = useState<string | null>(null);

  const data = diseaseData[selected];
  const simData = activeSim ? data.map((d, i) => ({ ...d, simulated: Math.max(0, d.value - (i * 0.5 + Math.random() * 3)) })) : null;

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="font-display text-2xl font-bold">My <span className="text-gradient-primary">Risks</span></h1>

        {/* Disease selector */}
        <div className="flex gap-2 flex-wrap">
          {diseases.map((d) => (
            <button
              key={d.key}
              onClick={() => { setSelected(d.key); setActiveSim(null); }}
              className={`text-xs px-4 py-2 rounded-full transition-all duration-200 ${
                selected === d.key ? "btn-glow-primary" : "glass-panel text-muted-foreground hover:text-foreground"
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="glass-panel p-6">
          <h2 className="font-semibold mb-4">{diseases.find(d => d.key === selected)?.name} — 6 Month Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={simData || data}>
              <defs>
                <linearGradient id="riskGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6A00" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FF6A00" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="simGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FF88" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00FF88" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="week" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(220,40%,8%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }} />
              <Area type="monotone" dataKey="value" stroke="#FF6A00" fill="url(#riskGrad)" strokeWidth={2} />
              {simData && <Area type="monotone" dataKey="simulated" stroke="#00FF88" fill="url(#simGrad)" strokeWidth={2} strokeDasharray="5 5" />}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Simulation toggles */}
        <div className="glass-panel p-5">
          <h3 className="text-sm font-semibold mb-3">Simulate Intervention</h3>
          <div className="flex gap-2 flex-wrap">
            {simulations.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSim(activeSim === s ? null : s)}
                className={`text-xs px-4 py-2 rounded-full transition-all ${
                  activeSim === s ? "neon-border-green text-neon-green" : "glass-panel text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {activeSim && <p className="text-xs text-neon-green mt-3 font-mono">↓ Simulating "{activeSim}" impact on {diseases.find(d => d.key === selected)?.name}</p>}
        </div>

        {/* Contributing factors */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-panel p-5">
            <h3 className="text-sm font-semibold mb-3">Contributing Factors</h3>
            <div className="space-y-2">
              {(factors[selected] || []).map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-orange" />
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-5">
            <h3 className="text-sm font-semibold mb-3">Why This Matters</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Early drift detection in this vector can prevent disease progression by 3-7 years. 
              Current trajectory suggests monitoring frequency should be maintained at weekly intervals.
              Small lifestyle adjustments now can significantly alter your long-term health outcome.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MyRisks;
