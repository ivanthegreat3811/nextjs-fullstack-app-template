import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputText, { IInputText } from './InputText';
import { mockInputTextProps } from './InputText.mocks';

export default {
  title: 'inputs/InputText',
  component: InputText,
  argTypes: {},
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInputTextProps.base,
} as IInputText;
