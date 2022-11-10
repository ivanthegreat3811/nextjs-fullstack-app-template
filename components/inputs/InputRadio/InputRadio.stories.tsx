import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputRadio, { IInputRadio } from './InputRadio';
import { mockInputRadioProps } from './InputRadio.mocks';

export default {
  title: 'inputs/InputRadio',
  component: InputRadio,
  argTypes: {},
} as ComponentMeta<typeof InputRadio>;

const Template: ComponentStory<typeof InputRadio> = (args) => (
  <InputRadio {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInputRadioProps.base,
} as IInputRadio;
