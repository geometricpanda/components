import {Logo} from '../logo/logo.component';
import classNames from 'classnames';

export interface AlertBoxProps {
  name: string;
  variant: 'follower' | 'subscriber' | 'tip' | 'cheer' | 'host' | 'raid';
  message: string;
}

export const AlertBox = ({name, variant, message}: AlertBoxProps) => (
  <div className={
    classNames({
      'c-container': true,
      'c-container--follower': variant === 'follower',
      'c-container--subscriber': variant === 'subscriber',
      'c-container--tip': variant === 'tip',
      'c-container--cheer': variant === 'cheer',
      'c-container--host': variant === 'host',
      'c-container--raid': variant === 'raid',
    })}>
    <div className="c-container__grid">
      <div className="c-container__image">
        <Logo/>
      </div>
      <div className="c-container__content">
        <div className="c-container__text c-container__text--name" id="username-container">
          {name}
        </div>
        <div className="c-container__text c-container__text--message">
          {message}
        </div>
      </div>
    </div>
  </div>
)
