import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#1976d2",
  "#4caf50",
  "#ff9800",
  "#9c27b0",
];

function EnvironmentChart({ data }) {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">
        {t("dashboard.environmentDistribution")}
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="environment"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EnvironmentChart;