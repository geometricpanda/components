import {Meta, ComponentStory} from '@storybook/react';
import type {ButtonAnchorProps} from './button-anchor.component';
import {ButtonAnchor} from './button-anchor.component';

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
