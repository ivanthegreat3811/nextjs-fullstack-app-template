import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputNumber, { IInputNumber } from './InputNumber';
import { mockInputNumberProps } from './InputNumber.mocks';

export default {
  title: 'inputs/InputNumber',
  component: InputNumber,
  argTypes: {},
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInputNumberProps.base,
} as IInputNumber;
