export default function Table({
  columns,
  children,
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
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
            background: "#23324A",
            color: "white",
          }}
        >
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                style={{
                  padding: "16px",
                  textAlign: "left",
                  fontWeight: 600,
                }}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
}