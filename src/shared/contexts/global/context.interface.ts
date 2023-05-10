import { ELanguages, EDeviceType } from '@/shared/models';

export interface IGlobalContext {
  language: ELanguages;
  setLanguage: (language: ELanguages) => void;
  messages: any;
  userDeviceType: EDeviceType;
}
