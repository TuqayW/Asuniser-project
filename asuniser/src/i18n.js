import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LocizeBackend from 'i18next-locize-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LocizeBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    supportedLngs: ['az', 'ru'],
    backend: {
      projectId: '2374861a-1a2f-437e-9fc3-6b1a1e4f3eae',
      apiKey: '92551a0e-9db8-4484-8e0f-d40be451d93f',
      referenceLng: 'ru',
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    saveMissing: true,
  });

export default i18n;
