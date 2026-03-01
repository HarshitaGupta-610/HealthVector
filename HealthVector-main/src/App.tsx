import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import MyRisks from "./pages/MyRisks";
import HealthTrajectory from "./pages/HealthTrajectory";
import PreventionPlan from "./pages/PreventionPlan";
import DataHub from "./pages/DataHub";
import AMDEngine from "./pages/AMDEngine";
import InsightsLog from "./pages/InsightsLog";
import Reports from "./pages/Reports";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/risks" element={<MyRisks />} />
          <Route path="/trajectory" element={<HealthTrajectory />} />
          <Route path="/prevention" element={<PreventionPlan />} />
          <Route path="/data-hub" element={<DataHub />} />
          <Route path="/amd-engine" element={<AMDEngine />} />
          <Route path="/insights" element={<InsightsLog />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
