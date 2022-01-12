import classNames from 'classnames';
import type {ReactNode} from 'react';
import styles from './button.module.css';

export interface ButtonBaseProps {
  /** Sets the colour of the button */
  variant?: 'primary' | 'secondary';
  /** Configures the colour of the button */
  outline?: boolean;
  /** Slot which to pass an Icon component */
  media?: ReactNode;
  /** Reverses the order so that media comes before the text */
  mediaReverse?: boolean;
  /** Makes the text screen reader only, and the button into a circle */
  mediaOnly?: boolean;
}

export const useClassName = ({variant, outline, mediaReverse, mediaOnly}: ButtonBaseProps) => classNames({
  [styles['g-button']]: true,
  [styles['g-button--secondary']]: variant === 'secondary',
  [styles['g-button--outline']]: outline,
  [styles['g-button--media-reverse']]: mediaReverse,
  [styles['g-button--media-only']]: mediaOnly,
})
