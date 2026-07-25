import {
  Pencil,
  Trash2,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function EnvironmentRow({
  environment,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-slate-50 transition">

      {/* Environment Name */}
      <td className="p-4 font-semibold">
        {environment.name}
      </td>

      {/* Description */}
      <td className="p-4 text-gray-600">
        {environment.description || "-"}
      </td>

      {/* Status */}
      <td className="p-4">
        {environment.active ? (
          <span className="flex items-center gap-2 text-green-600 font-semibold">
            <CheckCircle size={18} />
            Active
          </span>
        ) : (
          <span className="flex items-center gap-2 text-red-600 font-semibold">
            <XCircle size={18} />
            Inactive
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="p-4">

        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(environment)}
            className="bg-yellow-100 hover:bg-yellow-200
            text-yellow-700 p-2 rounded-lg transition"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(environment.id)}
            className="bg-red-100 hover:bg-red-200
            text-red-600 p-2 rounded-lg transition"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>
  );
}