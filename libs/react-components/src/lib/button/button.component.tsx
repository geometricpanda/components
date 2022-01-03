import type {ReactNode} from 'react';
import classNames from 'classnames';

import styles from './button.module.css';

export interface ButtonProps {
  children: ReactNode,
}

export const Button = ({children}: ButtonProps) => (
  <button
    className={classNames({
      [styles['g-button']]: true,
    })}>
    {children}
  </button>
)
