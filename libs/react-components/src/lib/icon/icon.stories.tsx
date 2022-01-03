import type {ComponentStory, Meta} from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import {Icon, IconProps} from './icon.component';

export default {
  component: Icon,
} as Meta;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => (
  <Icon {...args}>
    <FontAwesomeIcon icon={faCheck} />
  </Icon>
)

export const Small = Template.bind({});
Small.args = {
  size: 'sm'
}

export const Medium = Template.bind({});
Medium.args = {
  size: 'md'
}

export const Large = Template.bind({});
Large.args = {
  size: 'lg'
}

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl'
}
