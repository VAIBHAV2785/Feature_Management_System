<<<<<<< HEAD
import { useTranslation } from "react-i18next";
=======
>>>>>>> bcd60838 (MILESTONE 2)
import UserRow from "./UserRow";

export default function UserTable({
  users,
  onEdit,
  onDelete,
}) {
<<<<<<< HEAD
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
=======
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <table className="w-full">

        <thead className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">

          <tr>

            <th className="p-5 text-left">
              Username
            </th>

            <th className="p-5 text-left">
              Email
            </th>

            <th className="p-5 text-left">
              Group ID
            </th>

            <th className="p-5 text-center">
              Actions
>>>>>>> bcd60838 (MILESTONE 2)
            </th>

          </tr>

        </thead>

        <tbody>

          {users.length > 0 ? (

            users.map((user) => (
<<<<<<< HEAD

=======
>>>>>>> bcd60838 (MILESTONE 2)
              <UserRow
                key={user.id}
                user={user}
                onEdit={onEdit}
                onDelete={onDelete}
              />
<<<<<<< HEAD

=======
>>>>>>> bcd60838 (MILESTONE 2)
            ))

          ) : (

            <tr>

              <td
                colSpan="4"
                className="text-center py-10 text-gray-500"
              >
<<<<<<< HEAD
                {t("users.noUsers")}
=======
                No Users Found
>>>>>>> bcd60838 (MILESTONE 2)
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}