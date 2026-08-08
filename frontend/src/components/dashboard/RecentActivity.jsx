import { Clock3 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function RecentActivity() {
  const { t } = useTranslation();

  const activities = [
    {
      id: 1,
      action: t("activity.createdFlag"),
      user: "Admin",
      time: t("activity.time1"),
      color: "#2563EB",
    },
    {
      id: 2,
      action: t("activity.updatedEnvironment"),
      user: "Vaibhav",
      time: t("activity.time2"),
      color: "#10B981",
    },
    {
      id: 3,
      action: t("activity.addedGroup"),
      user: "Admin",
      time: t("activity.time3"),
      color: "#F59E0B",
    },
    {
      id: 4,
      action: t("activity.ruleEvaluation"),
      user: "System",
      time: t("activity.time4"),
      color: "#8B5CF6",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          {t("dashboard.recentActivity")}
        </h2>

        <Clock3 size={22} />
      </div>

      <div className="space-y-6">
        {activities.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-5"
          >
            <div
              style={{
                width: 16,
                height: 16,
                background: item.color,
                borderRadius: "50%",
                marginTop: 8,
              }}
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {item.action}
              </h3>

              <p className="text-gray-500">
                {item.user}
              </p>
            </div>

            <span className="text-sm text-gray-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}