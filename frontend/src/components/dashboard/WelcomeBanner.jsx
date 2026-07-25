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
  );
}