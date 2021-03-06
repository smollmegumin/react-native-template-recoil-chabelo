import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './en.json';
import es from './es.json';

i18n.fallbacks = true;
i18n.translations = { en, es };

i18n.locale = Localization.locale || 'en';

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof en;

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];



// "common.ok"

// "common": {
//     "ok": "OK!",
//     "cancel": "Cancel",
//     "back": "Back"
//   },

// TObj = {"common":{...common}}

// TKey = "common"

// value = {
//     "ok": "OK!",
//     "cancel": "Cancel",
//     "back": "Back"
//   }

// example ----  1:{"example":1}
