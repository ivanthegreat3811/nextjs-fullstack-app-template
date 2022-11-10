import { IInputSelect } from './InputSelect';

const base: IInputSelect = {
  title: 'Input Title',
  field: 'textField',
  options: ['apple', 'cat', 'dog'],
  currentValue: 'Hello world!',
  handleChange: ({ event, field, index }) => {
    console.log('Hiiii');
  },
};

export const mockInputSelectProps = { base };
