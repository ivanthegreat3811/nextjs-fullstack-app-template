import React from 'react';
import { IInputBaseProps } from '../IInputBaseProps';
import defaultStyles from '../InputBaseStyle_1.module.css';

export interface IInputNumber extends IInputBaseProps {
  currentValue: number;
  min?: number;
  max?: number;
  handleChange: (args: { event: React.ChangeEvent<HTMLInputElement>; field: string; index?: number }) => void;
}

export default function InputNumber({
  title,
  field,
  currentValue,
  index,
  min,
  max,
  required = false,
  disabled = false,
  handleChange,
  className,
  styleSheet = defaultStyles,
}: IInputNumber) {
  return (
    <label className={`${className} ${styleSheet.inputNumberContainer} ${styleSheet.inputContainer} ${styleSheet.inputNumberlabel} ${styleSheet.inputLabel}`}>
      <h6 className={`${styleSheet.inputNumberTitle} ${styleSheet.inputTitle}`}>
        {title}
        {required && <span className={styleSheet.inputRequired}>*</span>}
      </h6>
      <input
        type="number"
        min={min}
        max={max}
        onChange={event => handleChange({ event, field, index })}
        value={currentValue || undefined}
        disabled={disabled}
      />
    </label>
  );
}
