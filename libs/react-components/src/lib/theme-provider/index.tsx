import type {ReactNode} from 'react';
import './theme/index.css';
import {clearAnnouncer} from '@react-aria/live-announcer';

export interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  clearAnnouncer('assertive');
  return (
    (
      <>
        {children}
      </>
    )
  )
};

