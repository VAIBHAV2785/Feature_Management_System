import EnvironmentRow from "./EnvironmentRow";

export default function EnvironmentTable({
  environments,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">

      <table className="w-full min-w-[700px]">

        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>

          {environments.length > 0 ? (

            environments.map((environment) => (
              <EnvironmentRow
                key={environment.id}
                environment={environment}
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
                No Environments Found
              </td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}