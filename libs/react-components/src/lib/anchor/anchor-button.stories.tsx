import {ComponentStoryFn, Meta} from '@storybook/react';
import {AnchorButton} from './anchor-button.component';

export default {
  title: 'Call to Action / Anchor Button',
  component: AnchorButton,
  args: {
    children: 'Hello World',
  }
} as Meta;

const Template: ComponentStoryFn<typeof AnchorButton> = ({children, ...props}) => (
  <AnchorButton {...props}>
    {children}
  </AnchorButton>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
}
