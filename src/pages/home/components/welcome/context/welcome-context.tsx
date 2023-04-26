import { createContext, useContext, useState } from 'react';
import { IWelcomeContext } from './context.interface';
import { IWelcomeProviderProps } from './props.interface';

const WelcomeContext = createContext<IWelcomeContext>({} as IWelcomeContext);

export const useWelcomeContext = () => useContext(WelcomeContext);

const WelcomeProvider = ({
  children,
}: IWelcomeProviderProps) => {
  const [playingGame, setPlayingGame] = useState<boolean>(false);

  return (
    <WelcomeContext.Provider value={{
      playingGame,
      setPlayingGame: (playing) => {
        setPlayingGame(playing);
      },
    }}
    >
      <>
        {children}
      </>
    </WelcomeContext.Provider>
  );
};

export default WelcomeProvider;
