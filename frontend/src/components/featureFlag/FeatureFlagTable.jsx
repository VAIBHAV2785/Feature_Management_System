import FeatureFlagRow from "./FeatureFlagRow";
import { Flag } from "lucide-react";

export default function FeatureFlagTable({
  flags,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

      {/* Table Header */}

      <div className="flex items-center justify-between border-b bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-5">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-600 p-3 text-white">
            <Flag size={22} />
          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Feature Flags
            </h2>

            <p className="text-sm text-slate-300">
              Manage rollout and release configuration
            </p>

          </div>

        </div>

        <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
          {flags.length} Flags
        </span>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr className="text-sm uppercase tracking-wider text-slate-600">

              <th className="px-6 py-5 text-left">
                Feature Key
              </th>

              <th className="px-6 py-5 text-left">
                Type
              </th>

              <th className="px-6 py-5 text-left">
                Owner
              </th>

              <th className="px-6 py-5 text-center">
                Status
              </th>

              <th className="px-6 py-5 text-center">
                Rollout
              </th>

              <th className="px-6 py-5 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody className="divide-y divide-slate-100">

            {flags.length ? (

              flags.map((flag) => (
                <FeatureFlagRow
                  key={flag.id}
                  flag={flag}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))

            ) : (

              <tr>

                <td
                  colSpan={6}
                  className="py-20 text-center"
                >

                  <div className="flex flex-col items-center">

                    <div className="mb-4 rounded-full bg-slate-100 p-6">

                      <Flag
                        size={40}
                        className="text-slate-400"
                      />

                    </div>

                    <h2 className="text-2xl font-bold text-slate-700">
                      No Feature Flags Found
                    </h2>

                    <p className="mt-2 text-slate-500">
                      Create your first feature flag to begin.
                    </p>

                  </div>

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}