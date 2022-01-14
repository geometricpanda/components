import type {ReactNode} from 'react';
import './theme/index.css';

export interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => (
  <>
    {children}
  </>
);

