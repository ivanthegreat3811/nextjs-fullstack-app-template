import { IInputCheckbox } from './InputCheckbox';

const base: IInputCheckbox = {
  title: 'Input Checkbox',
  field: 'Input Checkbox',
  checkAll: false,
  handleChange: ({ event, field, index }) => {},
  options: { apple: true, ball: false, cat: true, dog: true },
};

export const mockInputCheckboxProps = { base };
