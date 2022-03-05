import {ComponentStoryFn, Meta} from '@storybook/react';
import {Anchor} from './anchor.component';

export default {
  title: 'Call to Action / Anchor',
  component: Anchor,
  args: {
    href: '#',
    children: 'Hello World',
  }
} as Meta;

const Template: ComponentStoryFn<typeof Anchor> = ({children, ...props}) => (
  <Anchor {...props}>
    {children}
  </Anchor>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
}
