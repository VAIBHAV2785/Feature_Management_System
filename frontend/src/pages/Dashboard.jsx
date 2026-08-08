<<<<<<< HEAD
import { useTranslation } from "react-i18next";

=======
>>>>>>> bcd60838 (MILESTONE 2)
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatisticsCards from "../components/dashboard/StatisticsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import SystemStatus from "../components/dashboard/SystemStatus";

export default function Dashboard() {
<<<<<<< HEAD
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
=======
  return (
    <div className="space-y-8">

>>>>>>> bcd60838 (MILESTONE 2)
      <WelcomeBanner />

      <StatisticsCards />

      <AnalyticsChart />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
<<<<<<< HEAD
        <RecentActivity title={t("dashboard.recentActivity")} />

        <SystemStatus title={t("dashboard.systemStatus")} />
      </div>
=======

        <RecentActivity />

        <SystemStatus />

      </div>

>>>>>>> bcd60838 (MILESTONE 2)
    </div>
  );
}