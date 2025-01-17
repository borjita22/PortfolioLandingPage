// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import ChainedBackend from 'i18next-chained-backend';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    lng: 'es', // default language
    fallbackLng: 'es',
    debug: true, // set to false in production
    
    ns: ['translation', 'projects'], // namespaces
    defaultNS: 'translation',
    
    interpolation: {
      escapeValue: false,
    },

    backend: {
      backends: [
        Backend,
        Backend
      ],
      backendOptions: [{
        loadPath: '/locales/{{lng}}.json',
      }, {
        loadPath: '/locales/{{lng}}/projects.json',
      }]
    },
  });

export default i18n;