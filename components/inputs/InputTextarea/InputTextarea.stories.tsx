import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputTextarea, { IInputTextarea } from './InputTextarea';
import { mockInputTextareaProps } from './InputTextarea.mocks';

export default {
  title: 'inputs/InputTextarea',
  component: InputTextarea,
  argTypes: {},
} as ComponentMeta<typeof InputTextarea>;

const Template: ComponentStory<typeof InputTextarea> = args => <InputTextarea {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockInputTextareaProps.base,
} as IInputTextarea;
