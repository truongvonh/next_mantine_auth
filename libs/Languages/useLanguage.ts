import { NextRouter, useRouter } from 'next/router';
import ButtonLang from './Button';
import IButtonLang from './Button/interface';
import CommonLang from './Common';
import ICommonLang from './Common/interface';
import InputLang from './Input';
import IInputLang from './Input/interface';
import LangEnums from './lang.enums';

export interface ILanguageHook {
  lang: LangEnums;
  LanguageOfButton: IButtonLang;
  CommonLang: ICommonLang;
  LanguageOfInput: IInputLang;
}

export interface IRouterHook extends NextRouter {
  locale: LangEnums;
}

function useLanguage(): ILanguageHook {
  const { locale: lang } = useRouter() as IRouterHook;

  return {
    lang,
    LanguageOfButton: ButtonLang[lang],
    LanguageOfInput: InputLang[lang],
    CommonLang: CommonLang[lang],
  };
}

export default useLanguage;
