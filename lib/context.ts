import { createContext } from 'react';
import { useGame } from './hooks';

export const GameContext = createContext<Partial<ReturnType<typeof useGame>>>({});
