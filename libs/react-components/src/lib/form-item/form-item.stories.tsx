import {ComponentStoryFn, Meta} from '@storybook/react';
import {FormItem} from './form-item.component';
import {Text} from '../text';
import {Input} from '../input';

export default {
  title: 'Forms / Form Item',
  component: FormItem,
  argTypes: {
    description: {
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: <Text size={'sm'}>No really, I need to know.</Text>,
        false: false,
      }
    },
    error: {
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: <Text state={'error'}>Oh please, tell me</Text>,
        false: false,
      }
    },
  },
} as Meta;

const Template: ComponentStoryFn<typeof FormItem> = ({description, error}) => (
  <FormItem
    label={<Text>Who do you think you are?</Text>}
    description={description}
    error={error}
    render={({...inputProps}) => <Input {...inputProps} />}/>
)

export const Default = Template.bind({})
