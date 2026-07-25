import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative w-full max-w-md">

      <Search
        className="absolute left-3 top-3.5 text-gray-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Search Environment..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-xl pl-10 pr-4 py-3
        focus:outline-none focus:ring-2 focus:ring-green-500"
      />

    </div>
  );
}