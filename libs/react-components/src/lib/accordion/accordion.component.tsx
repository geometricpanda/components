import {ReactNode} from 'react';
import styles from './accordion.module.css';

export interface AccordionProps {
  children: ReactNode;
}

export const Accordion = ({children}: AccordionProps) => (
  <div className={styles['g-accordion']}>
    {children}
  </div>
)
