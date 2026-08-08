import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

export default function AnalyticsChart() {
  const { t } = useTranslation();

  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    loadAnalytics();
  }, [t]);

  async function loadAnalytics() {
    try {
      const [
        flags,
        envs,
        groups,
        rules,
      ] = await Promise.all([
        axios.get("http://127.0.0.1:8000/flags"),
        axios.get("http://127.0.0.1:8000/environments"),
        axios.get("http://127.0.0.1:8000/groups"),
        axios.get("http://127.0.0.1:8000/targeting-rules"),
      ]);

      const enabled = flags.data.filter((f) => f.enabled).length;
      const disabled = flags.data.length - enabled;

      setBarData([
        {
          name: t("dashboard.featureFlags"),
          value: flags.data.length,
        },
        {
          name: t("dashboard.environments"),
          value: envs.data.length,
        },
        {
          name: t("dashboard.groups"),
          value: groups.data.length,
        },
        {
          name: t("dashboard.rules"),
          value: rules.data.length,
        },
      ]);

      setPieData([
        {
          name: t("dashboard.enabled"),
          value: enabled,
        },
        {
          name: t("dashboard.disabled"),
          value: disabled,
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">
          📊 {t("dashboard.platformStatistics")}
        </h2>

        <ResponsiveContainer width="100%" height={330}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#2563EB"
              radius={[12, 12, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">
          🚀 {t("dashboard.featureFlagStatus")}
        </h2>

        <ResponsiveContainer width="100%" height={330}>
          <PieChart>
            <Pie
              data={pieData}
              outerRadius={110}
              innerRadius={65}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}