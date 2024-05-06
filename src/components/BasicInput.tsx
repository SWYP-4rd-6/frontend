import {UseFormRegisterReturn} from 'react-hook-form';

interface BasicInputProps {
  id: string;
  type: string;
  placeholder: string;
  className: string;
  autoComplete: string;
  register: UseFormRegisterReturn<string>,
}

const BasicInput = ({
  id,
  type,
  placeholder,
  className,
  autoComplete,
  register,
}: BasicInputProps) => {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete}
        {...register}
      />
    </>
  );
};

export default BasicInput;
