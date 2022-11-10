import React, { CSSProperties } from 'react';
import { IInputBaseProps } from '../IInputBaseProps';
import defaultStyles from '../InputBaseStyle_1.module.css';

export interface IInputFile extends IInputBaseProps {
  width: number;
  height: number;
  handleChange: (args: { event: React.ChangeEvent<HTMLInputElement>; field: string; index?: number }) => void;
  multiple?: boolean;
  children?: React.ReactNode;
}

export default function InputFile({
  // parameters
  title,
  field,
  index,
  multiple = false,
  required = false,
  disabled = false,
  handleChange,
  width,
  height,
  className,
  styleSheet,
  children,
}: IInputFile) {
  const labelDefaultStyle: CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    width: width + 'px',
    height: height + 'px',
    backgroundColor: 'white',
    borderRadius: '15px',
    border: 'dashed 1px gray',
    cursor: 'pointer',
    margin: 'auto',
  };

  const spanDefaultStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100%',
    textAlign: 'center',
    fontSize: '16px',
  };
  if (width < 200) spanDefaultStyle.fontSize = '14px';

  const inputDefaultStyle: CSSProperties = {
    display: 'none',
  };

  return (
    <label
      className={`${className} ${defaultStyles.inputFilelabel} ${defaultStyles.inputLabel}  ${defaultStyles.inputFileContainer} ${defaultStyles.inputContainer} `}
      style={labelDefaultStyle}>
      {multiple ? (
        <input
          className="inputFileInput"
          style={inputDefaultStyle}
          onChange={event => handleChange({ event, field, index })}
          type="file"
          accept=".png,.jpg,.jpeg"
          multiple
        />
      ) : (
        <input
          className="inputFileInput"
          style={inputDefaultStyle}
          onChange={event => handleChange({ event, field, index })}
          type="file"
          accept=".png,.jpg,.jpeg"
        />
      )}
      <span style={spanDefaultStyle}>
        {title || (
          <span>
            <b>＋</b> 檔案上傳
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
