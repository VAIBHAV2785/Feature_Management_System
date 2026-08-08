import { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";
=======
>>>>>>> bcd60838 (MILESTONE 2)

import {
  ResponsiveContainer,
  BarChart,
  Bar,
<<<<<<< HEAD
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
=======
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#10B981",
];

export default function AnalyticsChart() {
  const [data, setData] = useState([]);
>>>>>>> bcd60838 (MILESTONE 2)
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    loadAnalytics();
<<<<<<< HEAD
  }, [t]);
=======
  }, []);
>>>>>>> bcd60838 (MILESTONE 2)

  async function loadAnalytics() {
    try {
      const [
        flags,
        envs,
        groups,
        rules,
<<<<<<< HEAD
=======
        users,
>>>>>>> bcd60838 (MILESTONE 2)
      ] = await Promise.all([
        axios.get("http://127.0.0.1:8000/flags"),
        axios.get("http://127.0.0.1:8000/environments"),
        axios.get("http://127.0.0.1:8000/groups"),
        axios.get("http://127.0.0.1:8000/targeting-rules"),
<<<<<<< HEAD
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
=======
        axios.get("http://127.0.0.1:8000/auth/users"),
      ]);

      const enabled = flags.data.filter(f => f.enabled).length;
      const disabled = flags.data.length - enabled;

      setPieData([
        { name: "Enabled", value: enabled },
        { name: "Disabled", value: disabled },
      ]);

      setData([
        { name: "Flags", value: flags.data.length },
        { name: "Env", value: envs.data.length },
        { name: "Users", value: users.data.length },
        { name: "Groups", value: groups.data.length },
        { name: "Rules", value: rules.data.length },
      ]);

>>>>>>> bcd60838 (MILESTONE 2)
    } catch (err) {
      console.log(err);
    }
  }

  return (
<<<<<<< HEAD
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
=======
    <div className="grid lg:grid-cols-2 gap-6">

      {/* Bar Chart */}

      <div className="bg-white rounded-3xl shadow-xl p-6">

        <h2 className="text-xl font-bold mb-6">
          📊 System Analytics
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[10,10,0,0]}
              fill="#2563EB"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Pie Chart */}

      <div className="bg-white rounded-3xl shadow-xl p-6">

        <h2 className="text-xl font-bold mb-6">
          🚀 Feature Status
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={110}
              label
            >

              {pieData.map((entry,index)=>(
>>>>>>> bcd60838 (MILESTONE 2)
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
<<<<<<< HEAD
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
=======

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

>>>>>>> bcd60838 (MILESTONE 2)
    </div>
  );
}