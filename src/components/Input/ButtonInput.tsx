import { ChangeEventHandler, MouseEventHandler } from 'react';

interface ButtonInputProps {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  clickFunc: MouseEventHandler<HTMLButtonElement>;
  value: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  buttonText: string;
  readonly?: boolean;
}

const ButtonInput = ({
  id,
  type,
  name,
  placeholder,
  className,
  autoComplete,
  clickFunc,
  value,
  handleChange,
  buttonText,
  readonly,
}: ButtonInputProps) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input-style ${className} ${value ? 'border-signature' : 'border-[#D9D9D9]'}`}
        autoComplete={autoComplete}
        value={value}
        onChange={handleChange}
        readOnly={readonly}
      />
      <button
        onClick={clickFunc}
        className={`absolute top-1/2 transform -translate-y-1/2 right-0 text-[16px] px-3 py-[8px] ${value ? `text-white bg-signature font-[900]` : `text-[#646464] bg-[#D9D9D9] font-[300]`} `}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ButtonInput;
