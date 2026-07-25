import { Pencil, Trash2, Users } from "lucide-react";

export default function GroupRow({
  group,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-slate-50 transition">

      <td className="p-5 font-semibold text-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-100 p-2 rounded-lg">
            <Users size={18} className="text-indigo-600" />
          </div>

          <span>{group.group_name}</span>
        </div>
      </td>

      <td className="p-5 text-gray-500">
        No Description
      </td>

      <td className="p-5">
        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(group)}
            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 p-2 rounded-lg transition"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(group.id)}
            className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg transition"
          >
            <Trash2 size={18} />
          </button>

        </div>
      </td>

    </tr>
  );
}