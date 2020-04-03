import * as Localization from "expo-localization";
import i18n from "i18n-js";

import translationEng from "./locales/en/translation.json";
import translationEsp from "./locales/es/translation.json";

i18n.translations = {
  en: translationEng,
  ja: translationEsp
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;
