import { createContext } from 'react';

export const TableContext = createContext<
  Partial<{ tableRef: RefObject<HTMLDivElement> }>
>({});
