import EnvironmentRow from "./EnvironmentRow";

export default function EnvironmentTable({
  environments,
  onEdit,
  onDelete,
}) {
  return (
<<<<<<< HEAD
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead
          style={{
            background: "#1E293B",
            color: "#fff",
          }}
        >
          <tr>

            <th
              style={{
                padding: 18,
                textAlign: "left",
              }}
            >
              Environment
            </th>

            <th
              style={{
                padding: 18,
                textAlign: "left",
              }}
            >
              Description
            </th>

            <th
              style={{
                padding: 18,
                textAlign: "center",
              }}
            >
              Status
            </th>

            <th
              style={{
                padding: 18,
                textAlign: "center",
              }}
            >
              Actions
            </th>

=======
    <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">

      <table className="w-full min-w-[700px]">

        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
>>>>>>> bcd60838 (MILESTONE 2)
          </tr>
        </thead>

        <tbody>

          {environments.length > 0 ? (

            environments.map((environment) => (
<<<<<<< HEAD

=======
>>>>>>> bcd60838 (MILESTONE 2)
              <EnvironmentRow
                key={environment.id}
                environment={environment}
                onEdit={onEdit}
                onDelete={onDelete}
              />
<<<<<<< HEAD

=======
>>>>>>> bcd60838 (MILESTONE 2)
            ))

          ) : (

            <tr>
<<<<<<< HEAD

              <td
                colSpan="4"
                style={{
                  padding: 80,
                  textAlign: "center",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 15,
                  }}
                >

                  <div style={{ fontSize: 70 }}>
                    🌍
                  </div>

                  <h2>No Environments Found</h2>

                  <p
                    style={{
                      color: "#64748B",
                    }}
                  >
                    Create your first environment.
                  </p>

                </div>

              </td>

=======
              <td
                colSpan="4"
                className="text-center py-10 text-gray-500"
              >
                No Environments Found
              </td>
>>>>>>> bcd60838 (MILESTONE 2)
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}