import { FileText, Download } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const reports = [
  { title: "Monthly Health Summary — February 2026", date: "Mar 1, 2026", type: "Monthly" },
  { title: "Inflammation Deep Dive Report", date: "Feb 25, 2026", type: "Risk Analysis" },
  { title: "Monthly Health Summary — January 2026", date: "Feb 1, 2026", type: "Monthly" },
  { title: "Baseline Establishment Report", date: "Jan 15, 2026", type: "Initial" },
];

const Reports = () => (
  <AppLayout>
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="font-display text-2xl font-bold">Health <span className="text-gradient-primary">Reports</span></h1>

      <div className="space-y-3">
        {reports.map((r, i) => (
          <div key={i} className="glass-panel-hover p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg neon-border-cyan flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-neon-cyan" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold truncate">{r.title}</h3>
              <div className="flex gap-3 text-xs text-muted-foreground mt-1">
                <span>{r.date}</span>
                <span className="text-neon-cyan">{r.type}</span>
              </div>
            </div>
            <button className="btn-glow-secondary text-xs py-1.5 px-4 flex items-center gap-1">
              <Download className="w-3 h-3" /> PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Reports;
