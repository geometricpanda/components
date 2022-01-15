import type {IconDefinition} from '@fortawesome/fontawesome-common-types';
import type {ReactNode, MutableRefObject} from 'react';

import {faCheckCircle, faInfoCircle, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {forwardRef, useCallback, useEffect, useState} from 'react';
import {useEnsuredForwardedRef} from 'react-use';
import classNames from 'classnames';

import {Icon} from '../icon';
import {Text} from '../text'

import styles from './alert.module.css';

export interface AlertProps {
  state?: 'info' | 'warning' | 'success' | 'error',
  title: string;
  children: ReactNode,
  focusOnMount?: boolean,
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(({
  state = 'info',
  title,
  focusOnMount,
  children,
}, ref) => {

  const [icon, setIcon] = useState<IconDefinition>(faInfoCircle);
  const ensuredForwardRef = useEnsuredForwardedRef<HTMLDivElement>(ref as MutableRefObject<HTMLDivElement>);

  const doFocus = useCallback(() => {
    if (!ensuredForwardRef.current) {
      return
    }
    ensuredForwardRef.current.focus();
  }, [ensuredForwardRef]);

  useEffect(() => {
    switch (state) {
      case 'warning':
      case 'error':
        setIcon(faExclamationTriangle)
        break;
      case 'success':
        setIcon(faCheckCircle)
        break;
      default:
        setIcon(faInfoCircle);
        break;
    }
  }, [state, setIcon]);

  useEffect(() => {
    if (!focusOnMount) {
      return
    }

    const cancel = setTimeout(() => doFocus(), 150);

    return () => {
      if (cancel) {
        clearTimeout(cancel);
      }
    }
  }, [doFocus, focusOnMount])

  const className = classNames({
    [styles['g-alert']]: true,
    [styles['g-alert--info']]: state === 'info',
    [styles['g-alert--success']]: state === 'success',
    [styles['g-alert--warning']]: state === 'warning',
    [styles['g-alert--error']]: state === 'error',
  });

  return (
    <div className={className}
         role="alert"
         aria-atomic="true"
         ref={ensuredForwardRef}
         tabIndex={-1}>

      <div aria-hidden={true}
           className={styles['g-alert__icon']}>
        <Icon size={'md'}>
          <FontAwesomeIcon icon={icon}/>
        </Icon>
      </div>

      <div className={styles['g-alert__head']}>
        <Text size={'md'}>{title}</Text>
      </div>

      <div className={styles['g-alert__body']}>
        {children}
      </div>

    </div>
  )
})
