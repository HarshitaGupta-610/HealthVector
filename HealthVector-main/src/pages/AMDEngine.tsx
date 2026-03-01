import { Cpu, Zap, BarChart3, Activity, Gauge } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import AppLayout from "@/components/AppLayout";

const latencyData = Array.from({ length: 20 }, (_, i) => ({
  tick: i,
  latency: 2 + Math.random() * 3,
}));

const modelingData = [
  { disease: "Liver", time: 12 },
  { disease: "Sleep", time: 15 },
  { disease: "Kidney", time: 10 },
  { disease: "Hormonal", time: 18 },
  { disease: "Autonomic", time: 11 },
  { disease: "Inflam.", time: 14 },
  { disease: "Cognitive", time: 16 },
];

const AMDEngine = () => (
  <AppLayout>
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="font-display text-2xl font-bold">AMD <span className="text-gradient-primary">Edge Engine</span></h1>
      <p className="text-sm text-muted-foreground">Real-time AI processing pipeline for cross-system health drift modeling.</p>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { icon: Cpu, label: "NPU Cores", value: "16 Active", color: "#FF6A00" },
          { icon: Zap, label: "Avg Latency", value: "3.2ms", color: "#00FF88" },
          { icon: Activity, label: "Throughput", value: "1.2M ops/s", color: "#00E5FF" },
          { icon: Gauge, label: "Efficiency", value: "94.7%", color: "#00FF88" },
        ].map((m, i) => (
          <div key={i} className="glass-panel p-4 text-center">
            <m.icon className="w-6 h-6 mx-auto mb-2" style={{ color: m.color }} />
            <p className="text-xs text-muted-foreground">{m.label}</p>
            <p className="font-display font-bold text-lg" style={{ color: m.color }}>{m.value}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-panel p-6">
          <h3 className="text-sm font-semibold mb-4">Real-time Inference Latency (ms)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={latencyData}>
              <XAxis hide />
              <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} />
              <Line type="monotone" dataKey="latency" stroke="#00FF88" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-sm font-semibold mb-4">Parallel Disease Modeling (ms per vector)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={modelingData}>
              <XAxis dataKey="disease" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.4)" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(220,40%,8%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }} />
              <Bar dataKey="time" fill="#00E5FF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-panel p-6">
        <h3 className="text-sm font-semibold mb-3">How AMD Acceleration Works</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          HealthVector's AI Drift Engine leverages AMD Ryzen AI neural processing units for real-time health pattern recognition.
          The AMD Instinct GPU platform enables parallel processing across all seven disease vectors simultaneously,
          reducing total inference time from minutes to milliseconds. Edge processing ensures your health data stays
          local while maintaining sub-5ms response times for continuous monitoring.
        </p>
      </div>
    </div>
  </AppLayout>
);

export default AMDEngine;
