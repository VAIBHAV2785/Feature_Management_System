import { Pencil, Trash2 } from "lucide-react";

export default function UserRow({
  user,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-slate-50 transition">

      <td className="p-5 font-semibold">
        {user.username}
      </td>

      <td className="p-5">
        {user.email}
      </td>

      <td className="p-5">
        {user.group_id ?? "-"}
      </td>

      <td className="p-5">

        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(user)}
            className="bg-yellow-100 hover:bg-yellow-200
            text-yellow-700 p-2 rounded-lg transition"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(user.id)}
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