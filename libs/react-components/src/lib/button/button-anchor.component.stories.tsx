import {Meta, ComponentStory} from '@storybook/react';
import type {ButtonAnchorProps} from './button-anchor.component';
import {ButtonAnchor} from './button-anchor.component';
import {Icon} from '../icon/icon.component';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

export default {
  component: ButtonAnchor,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: ComponentStory<typeof ButtonAnchor> = (args: ButtonAnchorProps) =>
  <ButtonAnchor href={'#'} {...args}>Hello World</ButtonAnchor>

export const Primary = Template.bind({});

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  outline: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
}

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  variant: 'secondary',
  outline: true,
}


export const WithMedia = Template.bind({});
WithMedia.args = {
  media: (
    <Icon size={'sm'}>
      <FontAwesomeIcon icon={faCheck}/>
    </Icon>
  ),
}

export const WithMediaReverse = Template.bind({});
WithMediaReverse.args = {
  media: (
    <Icon size={'sm'}>
      <FontAwesomeIcon icon={faCheck}/>
    </Icon>
  ),
  mediaReverse: true,
}


export const WithMediaOnly = Template.bind({});
WithMediaOnly.args = {
  media: (
    <Icon size={'sm'}>
      <FontAwesomeIcon icon={faCheck}/>
    </Icon>
  ),
  mediaOnly: true,
}
