import {ComponentPropsWithoutRef, forwardRef, KeyboardEventHandler, useCallback} from 'react';
import {ButtonBaseProps, useClassName} from './button.common';
import styles from './button.module.css';

export interface ButtonAnchorProps extends ButtonBaseProps,
  Omit<ComponentPropsWithoutRef<'a'>, 'className' | 'media'> {
}

export const ButtonAnchor = forwardRef<HTMLAnchorElement, ButtonAnchorProps>(({
                                                                                children,
                                                                                variant,
                                                                                outline,
                                                                                onKeyDown,
                                                                                media,
                                                                                mediaReverse,
                                                                                mediaOnly,
                                                                                ...props
                                                                              }, ref) => {

  const className = useClassName({variant, outline, media, mediaReverse, mediaOnly});

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
    <a className={className} onKeyDown={handleKeyDown} ref={ref} {...props}>
      <span className={styles['g-button__content']}>{children}</span>
      {media && (
        <span className={styles['g-button__media']}>{media}</span>
      )}
    </a>
  )
});
