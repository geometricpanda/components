import {ReactNode, useEffect, useRef, useState} from 'react';
import FocusTrap from 'focus-trap-react';
import {hideOthers} from 'aria-hidden';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import {generateUniqueId} from '../utils/generate-unique-id';
import {Icon} from '../icon';
import {noop} from '../utils/noop';
import styles from './modal.module.css';
import {createPortal} from 'react-dom';
import {useLockBodyScroll, useToggle} from 'react-use';
import classNames from 'classnames';

export interface ModalProps {
  title: string;
  children: ReactNode;
  doClose: () => void;
  id?: string;
  align?: 'top' | 'center' | 'bottom',
}

export const Modal = ({
  id = generateUniqueId('modal'),
  title,
  children,
  align = 'center',
  doClose = noop,
}: ModalProps) => {

  const ref = useRef<HTMLDivElement>(null);
  const [prevFocus, setPrevFocus] = useState<HTMLElement>();
  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);

  useEffect(() => {
    if (!ref.current) return;
    setPrevFocus(document.activeElement as HTMLElement);
    const timeout = setTimeout(() => ref.current?.focus(), 150);
    const undo = hideOthers(ref.current);
    toggleLocked(true);

    return () => {
      if (timeout) clearTimeout(timeout);
      toggleLocked(false);
      undo();

    }
  }, [ref, setPrevFocus, toggleLocked]);

  useEffect(() => {
    return () => {
      if (prevFocus?.focus) {
        prevFocus.focus()
      }
    }
  }, [prevFocus])

  return (
    <div className={styles['g-modal']}>
      <div className={styles['g-modal__backdrop']}/>
      <FocusTrap active
                 focusTrapOptions={{
                   initialFocus: false,
                   onDeactivate: doClose,
                 }}>

        <div className={
          classNames({
            [styles['g-modal__body']]: true,
            [styles['g-modal__body--align-top']]: align === 'top',
            [styles['g-modal__body--align-center']]: align === 'center',
            [styles['g-modal__body--align-bottom']]: align === 'bottom',
          })}
             id={id}
             role={'dialog'}
             tabIndex={-1}
             aria-label={title}
             aria-modal={true}
             ref={ref}>

          <div className={styles['g-modal__head']}>
            <button className={styles['g-modal__close']} onClick={doClose}>
              <span>Close</span>
              <Icon size={'sm'} aria-hidden={true}>
                <FontAwesomeIcon icon={faTimes}/>
              </Icon>
            </button>
          </div>

          <div className={styles['g-modal__content']}>
            {children}
          </div>
        </div>
      </FocusTrap>
    </div>
  )

  // TODO: Pass create portal host in theme provider
  // return createPortal(ModalContent, document.body)
}
