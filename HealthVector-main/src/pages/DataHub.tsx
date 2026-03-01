import { Watch, FileText, ClipboardList, Brain, RefreshCw, Shield } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const dataSources = [
  { icon: Watch, name: "Apple Watch", status: "Connected", lastSync: "2 min ago", color: "#00FF88" },
  { icon: Watch, name: "Oura Ring", status: "Connected", lastSync: "15 min ago", color: "#00FF88" },
  { icon: Watch, name: "Fitbit", status: "Disconnected", lastSync: "N/A", color: "#FF6A00" },
  { icon: FileText, name: "Lab Reports", status: "3 uploaded", lastSync: "Feb 28", color: "#00E5FF" },
  { icon: ClipboardList, name: "Lifestyle Logs", status: "Active", lastSync: "Today", color: "#00FF88" },
  { icon: Brain, name: "Cognitive Tests", status: "2 completed", lastSync: "Feb 25", color: "#00E5FF" },
];

const DataHub = () => (
  <AppLayout>
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="font-display text-2xl font-bold">Data <span className="text-gradient-data">Hub</span></h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataSources.map((src, i) => (
          <div key={i} className="glass-panel-hover p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ border: `1px solid ${src.color}40` }}>
                <src.icon className="w-5 h-5" style={{ color: src.color }} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{src.name}</h3>
                <p className="text-xs" style={{ color: src.color }}>{src.status}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Last sync: {src.lastSync}</span>
              <button className="text-neon-cyan hover:text-foreground transition-colors">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel p-5">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-4 h-4 text-neon-green" />
          <h3 className="text-sm font-semibold">Data Privacy</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          All health data is encrypted end-to-end and processed locally when possible via AMD Edge inference.
          Your data is never sold or shared with third parties. You maintain full ownership and can export or delete at any time.
        </p>
      </div>
    </div>
  </AppLayout>
);

export default DataHub;
