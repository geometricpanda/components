import {useCallback} from 'react';
import {ComponentStory, Meta} from '@storybook/react';
import {useArgs} from '@storybook/client-api';

import type {AccordionItemProps} from './accordion-item.component';
import {Accordion, AccordionItem} from './';

export default {
  title: 'Layout / Accordion',
  args: {
    title: 'Item 1',
    expanded: false,
    onChange: () => null,
    disabled: false,
  },
} as Meta;

const Template: ComponentStory<typeof AccordionItem> = (args: AccordionItemProps) => {
  const [{expanded, expandedSecond, expandedThird, title, disabled}, updateArgs] = useArgs();

  const handleFirstChange = useCallback(() => {
    updateArgs({expanded: !expanded});
  }, [expanded, updateArgs])

  const handleSecondChange = useCallback(() => {
    updateArgs({expandedSecond: !expandedSecond});
  }, [expandedSecond, updateArgs])

  const handleThirdChange = useCallback(() => {
    updateArgs({expandedThird: !expandedThird});
  }, [expandedThird, updateArgs])

  return (
    <Accordion>
      <AccordionItem id="first"
                     title={title}
                     expanded={expanded}
                     onChange={handleFirstChange}
                     disabled={disabled}>
        <p style={{margin: 0, padding: 0}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras neque urna, vehicula nec ligula sed, mattis
          aliquet ante. <a href={'#'}>enim risus</a>.
        </p>
      </AccordionItem>

      <AccordionItem id="second"
                     title={'Item 2'}
                     expanded={expandedSecond}
                     onChange={handleSecondChange}
                     disabled={disabled}>
        <p style={{margin: 0, padding: 0}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras neque urna, vehicula nec ligula sed, mattis
          aliquet ante. <a href={'#'}>enim risus</a>.
        </p>
      </AccordionItem>

      <AccordionItem id="third"
                     title={'Item 3'}
                     expanded={expandedThird}
                     onChange={handleThirdChange}
                     disabled={disabled}>
        <p style={{margin: 0, padding: 0}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras neque urna, vehicula nec ligula sed, mattis
          aliquet ante. <a href={'#'}>enim risus</a>.
        </p>
      </AccordionItem>
    </Accordion>
  )
}

export const Collapsed = Template.bind({})

export const Expanded = Template.bind({})
Expanded.args = {
  expanded: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const ExpandedDisabled = Template.bind({})
ExpandedDisabled.args = {
  expanded: true,
  disabled: true,
}
