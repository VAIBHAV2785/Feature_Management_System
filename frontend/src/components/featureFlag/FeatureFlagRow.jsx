<<<<<<< HEAD
import { Pencil, Trash2, CheckCircle, XCircle } from "lucide-react";
=======
import {
  Pencil,
  Trash2,
  CheckCircle,
  XCircle,
} from "lucide-react";
>>>>>>> bcd60838 (MILESTONE 2)

export default function FeatureFlagRow({
  flag,
  onEdit,
  onDelete,
}) {
<<<<<<< HEAD
  function getStatusBadge() {
    return flag.enabled ? (
      <span
        style={{
          background: "#DCFCE7",
          color: "#15803D",
          padding: "6px 14px",
          borderRadius: "20px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        <CheckCircle size={16} />
        Active
      </span>
    ) : (
      <span
        style={{
          background: "#FEE2E2",
          color: "#DC2626",
          padding: "6px 14px",
          borderRadius: "20px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        <XCircle size={16} />
        Disabled
      </span>
    );
  }

  function getTypeBadge(type) {
    const colors = {
      BOOLEAN: "#DBEAFE",
      STRING: "#F3E8FF",
      NUMBER: "#FEF3C7",
      JSON: "#DCFCE7",
    };

    const text = {
      BOOLEAN: "#2563EB",
      STRING: "#7C3AED",
      NUMBER: "#D97706",
      JSON: "#15803D",
    };

    return (
      <span
        style={{
          background: colors[type] || "#E5E7EB",
          color: text[type] || "#374151",
          padding: "6px 14px",
          borderRadius: "20px",
          fontWeight: 600,
          fontSize: "13px",
        }}
      >
        {type}
      </span>
    );
  }

  return (
    <tr
      style={{
        borderBottom: "1px solid #E5E7EB",
        transition: ".25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#F8FAFC";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "white";
      }}
    >
      <td
        style={{
          padding: 18,
          fontWeight: 700,
          color: "#1E293B",
        }}
      >
        {flag.key}
      </td>

      <td
        style={{
          padding: 18,
          color: "#64748B",
        }}
      >
        {flag.description || "-"}
      </td>

      <td
        style={{
          textAlign: "center",
          padding: 18,
        }}
      >
        {getTypeBadge(flag.type)}
      </td>

      <td
        style={{
          textAlign: "center",
          padding: 18,
        }}
      >
        {getStatusBadge()}
      </td>

      <td
        style={{
          textAlign: "center",
          padding: 18,
          fontWeight: 600,
        }}
      >
        {String(flag.default_value)}
      </td>

      <td
        style={{
          textAlign: "center",
          padding: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <button
            onClick={() => onEdit(flag)}
            style={{
              width: 42,
              height: 42,
              border: "none",
              borderRadius: 10,
              background: "#FEF3C7",
              color: "#D97706",
              cursor: "pointer",
            }}
=======
  return (
    <tr className="transition-all duration-300 hover:bg-blue-50">

      {/* Feature Key */}

      <td className="px-6 py-5">

        <div>

          <h3 className="font-bold text-slate-800">
            {flag.key}
          </h3>

          <p className="text-sm text-slate-500">
            {flag.description}
          </p>

        </div>

      </td>

      {/* Type */}

      <td className="px-6 py-5">

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">

          {flag.type}

        </span>

      </td>

      {/* Owner */}

      <td className="px-6 py-5">

        <span className="font-medium">

          {flag.owner_team}

        </span>

      </td>

      {/* Status */}

      <td className="px-6 py-5 text-center">

        {flag.enabled ? (

          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

            <CheckCircle size={16} />

            Enabled

          </span>

        ) : (

          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">

            <XCircle size={16} />

            Disabled

          </span>

        )}

      </td>

      {/* Rollout */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
              style={{
                width: `${flag.rollout_percentage}%`,
              }}
            />

          </div>

          <span className="font-semibold text-slate-700">

            {flag.rollout_percentage}%

          </span>

        </div>

      </td>

      {/* Actions */}

      <td className="px-6 py-5">

        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(flag)}
            className="rounded-xl bg-blue-100 p-3 text-blue-600 transition hover:scale-110 hover:bg-blue-600 hover:text-white"
>>>>>>> bcd60838 (MILESTONE 2)
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(flag.id)}
<<<<<<< HEAD
            style={{
              width: 42,
              height: 42,
              border: "none",
              borderRadius: 10,
              background: "#FEE2E2",
              color: "#DC2626",
              cursor: "pointer",
            }}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
=======
            className="rounded-xl bg-red-100 p-3 text-red-600 transition hover:scale-110 hover:bg-red-600 hover:text-white"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </td>

>>>>>>> bcd60838 (MILESTONE 2)
    </tr>
  );
}