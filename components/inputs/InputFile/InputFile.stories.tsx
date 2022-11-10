import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputFile, { IInputFile } from './InputFile';
import { mockInputFileProps } from './InputFile.mocks';

export default {
  title: 'inputs/InputFile',
  component: InputFile,
  argTypes: {},
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args) => (
  <InputFile {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockInputFileProps.base,
} as IInputFile;
