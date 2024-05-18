import { MaterialSymbol } from 'react-material-symbols';

interface ArrowButtonProps {
  activate: boolean;
  moveForward?: () => void;
  moveBack?: () => void;
}

const ArrowButton = ({ activate, moveForward, moveBack }: ArrowButtonProps) => {
  const buttonStyle = `h-12 flex justify-center items-center border-2 border-[#D9D9D9] text-[#D9D9D9] transition`;

  return (
    <div className="flex gap-5 justify-center items-center max-w-[400px] fixed bottom-12">
      <button type="button" className={`${buttonStyle} w-12`} onClick={moveBack}>
        <MaterialSymbol icon="arrow_back" fill size={24} />
      </button>
      <button
        type="button"
        className={`${buttonStyle} w-full px-[30px] ${activate && 'text-white bg-signature border-none'}`}
        disabled={!activate}
        onClick={moveForward}
      >
        {activate ? (
          <img src="/arrow-forward-white.png" alt="arrow" />
        ) : (
          <img src="/arrow-forward.png" alt="arrow" />
        )}
      </button>
    </div>
  );
};

export default ArrowButton;
