import { IInputBaseProps } from '../IInputBaseProps';
import defaultStyles from '../InputBaseStyle_1.module.css';

export interface IInputTextarea extends IInputBaseProps {
  currentValue: string;
  handleChange: (args: { event: React.ChangeEvent<HTMLTextAreaElement>; field: string; index?: number }) => void;
}

export default function InputTextarea({
  title,
  field,
  index,
  currentValue,
  required = false,
  disabled = false,
  className,
  styleSheet = defaultStyles,
  handleChange,
}: IInputTextarea) {
  return (
    <div
      className={`${className}
      ${styleSheet.inputTextareaContainer} 
      ${styleSheet.inputContainer}`}>
      <h6 className={`${styleSheet.inputTextareaTitle} ${styleSheet.inputTitle}`}>
        {title}
        {required && <span className={styleSheet.inputRequired}>*</span>}
      </h6>
      <textarea onChange={event => handleChange({ event, field, index })} value={currentValue || ''} required={required} disabled={disabled}></textarea>
    </div>
  );
}
