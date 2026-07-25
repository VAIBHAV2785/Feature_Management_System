import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatisticsCards from "../components/dashboard/StatisticsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import SystemStatus from "../components/dashboard/SystemStatus";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <WelcomeBanner />

      <StatisticsCards />

      <AnalyticsChart />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <RecentActivity />

        <SystemStatus />

      </div>

    </div>
  );
}