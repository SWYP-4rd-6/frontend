import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { MaterialSymbol } from 'react-material-symbols';

interface PasswordInputProps {
  id: string;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  register: UseFormRegisterReturn<string>;
  value?: string;
}

const PasswordInput = ({
  id,
  placeholder,
  className,
  autoComplete,
  register,
  value,
}: PasswordInputProps) => {
  const [pwVisible, setPwVisible] = useState(false);

  return (
    <div className="relative flex justify-end items-center">
      <input
        id={id}
        type={pwVisible ? 'text' : 'password'}
        placeholder={placeholder}
        className={`input-style ${className} ${value ? `border-signature` : 'border-[#D9D9D9]'}`}
        autoComplete={autoComplete}
        {...register}
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
