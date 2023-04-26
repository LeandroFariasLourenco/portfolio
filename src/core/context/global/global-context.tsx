import {
  createContext, useCallback, useContext, useEffect, useState,
} from 'react';
import { ELanguages } from 'src/core/models';
import portuguese from 'src/assets/intl/portuguese.json';
import english from 'src/assets/intl/english.json';
import { EDeviceType } from 'src/core/components/responsive/models/device-type.enum';
import { useTheme } from '@mui/system';
import { IGlobalContextProps } from './props.interface';
import { IGlobalContext } from './context.interface';

const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({
  children,
}: IGlobalContextProps) => {
  const getStoredLanguage = (): ELanguages => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      return storedLanguage as ELanguages;
    }
    return navigator.language as ELanguages;
  };

  const { breakpoints } = useTheme();
  const [language, setLanguage] = useState<ELanguages>(getStoredLanguage);

  const getScreenState = () => {
    if (window.innerWidth >= breakpoints.values.md) {
      return EDeviceType.DESKTOP;
    }

    if (window.innerWidth <= breakpoints.values.sm) {
      return EDeviceType.MOBILE;
    }

    return EDeviceType.TABLET;
  };

  const [deviceType, setDeviceType] = useState<EDeviceType>(getScreenState());

  const getMessages = () => {
    switch (language) {
      case ELanguages.Portuguese:
        return portuguese;
      default:
        return english;
    }
  };

  const [messages, setMessages] = useState<any>(getMessages());

  const handleWindowResize = useCallback(() => {
    setDeviceType(getScreenState());
  }, []);

  useEffect(() => {
    setMessages(getMessages());

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [language]);

  return (
    <GlobalContext.Provider value={{
      language,
      messages,
      setLanguage: (language) => {
        localStorage.setItem('language', language);
        setLanguage(language);
      },
      userDeviceType: deviceType,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
