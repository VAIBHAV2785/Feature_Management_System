import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Flag,
  Globe,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";
import axios from "axios";

export default function StatisticsCards() {
  const [stats, setStats] = useState({
    flags: 0,
    environments: 0,
    groups: 0,
    rules: 0,
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
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

      setStats({
        flags: flags.data.length,
        environments: envs.data.length,
        groups: groups.data.length,
        rules: rules.data.length,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const cards = [
    {
      title: "Feature Flags",
      value: stats.flags,
      icon: Flag,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Environments",
      value: stats.environments,
      icon: Globe,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Groups",
      value: stats.groups,
      icon: Users,
      color: "from-purple-600 to-pink-500",
    },
    {
      title: "Rules",
      value: stats.rules,
      icon: Target,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${card.color} p-6 text-white shadow-2xl`}
          >
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative flex justify-between items-start">

              <div>

                <p className="text-white/80">
                  {card.title}
                </p>

                <h1 className="text-5xl font-bold mt-2">
                  {card.value}
                </h1>

                <div className="flex items-center gap-2 mt-5">

                  <TrendingUp size={16} />

                  <span className="text-sm">
                    Active
                  </span>

                </div>

              </div>

              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-md">

                <Icon size={34} />

              </div>

            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{
                duration: 1.5,
              }}
              className="mt-8 h-2 rounded-full bg-white"
            />
          </motion.div>
        );
      })}
    </div>
  );
}