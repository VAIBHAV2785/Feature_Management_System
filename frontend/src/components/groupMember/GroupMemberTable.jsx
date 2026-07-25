import GroupMemberRow from "./GroupMemberRow";

export default function GroupMemberTable({
  members,
  onRemove,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-800 text-white">

          <tr>

            <th className="p-4 text-left">
              Username
            </th>

            <th className="p-4 text-left">
              Email
            </th>

            <th className="p-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {members.map((member) => (

            <GroupMemberRow
              key={member.id}
              member={member}
              onRemove={onRemove}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}