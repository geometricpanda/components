import { Meta} from '@storybook/react';
import {Modal} from './modal.component';
import {useCallback, useState} from 'react';
import {Button} from '../button';

export default {
  component: Modal,
} as Meta

export const Default = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDoOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen])

  const handleDoClose = useCallback(() => {
    setOpen(false);
  }, [setOpen])

  return (
    <>
      <Button onClick={handleDoOpen}
              aria-haspopup={'dialog'}>
        Open Modal
      </Button>

      {open && (
        <Modal title={'My Modal'} doClose={handleDoClose}>
          <p style={{margin: 0, padding: 0}}>
            Lorem ipsum dolor sit amet, <a href={'#'}>consectetur</a> adipiscing elit.
          </p>
        </Modal>
      )}
    </>
  )
}

Default.storyName = 'Modal';
