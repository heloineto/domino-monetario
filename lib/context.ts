import { createContext } from 'react';
import { useDrag, useGame } from './hooks';

export const GameContext = createContext<Partial<ReturnType<typeof useGame>>>({});
export const DragContext = createContext<Partial<ReturnType<typeof useDrag>>>({});
