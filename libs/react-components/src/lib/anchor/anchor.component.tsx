import {ComponentProps, forwardRef, ReactNode} from 'react';
import styles from './anchor.module.css';
import classNames from 'classnames';

export interface AnchorProps extends ComponentProps<'a'> {
  children: ReactNode;
  /** Variant allows us to configure the colour */
  variant?: 'primary' | 'secondary'
}

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>
(({children, variant = 'primary', ...props}, ref) => (
  <a
    className={classNames({
      [styles['g-anchor']]: true,
      [styles['g-anchor--secondary']]: variant === 'secondary',
    })}
    ref={ref}
    {...props}>
    {children}
  </a>
))
