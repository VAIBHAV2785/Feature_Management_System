import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function FeatureChart({ enabled, disabled }) {
  const { t } = useTranslation();

  const data = [
    {
      name: t("dashboard.enabled"),
      value: enabled,
    },
    {
      name: t("dashboard.disabled"),
      value: disabled,
    },
  ];

  const COLORS = [
    "#2563eb",
    "#ef4444",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-[350px]">
      <h2 className="text-xl font-bold mb-6">
        {t("dashboard.featureFlagAnalytics")}
      </h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={110}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}