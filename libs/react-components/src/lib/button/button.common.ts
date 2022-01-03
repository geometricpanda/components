import classNames from 'classnames';
import styles from './button.module.css';

export interface ButtonBaseProps {
  /** Sets the colour of the button */
  variant?: 'primary' | 'secondary';
  /** Configures the colour of the button */
  outline?: boolean;
}

export const useClassName = ({variant, outline}: ButtonBaseProps) => classNames({
  [styles['g-button']]: true,
  [styles['g-button--secondary']]: variant === 'secondary',
  [styles['g-button--outline']]: outline,
})
