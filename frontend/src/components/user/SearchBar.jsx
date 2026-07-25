import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative w-96">

      <Search
        size={18}
        className="absolute left-4 top-3.5 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search users..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-11 pr-4 py-3 border rounded-xl
        focus:ring-2 focus:ring-blue-500
        focus:outline-none"
      />

    </div>
  );
}