'use client';

import {
  createContext, useCallback, useContext, useEffect, useState,
} from 'react';
import { ELanguages, EDeviceType } from '@/shared/models';
import portuguese from '@/../public/intl/portuguese.json';
import english from '@/../public/intl/english.json';
import { IHomeContextProps } from './props.interface';
import { IGlobalContext } from './context.interface';
import { APP } from '@/shared/constants/app';
import { useLocalStorage } from '@/shared/hooks';

const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({
  children,
}: IHomeContextProps) => {
  const [storedLanguage, setStoredLanguage] = useLocalStorage<ELanguages>('language', ELanguages.English);

  const [contextLanguage, setContextLanguage] = useState<ELanguages>(storedLanguage);

  const getScreenState = () => {
    if (typeof window === 'undefined') return EDeviceType.TABLET;

    if (window.innerWidth >= APP.breakpoints.md) {
      return EDeviceType.DESKTOP;
    }

    return EDeviceType.TABLET
  };

  const [deviceType, setDeviceType] = useState<EDeviceType>(getScreenState());

  const getMessages = () => {
    switch (contextLanguage) {
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
    if (!window) return;

    setMessages(getMessages());

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [contextLanguage]);

  return (
    <GlobalContext.Provider value={{
      language: contextLanguage,
      messages,
      setLanguage: (language) => {
        setContextLanguage(language);
        setStoredLanguage(language);
      },
      userDeviceType: deviceType,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
