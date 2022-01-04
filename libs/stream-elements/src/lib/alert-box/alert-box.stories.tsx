import type {ComponentStory, Meta} from '@storybook/react';
import {AlertBox, AlertBoxProps} from './alert-box.component';

export default {
  title: 'Alert Box',
  component: AlertBox,
} as Meta;

export const FollowerAlert: ComponentStory<typeof AlertBox> =
  (args: AlertBoxProps) => (<AlertBox {...args}/>)


FollowerAlert.args = {
  name: 'FunkyPangolin146',
  message: 'Started Following',
  variant: 'follower',
}

export const SubscriberAlert: ComponentStory<typeof AlertBox> =
  (args: AlertBoxProps) => (<AlertBox {...args}/>)

SubscriberAlert.args = {
  name: 'FunkyPangolin146',
  message: 'just subscribed ❤️',
  variant: 'subscriber',
}

export const TipAlert: ComponentStory<typeof AlertBox> =
  (args: AlertBoxProps) => (<AlertBox {...args}/>)

TipAlert.args = {
  name: 'FunkyPangolin146',
  message: 'just tipped $26, Just the tip!️',
  variant: 'tip',
}

export const CheerAlert: ComponentStory<typeof AlertBox> =
  (args: AlertBoxProps) => (<AlertBox {...args}/>)

CheerAlert.args = {
  name: 'FunkyPangolin146',
  message: 'just cheered x 40! 🥂🍾',
  variant: 'cheer',
}

export const HostAlert: ComponentStory<typeof AlertBox> =
  (args: AlertBoxProps) => (<AlertBox {...args}/>)

HostAlert.args = {
  name: 'FunkyPangolin146',
  message: 'hosted the stream for 7 viewers 🤓',
  variant: 'host',
}

export const RaidAlert: ComponentStory<typeof AlertBox> =
  (args: AlertBoxProps) => (<AlertBox {...args}/>)

RaidAlert.args = {
  name: 'FunkyPangolin146',
  message: 'raided with 32 viewers',
  variant: 'raid',
}
