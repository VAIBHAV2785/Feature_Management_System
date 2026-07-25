import {
  CheckCircle,
  Database,
  Server,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    name: "API Server",
    status: "Running",
    icon: Server,
  },
  {
    name: "Database",
    status: "Connected",
    icon: Database,
  },
  {
    name: "Authentication",
    status: "Secure",
    icon: ShieldCheck,
  },
];

export default function SystemStatus() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        System Status
      </h2>

      <div className="space-y-5">

        {services.map((service) => {

          const Icon = service.icon;

          return (

            <div
              key={service.name}
              className="flex items-center justify-between border rounded-2xl p-4 hover:shadow-md transition"
            >

              <div className="flex items-center gap-4">

                <div className="bg-green-100 p-3 rounded-xl">

                  <Icon
                    className="text-green-600"
                    size={22}
                  />

                </div>

                <div>

                  <h3 className="font-semibold">
                    {service.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Healthy
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 text-green-600 font-semibold">

                <CheckCircle size={18} />

                {service.status}

              </div>

            </div>

          );
        })}

      </div>
    </div>
  );
}