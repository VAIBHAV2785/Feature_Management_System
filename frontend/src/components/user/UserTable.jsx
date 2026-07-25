import UserRow from "./UserRow";

export default function UserTable({
  users,
  onEdit,
  onDelete,
}) {
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
                No Users Found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}