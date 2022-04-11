import { createContext } from 'react';
import { useGame } from './hooks';

export const GameContext = createContext<
  Partial<ReturnType<typeof useGame>> & {
    playerDominos: Set<Domino>;
    enemyDominos: Set<Domino>;
  }
>({
  playerDominos: new Set<Domino>(),
  enemyDominos: new Set<Domino>(),
});
