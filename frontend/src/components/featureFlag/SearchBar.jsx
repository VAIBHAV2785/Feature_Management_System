import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative w-96">

      <Search
        size={18}
        className="absolute left-3 top-3 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Feature Flag..."
        className="w-full pl-10 pr-4 py-3 rounded-xl
        border border-gray-300
        focus:ring-2 focus:ring-blue-500
        focus:outline-none"
      />

    </div>
  );
}