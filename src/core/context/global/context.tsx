import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { ELanguages } from 'src/core/models';
import portuguese from 'src/assets/intl/portuguese.json';
import english from 'src/assets/intl/english.json';
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

  const [language, setLanguage] = useState<ELanguages>(getStoredLanguage);

  const getMessages = () => {
    switch (language) {
      case ELanguages.Portuguese:
        return portuguese;
      default:
        return english;
    }
  };

  const [messages, setMessages] = useState<any>(getMessages());

  useEffect(() => {
    setMessages(getMessages());
  }, [language]);

  return (
    <GlobalContext.Provider value={{
      language,
      messages,
      setLanguage: (language) => {
        localStorage.setItem('language', language);
        setLanguage(language);
      },
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
