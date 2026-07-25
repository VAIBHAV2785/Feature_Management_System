import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative w-80">

      <Search
        className="absolute left-3 top-3.5 text-gray-400"
        size={18}
      />

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search..."
        className="w-full border rounded-lg pl-10 p-3"
      />

    </div>
  );
}