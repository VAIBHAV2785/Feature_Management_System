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
  );
}