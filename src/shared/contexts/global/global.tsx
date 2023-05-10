'use client'

import {
  createContext, useCallback, useContext, useEffect, useState,
} from 'react';
import { ELanguages, EDeviceType } from '@/shared/models';
import portuguese from '@/../public/intl/portuguese.json';
import english from '@/../public/intl/english.json';
import { IHomeContextProps } from './props.interface';
import { IGlobalContext } from './context.interface';
import { APP } from '@/shared/constants/app';

const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({
  children,
}: IHomeContextProps) => {
  const getStoredLanguage = (): ELanguages => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      return storedLanguage as ELanguages;
    }
    return navigator.language as ELanguages;
  };

  const [language, setLanguage] = useState<ELanguages>(getStoredLanguage);

  const getScreenState = () => {
    if (window.innerWidth >= APP.breakpoints.md) {
      return EDeviceType.DESKTOP;
    }

    if (window.innerWidth <= APP.breakpoints.sm) {
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
    // setMessages(getMessages());

    // window.addEventListener('resize', handleWindowResize);

    // return () => {
    //   window.removeEventListener('resize', handleWindowResize);
    // };
  }, [language]);

  return (
    <GlobalContext.Provider value={{
      language,
      messages,
      setLanguage: (language) => {
        // localStorage.setItem('language', language);
        // setLanguage(language);
      },
      userDeviceType: deviceType,
    }
    }
    >
      {children}
    </GlobalContext.Provider>
  );
};
