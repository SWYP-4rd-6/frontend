import { MaterialSymbol } from 'react-material-symbols';

interface ArrowButtonProps {
  activate: boolean;
  onClick: () => void;
}

const TextArrowButton = ({ activate, onClick }: ArrowButtonProps) => {
  const buttonStyle = `flex justify-center items-center transition`;

  return (
    <div className={`${buttonStyle} gap-5 mt-10`}>
      <button
        type="button"
        className={`${buttonStyle} h-12  w-full px-[1.875rem]  text-white bg-signature `}
        disabled={!activate}
        onClick={() => onClick()}
      >
        <div className="min-w-fit  w-1/2 font-bold text-xl pr-1 py-2">예약 신청 완료</div>
        <img className="max-w-[64%] " src="/icons/arrow_forward_white_m.png " alt="arrow" />
      </button>
    </div>
  );
};

export default TextArrowButton;
