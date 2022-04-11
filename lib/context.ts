import { createContext } from 'react';

export const TableContext = createContext<
  Partial<{ tableRef: RefObject<HTMLDivElement> }>
>({});

export const PlayerContext = createContext<
  Partial<{ dominos: Domino[]; setDominos: SetValue<Domino[]> }>
>({});
