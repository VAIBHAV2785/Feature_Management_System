import { useTranslation } from "react-i18next";
import {
  CheckCircle2,
  Database,
  Server,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export default function SystemStatus() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("dashboard.apiServer"),
      icon: Server,
      status: t("dashboard.online"),
    },
    {
      title: t("dashboard.postgresql"),
      icon: Database,
      status: t("dashboard.connected"),
    },
    {
      title: t("dashboard.authentication"),
      icon: ShieldCheck,
      status: t("dashboard.secure"),
    },
    {
      title: t("dashboard.redisCache"),
      icon: Cpu,
      status: t("dashboard.healthy"),
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-8">
        {t("dashboard.systemHealth")}
      </h2>

      <div className="space-y-5">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="flex justify-between items-center border rounded-2xl p-5 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-xl p-4">
                  <Icon
                    size={24}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {service.title}
                  </h3>

                  <p className="text-gray-500">
                    {t("dashboard.runningNormally")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle2 size={20} />
                {service.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}