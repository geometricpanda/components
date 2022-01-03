import type {ReactNode} from 'react';
import './theme';

export interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => (
  {children}
);

