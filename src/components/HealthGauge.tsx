import { useMemo } from "react";
import { motion } from "framer-motion";

interface GaugeProps {
  value: number;
  size?: number;
  label?: string;
}

const HealthGauge = ({ value, size = 200, label = "Health Vector Score" }: GaugeProps) => {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius * 0.75; // 270 degrees
  const offset = circumference - (value / 100) * circumference;

  const color = useMemo(() => {
    if (value >= 75) return "url(#gauge-green)";
    if (value >= 50) return "url(#gauge-orange)";
    return "url(#gauge-red)";
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="gauge-green" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FF88" />
            <stop offset="100%" stopColor="#00E5FF" />
          </linearGradient>
          <linearGradient id="gauge-orange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6A00" />
            <stop offset="100%" stopColor="#FFB800" />
          </linearGradient>
          <linearGradient id="gauge-red" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF3333" />
            <stop offset="100%" stopColor="#FF6A00" />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.25}
          transform={`rotate(135 ${size / 2} ${size / 2})`}
          strokeLinecap="round"
        />

        {/* Value */}
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeLinecap="round"
          transform={`rotate(135 ${size / 2} ${size / 2})`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="gauge-ring"
          style={{ filter: `drop-shadow(0 0 8px rgba(${value >= 75 ? '0,255,136' : value >= 50 ? '255,106,0' : '255,51,51'},0.4))` }}
        />

        <text x={size / 2} y={size / 2 - 5} textAnchor="middle" className="font-display text-4xl font-bold fill-foreground">
          {value}
        </text>
        <text x={size / 2} y={size / 2 + 18} textAnchor="middle" className="text-xs fill-muted-foreground">
          / 100
        </text>
      </svg>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

export default HealthGauge;
