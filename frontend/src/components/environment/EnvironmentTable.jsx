import EnvironmentRow from "./EnvironmentRow";

export default function EnvironmentTable({
  environments,
  onEdit,
  onDelete,
}) {
  return (
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

          </tr>
        </thead>

        <tbody>

          {environments.length > 0 ? (

            environments.map((environment) => (

              <EnvironmentRow
                key={environment.id}
                environment={environment}
                onEdit={onEdit}
                onDelete={onDelete}
              />

            ))

          ) : (

            <tr>

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

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}