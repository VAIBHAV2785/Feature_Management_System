import { Trash2 } from "lucide-react";

export default function GroupMemberRow({
  member,
  onRemove,
}) {
  return (
    <tr className="border-b">

      <td className="p-4">
        {member.username}
      </td>

      <td className="p-4">
        {member.email}
      </td>

      <td className="p-4 text-center">

        <button
          onClick={() => onRemove(member.id)}
          className="bg-red-500 text-white p-2 rounded-lg"
        >
          <Trash2 size={18} />
        </button>

      </td>

    </tr>
  );
}