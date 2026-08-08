<<<<<<< HEAD
import { useTranslation } from "react-i18next";
=======
>>>>>>> bcd60838 (MILESTONE 2)
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function FeatureChart({ enabled, disabled }) {
<<<<<<< HEAD
  const { t } = useTranslation();

  const data = [
    {
      name: t("dashboard.enabled"),
      value: enabled,
    },
    {
      name: t("dashboard.disabled"),
=======

  const data = [
    {
      name: "Enabled",
      value: enabled,
    },
    {
      name: "Disabled",
>>>>>>> bcd60838 (MILESTONE 2)
      value: disabled,
    },
  ];

  const COLORS = [
    "#2563eb",
    "#ef4444",
  ];

  return (
<<<<<<< HEAD
    <div className="bg-white rounded-2xl shadow-lg p-6 h-[350px]">
      <h2 className="text-xl font-bold mb-6">
        {t("dashboard.featureFlagAnalytics")}
      </h2>

      <ResponsiveContainer>
        <PieChart>
=======

    <div className="bg-white rounded-2xl shadow-lg p-6 h-[350px]">

      <h2 className="text-xl font-bold mb-6">
        Feature Flag Analytics
      </h2>

      <ResponsiveContainer>

        <PieChart>

>>>>>>> bcd60838 (MILESTONE 2)
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={110}
            dataKey="value"
          >
<<<<<<< HEAD
            {data.map((entry, index) => (
=======

            {data.map((entry, index) => (

>>>>>>> bcd60838 (MILESTONE 2)
              <Cell
                key={index}
                fill={COLORS[index]}
              />
<<<<<<< HEAD
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
=======

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

>>>>>>> bcd60838 (MILESTONE 2)
}