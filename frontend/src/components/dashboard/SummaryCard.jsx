import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SummaryCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      className={`rounded-3xl bg-gradient-to-r ${color} p-7 text-white shadow-xl`}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-white/80">{title}</p>

          <h1 className="text-5xl font-bold mt-3">
            {value}
          </h1>

          <div className="flex items-center gap-2 mt-6">
            <TrendingUp size={16} />

            <span>{t("dashboard.healthy")}</span>
          </div>
        </div>

        <div className="bg-white/20 rounded-2xl p-4">
          <Icon size={36} />
        </div>
      </div>
    </motion.div>
  );
}