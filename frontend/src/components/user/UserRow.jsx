import { Pencil, Trash2 } from "lucide-react";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";
=======
>>>>>>> bcd60838 (MILESTONE 2)

export default function UserRow({
  user,
  onEdit,
  onDelete,
}) {
<<<<<<< HEAD
  const { t } = useTranslation();

  return (
    <tr className="border-t hover:bg-gray-50 transition">

      <td className="p-4">
        {user.username}
      </td>

      <td className="p-4">
        {user.email}
      </td>

      <td className="p-4">
        {user.group_id ?? "-"}
      </td>

      <td className="p-4">
=======
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
>>>>>>> bcd60838 (MILESTONE 2)

        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(user)}
<<<<<<< HEAD
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Pencil size={16} />
            {t("common.edit")}
=======
            className="bg-yellow-100 hover:bg-yellow-200
            text-yellow-700 p-2 rounded-lg transition"
          >
            <Pencil size={18} />
>>>>>>> bcd60838 (MILESTONE 2)
          </button>

          <button
            onClick={() => onDelete(user.id)}
<<<<<<< HEAD
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            <Trash2 size={16} />
            {t("common.delete")}
=======
            className="bg-red-100 hover:bg-red-200
            text-red-600 p-2 rounded-lg transition"
          >
            <Trash2 size={18} />
>>>>>>> bcd60838 (MILESTONE 2)
          </button>

        </div>

      </td>

    </tr>
  );
}