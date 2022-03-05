import {ComponentStoryFn, Meta} from '@storybook/react';
import {Input} from './input.component';

export default {
  title: 'Forms / Inputs',
  component: Input,
  argTypes: {
    onKeyUp: {action: 'onKeyUp'}
  },
} as Meta

const Template: ComponentStoryFn<typeof Input> = (props) => (
  <Input {...props}/>
);

export const Default = Template.bind({});
