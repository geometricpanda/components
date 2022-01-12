import {forwardRef} from 'react';
import type {ComponentPropsWithoutRef} from 'react';
import {ButtonBaseProps, useClassName} from './button.common';
import styles from './button.module.css';

export interface ButtonProps extends ButtonBaseProps,
  Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
                                                                    children,
                                                                    variant,
                                                                    outline,
                                                                    media,
                                                                    mediaReverse,
                                                                    mediaOnly,
                                                                    ...props
                                                                  }, ref) => {

  const className = useClassName({variant, outline, media, mediaReverse, mediaOnly});

  return (
    <button className={className} ref={ref} {...props}>
      <span className={styles['g-button__content']}>{children}</span>
      {media && (
        <span className={styles['g-button__media']}>{media}</span>
      )}
    </button>
  )
});
