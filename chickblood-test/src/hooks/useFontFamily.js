// useFontFamily.js
import { useTranslation } from "react-i18next";

const useFontFamily = () => {
  const { i18n } = useTranslation();

  const getFontFamily = () => {
    switch (i18n.language) {
      case "en":
        return "CHeiHK-UltraBold";
      case "krn":
        return "Pretendard";
      case "chn":
        return "DHeiFanTi";
      case "jpn":
        return "Hiragiro-Mincho-Pro-W3";
      default:
        return "CHeiHK-UltraBold";
    }
  };

  return getFontFamily();
};

export default useFontFamily;
