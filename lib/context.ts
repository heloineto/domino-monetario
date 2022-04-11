import { createContext } from 'react';
import { useGame } from './hooks';

export const GameContext = createContext<Partial<ReturnType<typeof useGame>>>({});

export const PlayerContext = createContext<
  Partial<{ dominos: Domino[]; setDominos: SetValue<Domino[]> }>
>({});
