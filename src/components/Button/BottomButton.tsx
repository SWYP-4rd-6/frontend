import { Link } from 'react-router-dom';
import { MaterialSymbol, MaterialSymbolProps } from 'react-material-symbols';
interface PropsType {
  buttons: Array<{
    text: string;
    icon: any;
    onClick?: () => void;
    active?: boolean;
  }>;
}

const BottomButton = ({ buttons }: PropsType) => {
  const getColor = (active: boolean) => {
    return active ? 'text-signature' : 'text-sub-bu';
  };
  return (
    <div
      className=" sticky justify-between w-full
    bottom-0 bg-white py-8 min-h-24 flex rounded-t-3xl shadow-top 
    *:flex *:items-center  *:justify-center *:px-2 *:flex-1"
    >
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={`w-full text-xl font-light ${button.active ? 'text-signature' : 'text-sub-bu'}`}
        >
          <MaterialSymbol
            icon={button.icon}
            size={24}
            fill
            grade={-25}
            className="inline-block mr-1"
          />
          <span>{button.text}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomButton;
