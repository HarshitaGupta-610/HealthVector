import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import AppLayout from "@/components/AppLayout";

const ranges = ["6 months", "1 year", "3 years"];

const generateProjection = (months: number, base: number, interventionEffect: number) =>
  Array.from({ length: months }, (_, i) => ({
    month: `M${i + 1}`,
    noChange: Math.min(100, base + i * 0.8 + Math.sin(i) * 3),
    withIntervention: Math.max(0, base - i * interventionEffect + Math.sin(i) * 2),
  }));

const HealthTrajectory = () => {
  const [range, setRange] = useState(1);
  const months = [6, 12, 36][range];
  const data = generateProjection(months, 35, 0.4);

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="font-display text-2xl font-bold">Health <span className="text-gradient-data">Trajectory</span></h1>

        <div className="flex gap-2">
          {ranges.map((r, i) => (
            <button
              key={r}
              onClick={() => setRange(i)}
              className={`text-xs px-4 py-2 rounded-full transition-all ${range === i ? "btn-glow-primary" : "glass-panel text-muted-foreground"}`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="glass-panel p-6">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="noChangeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6A00" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FF6A00" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="interventionGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FF88" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00FF88" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip contentStyle={{ background: "hsl(220,40%,8%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }} />
              <Area type="monotone" dataKey="noChange" stroke="#FF6A00" fill="url(#noChangeGrad)" strokeWidth={2} name="No Changes" />
              <Area type="monotone" dataKey="withIntervention" stroke="#00FF88" fill="url(#interventionGrad)" strokeWidth={2} name="With Intervention" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-panel p-5 neon-border-orange">
            <h3 className="text-sm font-semibold mb-2 text-neon-orange">If no changes are made…</h3>
            <p className="text-sm text-muted-foreground">Risk score projected to increase by 15-20% over the next year, with inflammation and sleep vectors driving the majority of drift.</p>
          </div>
          <div className="glass-panel p-5 neon-border-green">
            <h3 className="text-sm font-semibold mb-2 text-neon-green">With intervention…</h3>
            <p className="text-sm text-muted-foreground">Following the personalized prevention plan could reduce overall risk by 30-40% within 6 months, particularly in inflammation and metabolic markers.</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HealthTrajectory;
