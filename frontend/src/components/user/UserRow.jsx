import { Pencil, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function UserRow({
  user,
  onEdit,
  onDelete,
}) {
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

        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(user)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Pencil size={16} />
            {t("common.edit")}
          </button>

          <button
            onClick={() => onDelete(user.id)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            <Trash2 size={16} />
            {t("common.delete")}
          </button>

        </div>

      </td>

    </tr>
  );
}