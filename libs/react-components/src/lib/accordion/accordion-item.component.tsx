import {MouseEvent, ReactNode, useCallback, useState} from 'react';
import styles from './accordion-item.module.css';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Icon} from '../icon';
import {generateUniqueId} from '../utils/generate-unique-id';

export interface AccordionItemProps {
  id?: string;
  title: string;
  children: ReactNode;
  expanded?: boolean;
  onChange?: ($event: MouseEvent) => void;
  disabled?: boolean;
}

export const AccordionItem = ({
  id = generateUniqueId('accordion'),
  title,
  children,
  expanded,
  onChange,
  disabled,
}: AccordionItemProps) => (

  <div
    className={classNames({
      [styles['g-accordion-item']]: true,
      [styles['g-accordion-item--expanded']]: expanded,
    })}>

    <button className={styles['g-accordion-item__head']}
            type={'button'}
            id={id}
            onClick={onChange}
            disabled={disabled || undefined}>

      <span className={styles['g-accordion-item__icon']}>
        <Icon size={'sm'}>
          <FontAwesomeIcon icon={faChevronRight}/>
        </Icon>
      </span>

      <span className={styles['g-accordion-item__title']}>
          {title}
      </span>

    </button>


    <div className={styles['g-accordion-item__body']}
         id={`${id}-content`}>

      <div className={styles['g-accordion-item__content']}>
        {children}
      </div>

    </div>

  </div>
)

