import { IInputFile } from './InputFile';

const base: IInputFile = {
  title: 'Input File',
  field: 'Input File',
  handleChange: ({ event, field }) => console.log(event.target),
  height: 100,
  width: 100,
};

export const mockInputFileProps = { base };
