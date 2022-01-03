import {render} from '@testing-library/react';
import {Button, ButtonProps} from './button.component'

const classNames = {
  Button: 'g-button',
  ButtonOutline: 'g-button--outline',
  ButtonSecondary: 'g-button--secondary',
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

});
