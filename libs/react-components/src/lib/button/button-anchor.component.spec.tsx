import {fireEvent, render} from '@testing-library/react';
import {ButtonAnchor, ButtonAnchorProps} from './button-anchor.component';

const classNames = {
  Button: 'g-button',
  ButtonOutline: 'g-button--outline',
  ButtonSecondary: 'g-button--secondary',
}

const createComponent = (props?: ButtonAnchorProps) =>
  render(
    <ButtonAnchor href={'#'} data-testid={'button'} {...props}>
      Hello World
    </ButtonAnchor>,
  );


describe('Button Anchor', () => {

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

  describe('keypress', () => {

    it('should trigger a click event on pressing space', () => {
      const component = createComponent({outline: true});
      const button = component.getByTestId('button');

      const spy = jest.fn();
      button.addEventListener('click', spy);

      fireEvent.keyDown(button, {key: ' ', code: 'Space', charCode: 32})
      expect(spy).toHaveBeenCalled();
    });

    it('should not trigger a click event on pressing other keys', () => {
      const component = createComponent({outline: true});
      const button = component.getByTestId('button');

      const spy = jest.fn();
      button.addEventListener('click', spy);

      fireEvent.keyDown(button, {key: 'Escape', code: 'Escape', charCode: 27})
      expect(spy).not.toHaveBeenCalled();
    });

    it('should call the keydown function on keydown', () => {
      const spy = jest.fn();
      const component = createComponent({onKeyDown: spy});
      const button = component.getByTestId('button');
      fireEvent.keyDown(button, {key: 'Escape', code: 'Escape', charCode: 27})
      expect(spy).toHaveBeenCalled();
    });

  })

});
