import {ComponentPropsWithoutRef, forwardRef, KeyboardEventHandler, useCallback} from 'react';
import {ButtonBaseProps, useClassName} from './button.common';

export interface ButtonAnchorProps extends ButtonBaseProps,
  Omit<ComponentPropsWithoutRef<'a'>, 'className'> {
}

export const ButtonAnchor = forwardRef<HTMLAnchorElement, ButtonAnchorProps>(({
                                                                                children,
                                                                                variant,
                                                                                outline,
                                                                                onKeyDown,
                                                                                ...props
                                                                              }, ref) => {

  const className = useClassName({variant, outline});

  const handleKeyDown: KeyboardEventHandler<HTMLAnchorElement> = useCallback(($event) => {
    if ($event.key === ' ') {
      const click = new MouseEvent('click')
      $event.target.dispatchEvent(click)
    }

    if (onKeyDown) {
      onKeyDown($event);
    }
  }, [onKeyDown])

  return (
    <a className={className}
       onKeyDown={handleKeyDown}
       ref={ref}
       {...props}>
      {children}
    </a>
  )
});
