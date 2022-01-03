import {Icon, IconProps} from './icon.component';
import {render} from '@testing-library/react';

const createComponent = (args?: Partial<IconProps>) => render(
  <Icon data-testid={'icon'} {...args}>
    <></>
  </Icon>,
)

const classNames = {
  Icon: 'g-icon',
  IconSm: 'g-icon--sm',
  IconMd: 'g-icon--md',
  IconLg: 'g-icon--lg',
  IconXl: 'g-icon--xl',
}

describe('Icon', () => {

  it('should have a class of g-icon', () => {
    const component = createComponent();
    const icon = component.getByTestId('icon');
    expect(icon).toHaveClass(classNames.Icon);
  });

  it('should have a default size of medium', () => {
    const component = createComponent();
    const icon = component.getByTestId('icon');
    expect(icon).toHaveClass(classNames.IconMd);
  });

  it('should have a small class', () => {
    const component = createComponent({size: 'sm'});
    const icon = component.getByTestId('icon');
    expect(icon).toHaveClass(classNames.IconSm);
  });

  it('should have a medium class', () => {
    const component = createComponent({size: 'md'});
    const icon = component.getByTestId('icon');
    expect(icon).toHaveClass(classNames.IconMd);
  });

  it('should have a large class', () => {
    const component = createComponent({size: 'lg'});
    const icon = component.getByTestId('icon');
    expect(icon).toHaveClass(classNames.IconLg);
  });

  it('should have an extra large class', () => {
    const component = createComponent({size: 'xl'});
    const icon = component.getByTestId('icon');
    expect(icon).toHaveClass(classNames.IconXl);
  });

});
