import { createContext, useContext, useEffect } from 'react';
import { IGlobalProviderProps } from './global';
import store from './store';

const GlobalContext = createContext(store);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({
  children,
}: IGlobalProviderProps) => {
  useEffect(() => {
    store.setupStoredLanguage();
  }, []);

  return (
    <GlobalContext.Provider value={store}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
