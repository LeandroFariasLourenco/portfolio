import { ELanguages } from 'src/core/models';
import { EDeviceType } from '../../components/responsive/models/device-type.enum';

export interface IGlobalContext {
  language: ELanguages;
  setLanguage: (language: ELanguages) => void;
  messages: any;
  userDeviceType: EDeviceType;
}
