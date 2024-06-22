import { MaterialSymbol } from 'react-material-symbols';

interface ArrowButtonProps {
  activate: boolean;
  moveForward?: () => void;
  moveBack?: () => void;
}

const ArrowButton = ({ activate, moveForward, moveBack }: ArrowButtonProps) => {
  const buttonStyle = `h-12 flex justify-center items-center border-2 border-[#D9D9D9] text-[#D9D9D9]transition`;

  return (
    <div className="flex gap-5 justify-center items-center absolute bottom-12">
      <button type="button" className={`${buttonStyle} w-12 bg-white`} onClick={moveBack}>
        <MaterialSymbol icon="arrow_back" fill size={24} color='#d9d9d9' />
      </button>
      <button
        type="button"
        className={`${buttonStyle} w-full px-[30px] ${activate ? 'text-white bg-signature border-none' : 'bg-white'}`}
        disabled={!activate}
        onClick={moveForward}
      >
        {activate ? (
          <img src="/icons/arrow_forward_white.png" alt="arrow" />
        ) : (
          <img src="/icons/arrow_forward.png" alt="arrow" />
        )}
      </button>
    </div>
  );
};

export default ArrowButton;
