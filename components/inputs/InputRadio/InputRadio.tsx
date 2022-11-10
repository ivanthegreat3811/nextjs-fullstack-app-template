import { IInputBaseProps } from '../IInputBaseProps';
import defaultStyles from '../InputBaseStyle_1.module.css';

type option = string;

export interface IInputRadio extends IInputBaseProps {
  currentValue: string;
  options: option[];
  handleChange: (args: { event: React.ChangeEvent<HTMLInputElement>; field: string; index?: number }) => void;
}

export default function InputRadio({
  title,
  field,
  index,
  currentValue,
  options,
  required = false,
  disabled = false,
  handleChange,
  className,
  styleSheet = defaultStyles,
}: IInputRadio) {
  return (
    <div className={`${className} ${styleSheet.inputRadioContainer} ${styleSheet.inputContainer} `}>
      <div>
        <h6 className={`${styleSheet.inputRadioTitle} ${styleSheet.inputTitle}`}>
          {title}
          {required && <span className={styleSheet.inputRequired}>*</span>}
        </h6>
      </div>
      <div>
        {options.map(option => (
          <label key={option} className={`${styleSheet.inputRadioLabel} ${styleSheet.inputLabel}`}>
            <input
              type="radio"
              onChange={event => handleChange({ event, field, index })}
              value={option || undefined}
              checked={currentValue === option}
              disabled={disabled}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
