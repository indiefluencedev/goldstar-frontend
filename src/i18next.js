import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import koTranslation from './locales/ko/translation.json';
import cnTranslation from './locales/cn/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ko: { translation: koTranslation },
      cn: { translation: cnTranslation },
    },
    lng: 'ko', // Default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
