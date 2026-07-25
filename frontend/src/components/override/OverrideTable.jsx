import OverrideRow from "./OverrideRow";

export default function OverrideTable({
  overrides,
  onEdit,
  onDelete,
}) {

  if (overrides.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
        No Overrides Found
      </div>
    );
  }

  return (

    <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-800 text-white">

          <tr>

            <th className="p-4 text-left">
              Feature Flag
            </th>

            <th className="p-4 text-left">
              Environment
            </th>

            <th className="p-4 text-left">
              Override
            </th>

            <th className="p-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {overrides.map((override) => (

            <OverrideRow
              key={override.id}
              override={override}
              onEdit={onEdit}
              onDelete={onDelete}
            />

          ))}

        </tbody>

      </table>

    </div>

  );
}