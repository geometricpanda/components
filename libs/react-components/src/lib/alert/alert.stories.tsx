import type {ComponentStory, Meta} from '@storybook/react';
import {Alert} from './alert.component';
import {Text} from '../text';

export default {
  component: Alert,
  args: {
    title: 'Something Important',
  },
} as Meta

const Template: ComponentStory<typeof Alert> = ({title, state}) => (
  <>
    <button>Focus thing Hello</button>
    <Alert title={title} state={state}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis ipsum vitae massa viverra varius. Cras
        elementum nisl a diam gravida finibus
      </Text>
    </Alert>
  </>
)

export const Info = Template.bind({});
Info.args = {
  state: 'info',
}

export const Success = Template.bind({});
Success.args = {
  state: 'success',
}

export const Error = Template.bind({});
Error.args = {
  state: 'error',
}

export const Warning = Template.bind({});
Warning.args = {
  state: 'warning',
}
