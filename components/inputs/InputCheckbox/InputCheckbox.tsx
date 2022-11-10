import { IInputBaseProps } from '../IInputBaseProps';
import defaultStyles from '../InputBaseStyle_1.module.css';

type handleChangeAll = (args: { event: React.MouseEvent<HTMLAnchorElement>; field: string; option: { reset: true }; index?: number }) => void;
type handleChange = (args: { event: React.ChangeEvent<HTMLInputElement>; field: string; option: string; index?: number }) => void;

export interface IInputCheckbox extends IInputBaseProps {
  options: { [key: string]: boolean };
  handleChange: handleChange;
  handleChangeAll: handleChangeAll;
  checkAll?: boolean;
}

export interface IInputCheckAllboxes {
  field: string;
  disabled?: boolean;
  index?: number;
  handleChangeAll: handleChangeAll;
  styleSheet: any;
}

export default function InputCheckbox({
  title,
  field,
  options,
  index,
  required = false,
  disabled = false,
  checkAll = false,
  handleChange,
  handleChangeAll,
  className,
  styleSheet = defaultStyles,
}: IInputCheckbox) {
  return (
    <div className={`${styleSheet.inputCheckboxContainer} ${styleSheet.inputContainer} ${className || ''}`}>
      {title && (
        <div>
          <h6 className={`${styleSheet.inputCheckboxTitle} ${styleSheet.inputTitle}`}>
            {title}
            {required && <span className={styleSheet.inputRequired}>*</span>}
          </h6>
        </div>
      )}
      <div>
        {Object.keys(options).map(option => (
          <label key={option} className={`${styleSheet.inputCheckboxLabel} ${styleSheet.inputLabel}`}>
            <input type="checkbox" onChange={event => handleChange({ event, field, index, option })} checked={options[option]} disabled={disabled} />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {checkAll && <CheckAllBoxes field={field} index={index} disabled={disabled} handleChangeAll={handleChangeAll} styleSheet={styleSheet} />}
    </div>
  );
}

export function CheckAllBoxes({ field, disabled, index, handleChangeAll, styleSheet }: IInputCheckAllboxes) {
  return (
    <div className={`${styleSheet.checkAll}`}>
      <a onClick={event => disabled !== true && handleChangeAll({ event, field, option: { reset: true }, index })}>清除所有</a>
    </div>
  );
}
