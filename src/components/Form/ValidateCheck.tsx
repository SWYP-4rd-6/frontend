import { MaterialSymbol } from 'react-material-symbols';

interface ValidateCheckProps {
  content: string;
  isChecked: boolean;
}

const ValidateCheck = ({ content, isChecked }: ValidateCheckProps) => {
  return (
    <span
      className={`${isChecked ? 'text-signature font-[700]' : 'text-[#D9D9D9] font-[300]'} flex justify-center items-center gap-[2px]`}
    >
      {content} <MaterialSymbol icon="check" fill size={18} />
    </span>
  );
};

export default ValidateCheck;
