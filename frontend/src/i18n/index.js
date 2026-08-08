import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";
import fr from "./locales/fr/translation.json";
import de from "./locales/de/translation.json";
import es from "./locales/es/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      hi: {
        translation: hi,
      },
      fr: {
        translation: fr,
      },
      de: {
        translation: de,
      },
      es: {
        translation: es,
      },
    },

    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
