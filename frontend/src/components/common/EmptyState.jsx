export default function EmptyState({
  title = "No Data Found",
  colSpan = 10,
}) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        style={{
          textAlign: "center",
          padding: "50px",
          color: "#64748B",
          fontSize: "15px",
        }}
      >
        {title}
      </td>
    </tr>
  );
}