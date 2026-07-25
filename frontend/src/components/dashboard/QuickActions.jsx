import {
  PlusCircle,
  Flag,
  Globe,
  Zap,
} from "lucide-react";

export default function QuickActions() {

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
      icon: <Zap size={22} />,
    },
  ];

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">

        {actions.map((action, index) => (

          <button
            key={index}
            className="w-full flex items-center gap-3
            bg-slate-100 hover:bg-blue-600 hover:text-white
            transition p-4 rounded-xl"
          >

            {action.icon}

            {action.title}

          </button>

        ))}

      </div>

    </div>

  );

}