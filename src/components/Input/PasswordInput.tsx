import { ChangeEventHandler, useState } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

interface PasswordInputProps {
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const PasswordInput = ({
  id,
  name,
  placeholder,
  className,
  autoComplete,
  value,
  handleChange,
}: PasswordInputProps) => {
  const [pwVisible, setPwVisible] = useState(false);

  return (
    <div className="relative flex justify-end items-center">
      <input
        id={id}
        name={name}
        type={pwVisible ? 'text' : 'password'}
        placeholder={placeholder}
        className={`input-style ${className} ${value ? `border-signature` : 'border-[#D9D9D9]'}`}
        autoComplete={autoComplete}
        value={value}
        onChange={handleChange}
      />
      <span
        className="absolute mr-[20px] flex cursor-pointer"
        onClick={() => setPwVisible((prev) => !prev)}
      >
        <MaterialSymbol
          icon={pwVisible ? 'visibility' : 'visibility_off'}
          size={16}
          color="#D9D9D9"
        />
      </span>
    </div>
  );
};

export default PasswordInput;
