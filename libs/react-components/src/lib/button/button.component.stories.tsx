import {Meta, ComponentStory} from '@storybook/react';
import type {ButtonProps} from './button.component';
import {Button} from './button.component';

export default {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) =>
  <Button {...args}>Hello World</Button>

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
