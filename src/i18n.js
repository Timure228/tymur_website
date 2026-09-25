import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import de from './locales/de/translation.json';

i18n
    .use(LanguageDetector)     // erkennt Browsersprache automatisch
    .use(initReactI18next)     // verbindet i18next mit React
    .init({
        resources: {
            en: { translation: en },
            de: { translation: de },
        },
        fallbackLng: 'en',        // Standardsprache, falls nichts erkannt wird
        interpolation: { escapeValue: false }, // React escaped selbst, daher hier deaktiviert
    });

export default i18n;