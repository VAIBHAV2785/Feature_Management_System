import { useEffect, useState } from "react";
import axios from "axios";
import {
  Activity,
  Flag,
  Users,
  Globe,
  Target,
} from "lucide-react";

export default function RecentActivity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadActivity();
  }, []);

  async function loadActivity() {
    try {
      const logs = await axios.get(
        "http://127.0.0.1:8000/audit-logs"
      );

      setActivities(logs.data.slice(0, 6));
    } catch {
      setActivities([]);
    }
  }

  function getIcon(action = "") {
    action = action.toLowerCase();

    if (action.includes("flag"))
      return <Flag className="text-blue-600" size={18} />;

    if (action.includes("group"))
      return <Users className="text-purple-600" size={18} />;

    if (action.includes("environment"))
      return <Globe className="text-green-600" size={18} />;

    if (action.includes("rule"))
      return <Target className="text-orange-600" size={18} />;

    return <Activity className="text-gray-600" size={18} />;
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      {activities.length === 0 ? (
        <div className="text-gray-500 text-center py-12">
          No activity found
        </div>
      ) : (
        <div className="space-y-5">

          {activities.map((item) => (

            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-4 hover:bg-slate-50 rounded-xl transition p-2"
            >

              <div className="bg-slate-100 p-3 rounded-xl">
                {getIcon(item.action)}
              </div>

              <div className="flex-1">

                <p className="font-semibold">
                  {item.action}
                </p>

                <p className="text-sm text-gray-500">
                  {item.performed_by}
                </p>

              </div>

              <span className="text-xs text-gray-400">
                {new Date(item.timestamp).toLocaleDateString()}
              </span>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}