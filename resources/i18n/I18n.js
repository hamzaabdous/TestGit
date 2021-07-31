import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
      Title: 'Title',
      Identify: 'Identify',
      Add: 'Add',
      Delete: 'Delete',
      Search: 'Search',
      GotoFavoris: 'Go to Favoris',
      getTitle: 'Get Title',
      getid: 'Get id',
      storeData: 'Store Data',
    },
  },
  fr: {
    translation: {
      Title: 'Titre',
      Identify: 'Identifier',
      Add: 'Ajouter',
      Delete: 'Supprime',
      Search: 'Chercher',
      GotoFavoris: 'Aller a Favoris',
    },
  },
  ar: {
    translation: {
      Title: 'العنوان',
      Identify: 'تعريف',
      Add: 'أضف',
      Delete: 'حذف',
      Search: 'بحث',
      GotoFavoris: ' الذهاب إلى المفضل',
      getTitle: ' اكتب العنوان',
      getid: 'اكتب معرف',
      storeData: 'إحفظ البيانات',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: I18nManager.isRTL ? 'ar' : 'en',

    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
