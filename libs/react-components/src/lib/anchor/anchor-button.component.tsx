import {ComponentProps, forwardRef, ReactNode} from 'react';
import styles from './anchor.module.css';
import classNames from 'classnames';

export interface AnchorButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  /** Variant allows us to configure the colour */
  variant?: 'primary' | 'secondary'
}

export const AnchorButton = forwardRef<HTMLButtonElement, AnchorButtonProps>
(({children, variant = 'primary', ...props}, ref) => (
  <button
    className={classNames({
      [styles['g-anchor']]: true,
      [styles['g-anchor--secondary']]: variant === 'secondary',
    })}
    ref={ref}
    {...props}>
    {children}
  </button>
))
