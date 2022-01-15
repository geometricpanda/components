import type {ComponentProps, FC} from 'react';
import {createElement} from 'react';

import styles from './text.module.css'
import classNames from 'classnames';

export interface TextProps extends Omit<ComponentProps<'p'>, 'className'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong';
  size?: 'sm' | 'regular' | 'md' | 'lg' | 'xl' | '2xl',
  weight?: 'light' | 'regular' | 'bold',
  state?: 'info' | 'error' | 'success' | 'warning',
  marginBottom?: boolean,
}

export const Text: FC<TextProps> = ({
  as = 'p',
  size,
  weight,
  state,
  children,
  marginBottom,
  ...props
}: TextProps) => {

  const className = classNames({
    [styles['g-text']]: true,
    [styles['g-text--weight-light']]: weight === 'light',
    [styles['g-text--weight-regular']]: weight === 'regular',
    [styles['g-text--weight-bold']]: weight === 'bold',
    [styles['g-text--size-sm']]: size === 'sm',
    [styles['g-text--size-md']]: size === 'md',
    [styles['g-text--size-lg']]: size === 'lg',
    [styles['g-text--size-xl']]: size === 'xl',
    [styles['g-text--size-2xl']]: size === '2xl',
    [styles['g-text--state-warning']]: state === 'warning',
    [styles['g-text--state-success']]: state === 'success',
    [styles['g-text--state-info']]: state === 'info',
    [styles['g-text--state-error']]: state === 'error',
    [styles['g-text--margin-bottom']]: marginBottom,
  });

  return createElement(as, {...props, className}, children);
};
