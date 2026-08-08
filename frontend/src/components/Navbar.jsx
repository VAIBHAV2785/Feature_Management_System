import { Bell } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./common/LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        height: "70px",
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 25px",
      }}
    >
      <h2>{t("navbar.title")}</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <LanguageSwitcher />
        <Bell size={22} />
      </div>
    </div>
  );
}