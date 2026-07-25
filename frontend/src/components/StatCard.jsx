import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon,
  color,
  subtitle,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${color}
      p-6 shadow-lg hover:shadow-2xl transition-all duration-300
      hover:-translate-y-2 text-white`}
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-sm opacity-90">
            {title}
          </p>

          <h1 className="text-5xl font-bold mt-3">
            {value}
          </h1>

          <p className="text-sm mt-3 opacity-90">
            {subtitle}
          </p>

        </div>

        <div className="bg-white/20 p-4 rounded-xl">
          {icon}
        </div>

      </div>

      <ArrowUpRight
        size={70}
        className="absolute -bottom-3 -right-3 opacity-20"
      />
    </div>
  );
}