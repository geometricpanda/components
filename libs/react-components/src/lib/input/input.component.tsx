import {ComponentPropsWithoutRef, forwardRef} from 'react';
import styles from './input.module.css';
import classNames from 'classnames';

export type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  'aria-invalid': ariaInvalid,
  required,
  ...props
}, ref) => (
  <div className={classNames({
    [styles['g-input']]: true,
    [styles['g-input--error']]: ariaInvalid,
  })}>

    <input
      aria-required={required}
      aria-invalid={ariaInvalid}
      className={styles['g-input__control']}
      ref={ref}
      {...props}/>

  </div>
));
