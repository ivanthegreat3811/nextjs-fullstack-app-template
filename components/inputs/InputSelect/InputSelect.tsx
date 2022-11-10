import { IInputBaseProps } from '../IInputBaseProps';
import defaultStyles from '../InputBaseStyle_1.module.css';

type option = string;

export interface IInputSelect extends IInputBaseProps {
  currentValue: string;
  options: option[];
  handleChange: (args: { event: React.ChangeEvent<HTMLSelectElement>; field: string; index?: number }) => void;
}

export default function InputSelect({
  title,
  field,
  options,
  currentValue,
  index,
  required = false,
  disabled = false,
  className,
  styleSheet = defaultStyles,
  handleChange,
}: IInputSelect) {
  return (
    <div className={`${styleSheet.inputSelectContainer} ${styleSheet.inputContainer} ${className || ''}`}>
      <h6 className={`${styleSheet.inputSelecetTitle} ${styleSheet.inputTitle}`}>
        {title}
        {required && <span className={styleSheet.inputRequired}>*</span>}
      </h6>
      <select
        className={`${styleSheet.inputSelecetDropdown}`}
        value={currentValue || undefined}
        onChange={event => handleChange({ event, field, index })}
        disabled={disabled}>
        <option value={undefined}>---</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
