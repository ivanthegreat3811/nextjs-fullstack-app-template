import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputSelect, { IInputSelect } from './InputSelect';
import { mockInputSelectProps } from './InputSelect.mocks';

export default {
  title: 'inputs/InputSelect',
  component: InputSelect,
  argTypes: {},
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelect> = (args) => (
  <InputSelect {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInputSelectProps.base,
} as IInputSelect;
