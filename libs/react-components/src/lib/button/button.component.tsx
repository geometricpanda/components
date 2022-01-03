import {forwardRef} from 'react';
import type {ComponentPropsWithoutRef} from 'react';
import {ButtonBaseProps, useClassName} from './button.common';

export interface ButtonProps extends ButtonBaseProps,
  Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
                                                                    children,
                                                                    variant,
                                                                    outline,
                                                                    ...props
                                                                  }, ref) => {
  const className = useClassName({variant, outline});
  return (
    <button className={className} ref={ref} {...props}>
      {children}
    </button>
  )
});
