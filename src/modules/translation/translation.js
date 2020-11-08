import {Platform, NativeModules} from 'react-native';
import LocalizedStrings from 'react-localization';
import {language as en} from "./language/en";
import {language as es_mx} from "./language/es-mx";

class Translate {

    constructor() {
        this.defaultLanguage = 'es_mx';
        this.init();
    }

    init() {
        this.languages = new LocalizedStrings({
            [en.id]: en[en.id],
            [es_mx.id]: es_mx[es_mx.id]
        });
        this.languages.setLanguage(this.deviceLanguage())
    }

    t(key, options = {}) {
        return options ? this.languages[key] :
            this.languages.formatString(this.languages[key], options);
    }

    deviceLanguage() {
        let systemLanguage;
        if (Platform.OS !== 'web') {
            systemLanguage = Platform.OS === 'ios'
                ? NativeModules.SettingsManager.settings.AppleLocale ||
                NativeModules.SettingsManager.settings.AppleLanguages[0]
                : NativeModules.I18nManager.localeIdentifier;
        }
        systemLanguage = this.defaultLanguage;
        return systemLanguage.substr(0, 2);
    }
}

const translate = Object.freeze(new Translate());
export default translate;
