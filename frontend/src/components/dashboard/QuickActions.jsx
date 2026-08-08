<<<<<<< HEAD
import { useTranslation } from "react-i18next";
import {
=======
import {
  PlusCircle,
>>>>>>> bcd60838 (MILESTONE 2)
  Flag,
  Globe,
  Zap,
} from "lucide-react";

export default function QuickActions() {
<<<<<<< HEAD
  const { t } = useTranslation();

  const actions = [
    {
      title: t("dashboard.createFeatureFlag"),
      icon: <Flag size={22} />,
    },
    {
      title: t("dashboard.addEnvironment"),
      icon: <Globe size={22} />,
    },
    {
      title: t("dashboard.newOverride"),
=======

  const actions = [
    {
      title: "Create Feature Flag",
      icon: <Flag size={22} />,
    },
    {
      title: "Add Environment",
      icon: <Globe size={22} />,
    },
    {
      title: "New Override",
>>>>>>> bcd60838 (MILESTONE 2)
      icon: <Zap size={22} />,
    },
  ];

  return (
<<<<<<< HEAD
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6">
        {t("dashboard.quickActions")}
      </h2>

      <div className="space-y-4">
        {actions.map((action, index) => (
=======

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">

        {actions.map((action, index) => (

>>>>>>> bcd60838 (MILESTONE 2)
          <button
            key={index}
            className="w-full flex items-center gap-3
            bg-slate-100 hover:bg-blue-600 hover:text-white
            transition p-4 rounded-xl"
          >
<<<<<<< HEAD
            {action.icon}
            {action.title}
          </button>
        ))}
      </div>
    </div>
  );
=======

            {action.icon}

            {action.title}

          </button>

        ))}

      </div>

    </div>

  );

>>>>>>> bcd60838 (MILESTONE 2)
}