import { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, AlertTriangle, TrendingUp, Shield,
  Database, Cpu, BookOpen, FileText, Settings, Menu, X, ChevronRight
} from "lucide-react";
import logo from "@/assets/healthvector-logo.png";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: AlertTriangle, label: "My Risks", path: "/risks" },
  { icon: TrendingUp, label: "Health Trajectory", path: "/trajectory" },
  { icon: Shield, label: "Prevention Plan", path: "/prevention" },
  { icon: Database, label: "Data Hub", path: "/data-hub" },
  { icon: Cpu, label: "AMD Edge Engine", path: "/amd-engine" },
  { icon: BookOpen, label: "Insights Log", path: "/insights" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex relative">
      {/* Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-background/60 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            className="fixed left-0 top-0 bottom-0 w-64 z-50 glass-panel border-r border-border flex flex-col"
            initial={{ x: -264 }}
            animate={{ x: 0 }}
            exit={{ x: -264 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-4 flex items-center justify-between border-b border-border">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="HealthVector" className="w-8 h-8 rounded-full" />
                <span className="font-display text-sm font-bold">Health<span className="text-gradient-primary">Vector</span></span>
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
              {menuItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group ${
                      active
                        ? "bg-primary/10 text-primary neon-border-orange"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {active && <ChevronRight className="w-3 h-3 ml-auto" />}
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-border">
              <div className="glass-panel p-3 text-center">
                <p className="text-xs text-muted-foreground">Demo Mode</p>
                <p className="text-xs text-neon-green font-mono">Active</p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 px-4 py-3 flex items-center gap-4 border-b border-border" style={{ background: "rgba(10,15,28,0.85)", backdropFilter: "blur(12px)" }}>
          <button onClick={() => setSidebarOpen(true)} className="text-muted-foreground hover:text-foreground transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="HealthVector" className="w-7 h-7 rounded-full" />
            <span className="font-display text-sm font-bold hidden sm:inline">Health<span className="text-gradient-primary">Vector</span></span>
          </Link>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
