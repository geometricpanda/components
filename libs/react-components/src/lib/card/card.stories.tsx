import {ComponentStory, Meta} from '@storybook/react';
import {Card} from './card.component';
import {Text} from '../text';
import {Button} from '../button';
import {Images} from '../../images';


export default {
  component: Card,
  argTypes: {
    head: {
      control: false,
    },
    foot: {
      control: false,
    },
    media: {
      control: false,
    },
  },
} as Meta;

const Template: ComponentStory<typeof Card> = (props) => (
  <Card {...props}>
    <Text>
      Consectetur adipiscing elit. Nunc venenatis ipsum vitae massa viverra varius.
    </Text>
  </Card>
)

export const Default = Template.bind({});

export const WithHead = Template.bind({});
WithHead.args = {
  head: (
    <Text size={'md'}>Lorem Ipsum</Text>
  ),
}
export const WithFoot = Template.bind({});
WithFoot.args = {
  foot: (
    <Button variant={'secondary'}>Lorem Ipsum</Button>
  ),
}

export const WithHeadAndFoot = Template.bind({});
WithHeadAndFoot.args = {
  head: (
    <Text size={'md'} id={'product-title'}>My Super Cool Product</Text>
  ),
  foot: (
    <Button variant={'secondary'}
            aria-describedby={'product-title'}>
      Find out more
    </Button>
  ),
}

export const WithMedia = Template.bind({});
WithMedia.args = {
  media: (
    <picture>
      <source srcSet={Images.img1280x400} media={'(min-width:64em)'}/>
      <source srcSet={Images.img1023x400} media={'(min-width:45em)'}/>
      <source srcSet={Images.img719x400} media={'(min-width:38em)'}/>
      <img alt={'Placeholder'}
           src={Images.img607x300}
           style={{maxWidth: '100%', verticalAlign: 'middle'}}/>
    </picture>
  ),
  head: (
    <Text size={'md'} id={'product-title'}>My Super Cool Product</Text>
  ),
  foot: (
    <Button variant={'secondary'}
            aria-describedby={'product-title'}>
      Find out more
    </Button>
  ),
}

export const WithHorizontalMedia = Template.bind({});
WithHorizontalMedia.args = {
  layout: 'horizontal',
  media: (
    <picture>
      <source srcSet={Images.img960x500} media={'(min-width:64em)'}/>
      <source srcSet={Images.img768x500} media={'(min-width:45em)'}/>
      <source srcSet={Images.img360x500} media={'(min-width:38em)'}/>
      <img alt={'Placeholder'}
           src={Images.img607x300}
           style={{maxWidth: '100%', verticalAlign: 'middle'}}/>
    </picture>
  ),
  head: (
    <Text size={'md'} id={'product-title'}>My Super Cool Product</Text>
  ),
  foot: (
    <Button variant={'secondary'}
            aria-describedby={'product-title'}>
      Find out more
    </Button>
  ),
}
