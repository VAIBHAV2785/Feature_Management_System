import {
  Pencil,
  Trash2,
  CheckCircle,
<<<<<<< HEAD
=======
  XCircle,
>>>>>>> bcd60838 (MILESTONE 2)
} from "lucide-react";

export default function EnvironmentRow({
  environment,
  onEdit,
  onDelete,
}) {
<<<<<<< HEAD

  function getEnvironmentBadge(name) {

    const env = name.toLowerCase();

    if (env.includes("prod")) {

      return {
        bg: "#FEE2E2",
        color: "#DC2626",
        label: "PRODUCTION",
      };

    }

    if (env.includes("stag")) {

      return {
        bg: "#F3E8FF",
        color: "#7C3AED",
        label: "STAGING",
      };

    }

    if (env.includes("test")) {

      return {
        bg: "#DBEAFE",
        color: "#2563EB",
        label: "TEST",
      };

    }

    return {

      bg: "#DCFCE7",
      color: "#15803D",
      label: "DEVELOPMENT",

    };

  }

  const badge = getEnvironmentBadge(environment.name);

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

      <td style={{ padding: 18 }}>

        <div>

          <div
            style={{
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            {environment.name}
          </div>

          <div
            style={{
              marginTop: 8,
            }}
          >

            <span

              style={{

                background: badge.bg,

                color: badge.color,

                padding: "6px 14px",

                borderRadius: 20,

                fontWeight: 600,

                fontSize: 13,

              }}

            >

              {badge.label}

            </span>

          </div>

        </div>

      </td>

      <td
        style={{
          padding: 18,
          color: "#64748B",
        }}
      >
        {environment.description || "-"}
      </td>

      <td
        style={{
          textAlign: "center",
          padding: 18,
        }}
      >

        <span

          style={{

            background: "#DCFCE7",

            color: "#15803D",

            padding: "6px 14px",

            borderRadius: 20,

            display: "inline-flex",

            alignItems: "center",

            gap: 6,

            fontWeight: 600,

          }}

        >

          <CheckCircle size={16} />

          Active

        </span>

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

            onClick={() => onEdit(environment)}

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

            onClick={() => onDelete(environment.id)}

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

=======
  return (
    <tr className="border-b hover:bg-slate-50 transition">

      {/* Environment Name */}
      <td className="p-4 font-semibold">
        {environment.name}
      </td>

      {/* Description */}
      <td className="p-4 text-gray-600">
        {environment.description || "-"}
      </td>

      {/* Status */}
      <td className="p-4">
        {environment.active ? (
          <span className="flex items-center gap-2 text-green-600 font-semibold">
            <CheckCircle size={18} />
            Active
          </span>
        ) : (
          <span className="flex items-center gap-2 text-red-600 font-semibold">
            <XCircle size={18} />
            Inactive
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="p-4">

        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(environment)}
            className="bg-yellow-100 hover:bg-yellow-200
            text-yellow-700 p-2 rounded-lg transition"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(environment.id)}
            className="bg-red-100 hover:bg-red-200
            text-red-600 p-2 rounded-lg transition"
          >
            <Trash2 size={18} />
>>>>>>> bcd60838 (MILESTONE 2)
          </button>

        </div>

      </td>

    </tr>
<<<<<<< HEAD

  );

=======
  );
>>>>>>> bcd60838 (MILESTONE 2)
}