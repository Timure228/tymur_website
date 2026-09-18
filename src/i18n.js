import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = process.env.REACT_APP_I18N_API_KEY;
const loadPath = "/locales.i18nexus-backup-2026-09-18T14-11-12-304Z/{{lng}}/{{ns}}.json";

i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // The default language
        fallbackLng: "en",

        ns: ["default"],
        defaultNS: "default",

        // Tt shows the supported languages
        supportedLngs: ["en", "de"],
        backend: {
            loadPath: loadPath,
        },
    });