<<<<<<< HEAD
import { useTranslation } from "react-i18next";

export default function RecentFlags({ flags }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-5">
        {t("dashboard.recentFeatureFlags")}
      </h2>

      <div className="space-y-4">
        {flags.slice(0, 5).map((flag) => (
          <div
            key={flag.id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
=======
export default function RecentFlags({ flags }) {

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-5">
        Recent Feature Flags
      </h2>

      <div className="space-y-4">

        {flags.slice(0,5).map((flag)=>(
          <div
            key={flag.id}
            className="flex justify-between items-center
            border-b pb-3"
          >

            <div>

>>>>>>> bcd60838 (MILESTONE 2)
              <h3 className="font-semibold">
                {flag.key}
              </h3>

              <p className="text-sm text-gray-500">
                {flag.owner_team}
              </p>
<<<<<<< HEAD
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
=======

            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold
              ${
>>>>>>> bcd60838 (MILESTONE 2)
                flag.enabled
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
<<<<<<< HEAD
              {flag.enabled
                ? t("dashboard.enabled")
                : t("dashboard.disabled")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
=======

              {flag.enabled
                ? "Enabled"
                : "Disabled"}

            </span>

          </div>
        ))}

      </div>

    </div>

  );

>>>>>>> bcd60838 (MILESTONE 2)
}