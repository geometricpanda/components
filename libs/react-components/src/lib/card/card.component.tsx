import {ReactNode} from 'react';
import styles from './card.module.css';
import classNames from 'classnames';

export interface CardProps {
  children: ReactNode,
  layout?: 'vertical' | 'horizontal',
  head?: ReactNode,
  foot?: ReactNode,
  media?: ReactNode,
}

export const Card = ({head, foot, children, media, layout}: CardProps) => {
  const className = classNames({
    [styles['g-card']]: true,
    [styles['g-card--horizontal']]: layout === 'horizontal',
  })
  return (
    <div className={className}>

      {media && (
        <div className={styles['g-card__media']}>
          {media}
        </div>
      )}

      <div className={styles['g-card__content']}>

        {head && (
          <div className={styles['g-card__head']}>
            {head}
          </div>
        )}

        <div className={styles['g-card__body']}>
          {children}
        </div>

        {foot && (
          <div className={styles['g-card__foot']}>
            {foot}
          </div>
        )}

      </div>
    </div>
  )
}
