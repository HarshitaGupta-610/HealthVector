import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

interface MiniChartProps {
  data: number[];
  color?: string;
  height?: number;
}

const MiniTrendChart = ({ data, color = "#FF6A00", height = 40 }: MiniChartProps) => {
  const chartData = data.map((value, i) => ({ value, day: i }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={chartData}>
        <Tooltip
          contentStyle={{ background: "hsl(220, 40%, 8%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }}
          labelStyle={{ display: "none" }}
        />
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MiniTrendChart;
