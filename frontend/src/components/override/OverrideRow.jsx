import { Pencil, Trash2 } from "lucide-react";

export default function OverrideRow({
  override,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-slate-50 transition">

      <td className="p-4 font-semibold">
        {override.flag_name}
      </td>

      <td className="p-4">
        {override.environment_name}
      </td>

      <td className="p-4">
        {override.value ? (
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
            Enabled
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold">
            Disabled
          </span>
        )}
      </td>

      <td className="p-4">
        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(override)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(override.id)}
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
          >
            <Trash2 size={18} />
          </button>

        </div>
      </td>

    </tr>
  );
}