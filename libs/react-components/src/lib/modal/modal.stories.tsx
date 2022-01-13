import {ComponentStory, Meta} from '@storybook/react';
import {Modal, ModalProps} from './modal.component';
import {generateUniqueId} from '../utils/generate-unique-id';
import {noop} from '../utils/noop';
import {useCallback, useState} from 'react';

export default {
  component: Modal,
  args: {
    title: 'My Modal',
    id: generateUniqueId('modal'),
    align: 'center',
  } as ModalProps,
} as Meta

const Template: ComponentStory<typeof Modal> = ({doClose, ...props}: ModalProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleOnClose = useCallback(() => {
    setOpen(false);
  }, [setOpen])

  return (
    <>
      {open && (
        <Modal doClose={handleOnClose} {...props}>
          <p style={{margin: 0, padding: 0}}>
            Lorem ipsum dolor sit amet, <a href={'#'}>consectetur</a> adipiscing elit.
          </p>
        </Modal>
      )}
    </>
  )
}

export const Default = Template.bind({})
Default.storyName = 'Modal'
Default.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: 250,
  },
}
