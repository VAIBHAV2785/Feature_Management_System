import TargetingRuleRow from "./TargetingRuleRow";

export default function TargetingRuleTable({
  rules,
  onDelete,
}) {
  if (rules.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
        No Targeting Rules Found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-800 text-white">

          <tr>

            <th className="p-4 text-left">
              Feature Flag ID
            </th>

            <th className="p-4 text-left">
              Rule Type
            </th>

            <th className="p-4 text-left">
              Rule Value
            </th>

            <th className="p-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {rules.map((rule) => (

            <TargetingRuleRow
              key={rule.id}
              rule={rule}
              onDelete={onDelete}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}