import { useEffect, useState } from "react";
import axios from "axios";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
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
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  async function loadAnalytics() {
    try {
      const [
        flags,
        envs,
        groups,
        rules,
        users,
      ] = await Promise.all([
        axios.get("http://127.0.0.1:8000/flags"),
        axios.get("http://127.0.0.1:8000/environments"),
        axios.get("http://127.0.0.1:8000/groups"),
        axios.get("http://127.0.0.1:8000/targeting-rules"),
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

    } catch (err) {
      console.log(err);
    }
  }

  return (
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

    </div>
  );
}