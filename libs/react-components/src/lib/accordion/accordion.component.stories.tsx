import {ComponentStory, Meta} from '@storybook/react';
import {Accordion} from './accordion.component';
import {AccordionItem, AccordionItemProps} from './accordion-item.component';
import {useCallback} from 'react';
import {useArgs} from '@storybook/client-api';

export default {
  title: 'Accordion / Accordion',
} as Meta;

const Template: ComponentStory<typeof AccordionItem> = ({}: AccordionItemProps) => {
  const [{expanded, title}, updateArgs] = useArgs();

  const handleChange = useCallback(() => {
    updateArgs({expanded: !expanded});
  }, [expanded, updateArgs])

  return (
    <Accordion>
      <AccordionItem title={title} expanded={expanded} onChange={handleChange}>
        <p style={{margin: 0, padding: 0}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque urna, vehicula nec ligula sed, mattis
          aliquet ante. Aliquam pellentesque placerat arcu. Mauris quis nunc euismod, bibendum diam et, euismod risus.
          Donec fermentum <a href={'#'}>enim risus</a>, nec malesuada dui interdum eget. Maecenas nec pharetra velit.
          Cras vel viverra nisl. Nullam placerat ante rutrum, aliquet elit mollis, gravida sem. Aliquam in elit auctor,
          ultricies lectus quis, dictum metus. Mauris scelerisque porttitor metus.
        </p>
      </AccordionItem>
      <AccordionItem title={'Dolor sit amet'}>
        <p style={{margin: 0, padding: 0}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque urna, vehicula nec ligula sed, mattis
          aliquet ante. Aliquam pellentesque placerat arcu. Mauris quis nunc euismod, bibendum diam et, euismod risus.
          Donec fermentum <a href={'#'}>enim risus</a>, nec malesuada dui interdum eget. Maecenas nec pharetra velit.
          Cras vel viverra nisl. Nullam placerat ante rutrum, aliquet elit mollis, gravida sem. Aliquam in elit auctor,
          ultricies lectus quis, dictum metus. Mauris scelerisque porttitor metus.
        </p>
      </AccordionItem>
    </Accordion>
  )
}

export const Default = Template.bind({})
Default.storyName = 'Accordion';
Default.args = {
  title: 'Lorem Ipsum',
  expanded: false,
}
