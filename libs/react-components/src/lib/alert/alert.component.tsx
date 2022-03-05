import type {IconDefinition} from '@fortawesome/fontawesome-common-types';
import type {ReactNode, MutableRefObject, RefObject, ForwardedRef, Ref, LegacyRef} from 'react';

import {faCheckCircle, faInfoCircle, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {forwardRef, useEffect, useState} from 'react';
import {ensuredForwardRef, useEffectOnce, useEnsuredForwardedRef} from 'react-use';
import classNames from 'classnames';

import {Icon} from '../icon';
import {Text} from '../text'

import styles from './alert.module.css';
import {announce} from '@react-aria/live-announcer';

export interface AlertProps {
  state?: 'info' | 'warning' | 'success' | 'error',
  title: string;
  children: ReactNode,
  liveAnnounce?: boolean;
}

export const Alert = ensuredForwardRef<HTMLDivElement, AlertProps>(({
  state = 'info',
  title,
  children,
  liveAnnounce,
}, ref) => {

  const [icon, setIcon] = useState<IconDefinition>(faInfoCircle);

  useEffectOnce(() => {
    if (liveAnnounce && ref) {
      const _ref = ref as RefObject<HTMLDivElement>;
      const text = _ref.current!.innerText;
      announce(text, 'polite')
    }
  });

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

  const className = classNames({
    [styles['g-alert']]: true,
    [styles['g-alert--info']]: state === 'info',
    [styles['g-alert--success']]: state === 'success',
    [styles['g-alert--warning']]: state === 'warning',
    [styles['g-alert--error']]: state === 'error',
  });

  return (
    <div className={className}
         ref={ref}
         tabIndex={-1}>

      <div aria-hidden={true}
           className={styles['g-alert__icon']}>
        <Icon size={'md'}>
          <FontAwesomeIcon icon={icon}/>
        </Icon>
      </div>

      <div className={styles['g-alert__head']} aria-live="polite">
        <Text size={'md'}>{title}</Text>
      </div>

      <div className={styles['g-alert__body']}>
        {children}
      </div>

    </div>
  )
})
