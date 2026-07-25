import {
  Pencil,
  Trash2,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function FeatureFlagRow({
  flag,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="transition-all duration-300 hover:bg-blue-50">

      {/* Feature Key */}

      <td className="px-6 py-5">

        <div>

          <h3 className="font-bold text-slate-800">
            {flag.key}
          </h3>

          <p className="text-sm text-slate-500">
            {flag.description}
          </p>

        </div>

      </td>

      {/* Type */}

      <td className="px-6 py-5">

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">

          {flag.type}

        </span>

      </td>

      {/* Owner */}

      <td className="px-6 py-5">

        <span className="font-medium">

          {flag.owner_team}

        </span>

      </td>

      {/* Status */}

      <td className="px-6 py-5 text-center">

        {flag.enabled ? (

          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

            <CheckCircle size={16} />

            Enabled

          </span>

        ) : (

          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">

            <XCircle size={16} />

            Disabled

          </span>

        )}

      </td>

      {/* Rollout */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
              style={{
                width: `${flag.rollout_percentage}%`,
              }}
            />

          </div>

          <span className="font-semibold text-slate-700">

            {flag.rollout_percentage}%

          </span>

        </div>

      </td>

      {/* Actions */}

      <td className="px-6 py-5">

        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(flag)}
            className="rounded-xl bg-blue-100 p-3 text-blue-600 transition hover:scale-110 hover:bg-blue-600 hover:text-white"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(flag.id)}
            className="rounded-xl bg-red-100 p-3 text-red-600 transition hover:scale-110 hover:bg-red-600 hover:text-white"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>
  );
}