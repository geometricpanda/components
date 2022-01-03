import {render, within} from '@testing-library/react';
import {Button, ButtonProps} from './button.component'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {Icon} from '../icon/icon.component';

const classNames = {
  Button: 'g-button',
  ButtonOutline: 'g-button--outline',
  ButtonSecondary: 'g-button--secondary',
  ButtonMediaOnly: 'g-button--media-only',
  ButtonMediaReverse: 'g-button--media-reverse',
  ButtonMedia: 'g-button__media',
  ButtonContent: 'g-button__content',
}

const createComponent = (props?: ButtonProps) =>
  render(
    <Button data-testid={'button'} {...props}>
      Hello World
    </Button>,
  );


describe('Button', () => {

  it('should have the base class', () => {
    const component = createComponent();
    const button = component.getByTestId('button');
    expect(button).toHaveClass(classNames.Button)
  })

  it('should have the secondary class', () => {
    const component = createComponent({variant: 'secondary'});
    const button = component.getByTestId('button');
    expect(button).toHaveClass(classNames.ButtonSecondary)
  });

  it('should have the outline class', () => {
    const component = createComponent({outline: true});
    const button = component.getByTestId('button');
    expect(button).toHaveClass(classNames.ButtonOutline)
  });

  it('should have the content class', () => {
    const component = createComponent({outline: true});
    const button = component.getByTestId('button');
    const content = within(button).getByText('Hello World')
    expect(content).toHaveClass(classNames.ButtonContent)
  });

  describe('Media', () => {

    const media = (
      <Icon size={'sm'} data-testid={'icon'}>
        <FontAwesomeIcon icon={faCheck}/>
      </Icon>
    )

    it('should put the icon within the media span', () => {
      const component = createComponent({media});
      const button = component.getByTestId('button');
      const icon = within(button).getByTestId('icon');
      expect(icon.parentElement).toHaveClass(classNames.ButtonMedia);
    });

    it('should have the media only class', () => {
      const component = createComponent({media, mediaOnly: true});
      const button = component.getByTestId('button');
      expect(button).toHaveClass(classNames.ButtonMediaOnly);
    });

    it('should have the media reverse class', () => {
      const component = createComponent({media, mediaReverse: true});
      const button = component.getByTestId('button');
      expect(button).toHaveClass(classNames.ButtonMediaReverse);
    });

  })

});
