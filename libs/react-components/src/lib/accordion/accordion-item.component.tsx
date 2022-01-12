import {MouseEvent, ReactNode, useCallback, useState} from 'react';
import styles from './accordion-item.module.css';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Icon} from '../icon';

export interface AccordionItemProps {
  children: ReactNode;
  title: string;
  expanded?: boolean;
  onChange?: ($event: MouseEvent) => void;
}

export const AccordionItem = ({children, expanded, onChange, title}: AccordionItemProps) => (
  <div
    className={classNames({
      [styles['g-accordion-item']]: true,
      [styles['g-accordion-item--expanded']]: expanded,
    })}>

    <button className={styles['g-accordion-item__head']}
            onClick={onChange}>
        <span className={styles['g-accordion-item__icon']}>
          <Icon size={'sm'}>
            <FontAwesomeIcon icon={faChevronRight}/>
          </Icon>
        </span>
      <span className={styles['g-accordion-item__title']}>
          {title}
        </span>
    </button>

    <div className={styles['g-accordion-item__body']}>
      <div className={styles['g-accordion-item__content']}>
        {children}
      </div>
    </div>

  </div>
)

