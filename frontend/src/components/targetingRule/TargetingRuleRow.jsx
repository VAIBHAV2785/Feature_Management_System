import { Trash2 } from "lucide-react";

export default function TargetingRuleRow({
  rule,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-slate-50">

      <td className="p-4">
        {rule.flag_id}
      </td>

      <td className="p-4">
        {rule.rule_type}
      </td>

      <td className="p-4">
        {rule.rule_value}
      </td>

      <td className="p-4 text-center">

        <button
          onClick={() => onDelete(rule.id)}
          className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
        >
          <Trash2 size={18} />
        </button>

      </td>

    </tr>
  );
}