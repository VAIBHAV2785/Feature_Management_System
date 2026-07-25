import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative w-80">

      <Search
        size={18}
        className="absolute left-3 top-3 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search User Group..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg pl-10 pr-4 py-2"
      />

    </div>
  );
}