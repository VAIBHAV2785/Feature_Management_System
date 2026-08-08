import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "320px",
      }}
    >
      <Search
        size={18}
        style={{
          position: "absolute",
          left: "12px",
          top: "12px",
          color: "#64748B",
        }}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "10px 12px 10px 40px",
          border: "1px solid #CBD5E1",
          borderRadius: "10px",
          outline: "none",
        }}
      />
    </div>
  );
}