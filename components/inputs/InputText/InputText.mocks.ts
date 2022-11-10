import { IInputText } from './InputText';

const base: IInputText = {
  title: 'Input Title',
  field: 'textField',
  currentValue: 'Hello world!',
  handleChange: ({ event, field, index }) => {
    console.log('Hiiii');
  },
};

export const mockInputTextProps = { base };
