import { ChangeEventHandler, useState } from 'react';

interface BasicInputProps {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const BasicInput = ({
  id,
  type,
  name,
  placeholder,
  className,
  autoComplete,
  value,
  handleChange,
}: BasicInputProps) => {
  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input-style ${className} ${value ? 'border-signature' : 'border-[#D9D9D9]'}`}
        autoComplete={autoComplete}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default BasicInput;
