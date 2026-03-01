import { Link } from "react-router-dom";
import logo from "@/assets/healthvector-logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ background: "rgba(10,15,28,0.8)", backdropFilter: "blur(12px)" }}>
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="HealthVector" className="w-9 h-9 rounded-full object-cover" />
        <span className="font-display text-lg font-bold text-foreground">Health<span className="text-gradient-primary">Vector</span></span>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="btn-glow-secondary text-sm py-2 px-5">
          Explore Demo
        </Link>
        <Link to="/onboarding" className="btn-glow-primary text-sm py-2 px-5">
          Get Started
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
