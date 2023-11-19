import React from "react";

interface InputProps {
  label: string;
  type: string;
  name: string;
  className: string;
  required?: boolean;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComp: React.FC<InputProps> = (inputProps) => {
  const {
    label,
    type,
    name,
    className,
    required,
    placeholder,
    minLength,
    maxLength,
    pattern,
    value,
    onChange,
  } = inputProps;

  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className={className}
        required={required}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputComp;
