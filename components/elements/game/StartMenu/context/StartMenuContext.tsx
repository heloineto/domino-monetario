import { createContext, useContext } from 'react';

const StartMenuContext = createContext<
  | {
      coins: boolean;
      setCoins: Dispatch<SetStateAction<boolean>>;
      bills: boolean;
      setBills: Dispatch<SetStateAction<boolean>>;
      rounds: number;
      setRounds: Dispatch<SetStateAction<number>>;
      initialHandSize: string;
      setInitialHandSize: Dispatch<SetStateAction<string>>;
    }
  | undefined
>(undefined);

interface StartMenuProviderProps
  extends ComponentProps<typeof StartMenuContext.Provider> {}

export const StartMenuProvider = (props: StartMenuProviderProps) => {
  return <StartMenuContext.Provider {...props} />;
};

export const useStartMenu = () => {
  const startMenu = useContext(StartMenuContext);

  if (startMenu === undefined || startMenu === null) {
    throw new Error("StartMenuContext's context is null or undefined");
  }

  return startMenu;
};
