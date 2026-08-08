<<<<<<< HEAD
import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WelcomeBanner() {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 shadow-xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-white">
            {t("dashboard.welcome")}, Vaibhav 👋
          </h1>

          <p className="text-blue-100 mt-3 text-lg">
            {t("dashboard.welcomeDescription")}
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg">
              {t("dashboard.createFeatureFlag")}
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-xl">
              {t("dashboard.viewDocumentation")}
            </button>
          </div>
        </div>

        <div className="hidden xl:flex items-center justify-center">
          <div className="bg-white/20 rounded-full p-8">
            <ShieldCheck
              size={100}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
=======
import { motion } from "framer-motion";

export default function WelcomeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-10 text-white shadow-2xl"
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>

      <div className="absolute -bottom-16 left-40 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <h1 className="text-4xl font-extrabold">
        🚀 Feature Management Platform
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-blue-100">
        Manage feature flags, release strategies, targeting
        rules and production rollouts from one centralized
        enterprise dashboard.
      </p>
    </motion.div>
>>>>>>> bcd60838 (MILESTONE 2)
  );
}