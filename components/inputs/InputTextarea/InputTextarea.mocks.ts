import { IInputTextarea } from './InputTextarea';

const base: IInputTextarea = {
  title: 'textArea',
  field: 'textArea',
  currentValue: 'Hello World!',
  handleChange: ({ event, field, index }) => {},
};

export const mockInputTextareaProps = { base };
