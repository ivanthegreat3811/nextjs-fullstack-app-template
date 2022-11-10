import { IInputBaseProps } from '../IInputBaseProps';
import defaultStyles from '../InputBaseStyle_1.module.css';

export interface IInputText extends IInputBaseProps {
  currentValue: string;
  placeholder?: string;
  handleChange: (args: { event: React.ChangeEvent<HTMLInputElement>; field: string; index?: number }) => void;
}

export default function InputText({
  title,
  field,
  currentValue,
  index,
  placeholder,
  required = false,
  disabled = false,
  className,
  styleSheet = defaultStyles,
  handleChange,
}: IInputText) {
  return (
    <label
      className={`${className}
     ${styleSheet.inputTextLabel}
     ${styleSheet.inputLabel}
     ${styleSheet.inputTextContainer}
     ${styleSheet.inputContainer}`}>
      <h6 className={`${styleSheet.inputTextTitle}  ${styleSheet.inputTitle}`}>
        {title}
        {required && <span className={styleSheet.inputRequired}>*</span>}
      </h6>
      <input
        type="text"
        // if the function may be undefined, then the code below should be written as handleChange?.(event)
        onChange={event => handleChange({ event, field, index })}
        value={currentValue || ''}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </label>
  );
}
