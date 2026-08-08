import { useTranslation } from "react-i18next";
import UserRow from "./UserRow";

export default function UserTable({
  users,
  onEdit,
  onDelete,
}) {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow border">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="text-left p-4">
              {t("users.username")}
            </th>

            <th className="text-left p-4">
              {t("users.email")}
            </th>

            <th className="text-left p-4">
              {t("users.group")}
            </th>

            <th className="text-center p-4">
              {t("common.actions")}
            </th>

          </tr>

        </thead>

        <tbody>

          {users.length > 0 ? (

            users.map((user) => (

              <UserRow
                key={user.id}
                user={user}
                onEdit={onEdit}
                onDelete={onDelete}
              />

            ))

          ) : (

            <tr>

              <td
                colSpan="4"
                className="text-center py-10 text-gray-500"
              >
                {t("users.noUsers")}
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}