import { useState } from "react";
import { Globe, Bell, Sliders, RotateCcw } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const SettingsPage = () => {
  const [sensitivity, setSensitivity] = useState(50);
  const [demoMode, setDemoMode] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="font-display text-2xl font-bold"><span className="text-gradient-primary">Settings</span></h1>

        <div className="glass-panel p-5 space-y-6">
          {/* Demo Mode */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Demo Simulation Mode</h3>
              <p className="text-xs text-muted-foreground">Show simulated data for exploration</p>
            </div>
            <button
              onClick={() => setDemoMode(!demoMode)}
              className={`w-12 h-6 rounded-full transition-colors relative ${demoMode ? "bg-neon-green/30" : "bg-secondary"}`}
            >
              <div className={`w-5 h-5 rounded-full absolute top-0.5 transition-all ${demoMode ? "left-6 bg-neon-green" : "left-0.5 bg-muted-foreground"}`} />
            </button>
          </div>

          {/* Language */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <div>
                <h3 className="text-sm font-semibold">Language</h3>
                <p className="text-xs text-muted-foreground">Interface language</p>
              </div>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-sm text-foreground"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
            </select>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <div>
                <h3 className="text-sm font-semibold">Notifications</h3>
                <p className="text-xs text-muted-foreground">Risk alerts and reminders</p>
              </div>
            </div>
            <button className="btn-glow-secondary text-xs py-1.5 px-4">Configure</button>
          </div>

          {/* Risk Sensitivity */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sliders className="w-4 h-4 text-muted-foreground" />
              <div>
                <h3 className="text-sm font-semibold">Risk Sensitivity</h3>
                <p className="text-xs text-muted-foreground">Adjust alert threshold — currently {sensitivity}%</p>
              </div>
            </div>
            <input
              type="range" min="10" max="90" value={sensitivity}
              onChange={(e) => setSensitivity(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Less Sensitive</span>
              <span>More Sensitive</span>
            </div>
          </div>

          {/* Baseline Reset */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-destructive" />
              <div>
                <h3 className="text-sm font-semibold">Reset Baseline</h3>
                <p className="text-xs text-muted-foreground">Recalculate all risk baselines</p>
              </div>
            </div>
            <button className="text-xs px-4 py-1.5 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive/10 transition-colors">
              Reset
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
