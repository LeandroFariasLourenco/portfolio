import { createContext, useContext, useState } from "react";
import { IStackContext } from "./context.interface";
import { IStackContextProps } from "./props.interface";

const StackContext = createContext<IStackContext>({} as IStackContext);

export const useStackContext = () => useContext(StackContext);

const StackProvider = ({
  children
}: IStackContextProps) => {
  const [languageTab, setLanguageTab] = useState<string>('');
  const [technologyTab, setTechnologyTab] = useState<string>('');

  return (
    <StackContext.Provider
      value={{
        selected: {
          languageTab,
          setLanguageTab: (language) => {
            setLanguageTab(language);
          },
          setSelectedTechnologyTab: (technology) => {
            setTechnologyTab(technology);
          },
          technologyTab
        }
      }}
    >
      {children}
    </StackContext.Provider>
  );
};

export default StackProvider;
