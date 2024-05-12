import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface BasicInputProps {
  id: string;
  type: string;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  register: UseFormRegisterReturn<string>;
  value?: string;
}

const BasicInput = ({
  id,
  type,
  placeholder,
  className,
  autoComplete,
  register,
}: BasicInputProps) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`input-style ${className} ${!isEmpty ? 'border-signature' : 'border-[#D9D9D9]'}`}
        autoComplete={autoComplete}
        {...register}
        onChange={handleInputChange}
      />
    </>
  );
};

export default BasicInput;
