import { IInputNumber } from './InputNumber';

const base: IInputNumber = {
  title: 'Input Number',
  field: 'Input Number',
  min: 0,
  max: 10,
  currentValue: 3,
  handleChange: ({ event, field, index }) => {
    console.log(event.target);
    console.log(field);
    console.log(index);
  },
};

export const mockInputNumberProps = { base };
