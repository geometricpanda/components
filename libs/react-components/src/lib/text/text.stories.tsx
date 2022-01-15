import type {ComponentStory, Meta} from '@storybook/react';
import {Text, TextProps} from './';

export default {
  component: Text,
  args: {
    marginBottom: true,
  },
} as Meta;

const Template: ComponentStory<typeof Text> = ({marginBottom, ...props}: TextProps) => (
  <>
    <Text marginBottom={marginBottom} {...props}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis at lectus non sagittis. Sed eget nibh
      nulla. Curabitur in fermentum leo.
    </Text>
    <Text {...props}>
      Donec at varius orci, vitae egestas eros. Praesent velit nisl, tincidunt eget auctor id, egestas id risus.
    </Text>
  </>
)
export const Default = Template.bind({})

export const SizeSmall = Template.bind({});
SizeSmall.storyName = 'Size - Small';
SizeSmall.args = {
  size: 'sm',
}

export const SizeRegular = Template.bind({});
SizeRegular.storyName = 'Size - Regular';

export const SizeMedium = Template.bind({});
SizeMedium.storyName = 'Size - Medium';
SizeMedium.args = {
  size: 'md',
}
export const SizeLarge = Template.bind({});
SizeLarge.storyName = 'Size - Large';
SizeLarge.args = {
  size: 'lg',
}
export const SizeExtraLarge = Template.bind({});
SizeExtraLarge.storyName = 'Size - Extra Large';
SizeExtraLarge.args = {
  size: 'xl',
}

export const Size2ExtraLarge = Template.bind({});
Size2ExtraLarge.storyName = 'Size - 2x Extra Large';
Size2ExtraLarge.args = {
  size: '2xl',
}

export const WeightLight = Template.bind({});
WeightLight.storyName = 'Weight - Light';
WeightLight.args = {
  weight: 'light',
}

export const WeightRegular = Template.bind({});
WeightRegular.storyName = 'Weight - Regular';
WeightRegular.args = {
  weight: 'regular',
}

export const WeightBold = Template.bind({});
WeightBold.storyName = 'Weight - Bold';
WeightBold.args = {
  weight: 'bold',
}

export const StateInfo = Template.bind({});
StateInfo.storyName = 'State - Info';
StateInfo.args = {
  state: 'info',
}

export const StateSuccess = Template.bind({});
StateSuccess.storyName = 'State - Success';
StateSuccess.args = {
  state: 'success',
}

export const StateWarning = Template.bind({});
StateWarning.storyName = 'State - Warning';
StateWarning.args = {
  state: 'warning',
}

export const StateError = Template.bind({});
StateError.storyName = 'State - Error';
StateError.args = {
  state: 'error',
}

export const MarginBottom = Template.bind({});
StateError.storyName = 'Margin Bottom';
StateError.args = {
  marginBottom: true,
}
