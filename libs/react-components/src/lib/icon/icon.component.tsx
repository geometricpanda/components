import type {ComponentProps, ReactNode} from 'react';
import styles from './icon.module.css';
import classNames from 'classnames';

export interface IconProps extends Omit<ComponentProps<'span'>, 'className'> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Icon = ({children, size = 'md', ...props}: IconProps) => (
  <span
    className={classNames({
      [styles['g-icon']]: true,
      [styles['g-icon--sm']]: size === 'sm',
      [styles['g-icon--md']]: size === 'md',
      [styles['g-icon--lg']]: size === 'lg',
      [styles['g-icon--xl']]: size === 'xl',
    })}
    {...props}>
    {children}
  </span>
)
