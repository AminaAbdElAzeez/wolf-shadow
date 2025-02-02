import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend"; 
import nextI18NextConfig from "../../next-i18next.config";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: nextI18NextConfig.i18n.defaultLocale,
    supportedLngs: nextI18NextConfig.i18n.locales,
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
