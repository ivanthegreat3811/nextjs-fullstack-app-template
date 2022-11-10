import { IInputRadio } from './InputRadio';

const base: IInputRadio = {
  title: 'Input Title',
  field: 'textField',
  options: ['apple', 'cat', 'dog'],
  currentValue: 'Hello world!',
  handleChange: ({ event, field, index }) => {
    console.log('Hiiii');
  },
};

export const mockInputRadioProps = { base };
