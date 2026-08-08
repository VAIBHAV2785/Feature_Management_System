import FeatureFlagRow from "./FeatureFlagRow";

export default function FeatureFlagTable({
  flags,
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
              Feature Key
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
              Type
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
              Default Value
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

          {flags.length > 0 ? (

            flags.map((flag) => (

              <FeatureFlagRow
                key={flag.id}
                flag={flag}
                onEdit={onEdit}
                onDelete={onDelete}
              />

            ))

          ) : (

            <tr>

              <td
                colSpan="6"
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

                  <div
                    style={{
                      fontSize: 70,
                    }}
                  >
                    🚩
                  </div>

                  <h2>No Feature Flags Found</h2>

                  <p
                    style={{
                      color: "#64748B",
                    }}
                  >
                    Create your first feature flag to start managing releases.
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