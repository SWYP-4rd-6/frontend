import { MouseEventHandler, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ButtonInputProps {
  id: string;
  type: string;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  register: UseFormRegisterReturn<string>;
  clickFunc?: MouseEventHandler<HTMLButtonElement>;
  value?: string;
}

const ButtonInput = ({
  id,
  type,
  placeholder,
  className,
  autoComplete,
  register,
  clickFunc,
  value,
}: ButtonInputProps) => {

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`input-style ${className} ${value ? 'border-signature' : 'border-[#D9D9D9]'}`}
        autoComplete={autoComplete}
        {...register}
      />
      <button
        onClick={clickFunc}
        className={`absolute top-1/2 transform -translate-y-1/2 right-0 text-[16px] px-3 py-[8px] ${value ? `text-white bg-signature font-[900]` : `text-[#646464] bg-[#D9D9D9] font-[300]`} `}
      >
        중복 확인
      </button>
    </div>
  );
};

export default ButtonInput;
