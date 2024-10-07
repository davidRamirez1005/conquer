import { ref, provide, inject } from 'vue';
import es from '../utils/translations/es.json';
import en from '../utils/translations/en.json';

const LanguageSymbol = Symbol('language');

export const useLanguage = () => {
  const language = ref('es'); // Idioma por defecto
  const translations = ref(es);

  const changeLanguage = (lang) => {
    language.value = lang;
    translations.value = lang === 'es' ? es : en;
  };

  provide(LanguageSymbol, { language, translations, changeLanguage });
};

export const useLanguageProvider = () => {
  const context = inject(LanguageSymbol);
  if (!context) {
    throw new Error('useLanguageProvider must be used within a provider');
  }
  return context;
};
