import GroupRow from "./GroupRow";

export default function GroupTable({
  groups,
  onEdit,
  onDelete,
}) {

  if(groups.length===0){

    return(

      <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">

        No User Groups Found

      </div>

    );

  }

  return(

    <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-800 text-white">

          <tr>

            <th className="p-4 text-left">
              Group Name
            </th>

            <th className="p-4 text-left">
              Description
            </th>

            <th className="p-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {groups.map((group)=>(

            <GroupRow
              key={group.id}
              group={group}
              onEdit={onEdit}
              onDelete={onDelete}
            />

          ))}

        </tbody>

      </table>

    </div>

  );

}