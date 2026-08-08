import { Search } from "lucide-react";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";
=======
>>>>>>> bcd60838 (MILESTONE 2)

export default function SearchBar({
  value,
  onChange,
}) {
<<<<<<< HEAD
  const { t } = useTranslation();

=======
>>>>>>> bcd60838 (MILESTONE 2)
  return (
    <div className="relative w-96">

      <Search
        size={18}
        className="absolute left-4 top-3.5 text-gray-400"
      />

      <input
        type="text"
<<<<<<< HEAD
        placeholder={t("users.search")}
=======
        placeholder="Search users..."
>>>>>>> bcd60838 (MILESTONE 2)
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-11 pr-4 py-3 border rounded-xl
        focus:ring-2 focus:ring-blue-500
        focus:outline-none"
      />

    </div>
  );
}