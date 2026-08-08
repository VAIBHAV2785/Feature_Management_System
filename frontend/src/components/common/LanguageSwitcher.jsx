import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    const lang = e.target.value;

    i18n.changeLanguage(lang);

    localStorage.setItem("language", lang);
  };

  return (
    <select
      value={i18n.language}
      onChange={changeLanguage}
      style={{
        padding: "10px 14px",
        borderRadius: "10px",
        border: "1px solid #CBD5E1",
        background: "#fff",
        cursor: "pointer",
        fontWeight: 600,
      }}
    >
      <option value="en">🇺🇸 English</option>
      <option value="hi">🇮🇳 हिन्दी</option>
      <option value="fr">🇫🇷 Français</option>
      <option value="de">🇩🇪 Deutsch</option>
      <option value="es">🇪🇸 Español</option>
    </select>
  );
}