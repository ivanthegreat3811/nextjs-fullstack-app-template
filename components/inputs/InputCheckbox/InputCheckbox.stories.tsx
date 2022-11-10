import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputCheckbox, { IInputCheckbox } from './InputCheckbox';
import { mockInputCheckboxProps } from './InputCheckbox.mocks';

export default {
  title: 'inputs/InputCheckbox',
  component: InputCheckbox,
  argTypes: {},
} as ComponentMeta<typeof InputCheckbox>;

const Template: ComponentStory<typeof InputCheckbox> = (args) => (
  <InputCheckbox {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInputCheckboxProps.base,
} as IInputCheckbox;
