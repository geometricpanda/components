import {
  KeyboardEvent,
  KeyboardEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import FocusTrap from 'focus-trap-react';
import {hideOthers} from 'aria-hidden';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import {generateUniqueId} from '../utils/generate-unique-id';
import {Icon} from '../icon';
import {noop} from '../utils/noop';
import styles from './modal.module.css';
import {useKey, useLockBodyScroll, useToggle} from 'react-use';
import classNames from 'classnames';

export interface ModalProps {
  title: string;
  children: ReactNode;
  doClose: () => void;
  id?: string;
  align?: 'top' | 'center' | 'bottom',
}

export const Modal = ({
  id,
  title,
  children,
  align = 'center',
  doClose = noop,
}: ModalProps) => {

  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [prevFocus, setPrevFocus] = useState<HTMLElement>();
  const [modalId] = useState(id || generateUniqueId('modal'))
  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);
  useKey('Escape', doClose);


  useLayoutEffect(() => {
    if (!modalRef.current) return;
    setPrevFocus(document.activeElement as HTMLElement);
    const timeout = setTimeout(() => modalRef.current?.focus(), 150);
    const undo = hideOthers(modalRef.current);
    toggleLocked(true);

    return () => {
      if (timeout) clearTimeout(timeout);
      toggleLocked(false);
      undo();
    }
  }, [modalRef, setPrevFocus, toggleLocked]);


  const handleModalKeydown: KeyboardEventHandler<HTMLDivElement> =
    useCallback(($event: KeyboardEvent<HTMLDivElement>) => {
      if ($event.target !== modalRef.current) {
        return;
      }

      switch ($event.key) {
        case 'ArrowUp':
          modalContentRef.current?.scrollBy({top: -40, behavior: 'smooth'});
          break;
        case 'ArrowDown':
          modalContentRef.current?.scrollBy({top: 40, behavior: 'smooth'});
          break;
        default:
          break;
      }

    }, [modalContentRef]);

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
                   escapeDeactivates: false,
                 }}>

        <div className={
              classNames({
                [styles['g-modal__body']]: true,
                [styles['g-modal__body--align-top']]: align === 'top',
                [styles['g-modal__body--align-center']]: align === 'center',
                [styles['g-modal__body--align-bottom']]: align === 'bottom',
              })}
             id={modalId}
             role={'dialog'}
             tabIndex={-1}
             aria-label={title}
             aria-modal={true}
             onKeyDown={handleModalKeydown}
             ref={modalRef}>

          <div className={styles['g-modal__head']}>
            <button className={styles['g-modal__close']} onClick={doClose}>
              <span>Close</span>
              <Icon size={'md'} aria-hidden={true}>
                <FontAwesomeIcon icon={faTimes}/>
              </Icon>
            </button>
          </div>

          <div className={styles['g-modal__content']}
               ref={modalContentRef}>
            {children}
          </div>
        </div>
      </FocusTrap>
    </div>
  )

  // TODO: Pass create portal host in theme provider
  // return createPortal(ModalContent, document.body)
}
