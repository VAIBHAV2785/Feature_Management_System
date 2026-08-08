import { Pencil, Trash2, CheckCircle, XCircle } from "lucide-react";

export default function FeatureFlagRow({
  flag,
  onEdit,
  onDelete,
}) {
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
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(flag.id)}
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
    </tr>
  );
}