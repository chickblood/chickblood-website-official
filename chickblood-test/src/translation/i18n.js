import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { TRANSLATION_EN } from "./en/trans_en";
import { TRANSLATION_CHN } from "./chn/trans_chn";
import { TRANSLATION_KRN } from "./krn/trans_krn";
import { TRANSLATION_JPN } from "./jpn/trans_jpn";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: TRANSLATION_EN,
      },
      chn: {
        translation: TRANSLATION_CHN,
      },
      krn: {
        translation: TRANSLATION_KRN,
      },
      jpn: {
        translation: TRANSLATION_JPN,
      },
    },
  });

export default i18n;
