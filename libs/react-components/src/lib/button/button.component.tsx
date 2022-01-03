import type {ReactNode} from 'react';
import classNames from 'classnames';

import styles from './button.module.css';

export interface ButtonProps {
  children: ReactNode,
  /** Configures the colour of the button */
  variant?: 'primary' | 'secondary',
}

export const Button = ({children, variant}: ButtonProps) => (
  <button
    className={classNames({
      [styles['g-button']]: true,
      [styles['g-button--secondary']]: variant === 'secondary',
    })}>
    {children}
  </button>
)
