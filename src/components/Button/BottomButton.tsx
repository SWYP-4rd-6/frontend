import { Link } from 'react-router-dom';
import { MaterialSymbol, MaterialSymbolProps } from 'react-material-symbols';
interface PropsType {
  className?: string;
  buttons: Array<{
    text?: string;
    icon?: any;
    onClick?: () => void;
    active?: boolean;
  }>;
  children?: React.ReactNode;
}

const BottomButton: React.FC<PropsType> = ({ buttons, className = 'fixed', children }) => {
  return (
    <div
      className={`${className} bottom-0 justify-between w-full overflow-hidden min-h-24
    bg-white flex gap-x-1 rounded-t-3xl shadow-top *:flex *: items-center *:justify-center
    py-8 `}
      //sticky bottom-0  *:px-2 *:flex-1 px-5 `}
    >
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={`${className} w-full text-xl font-light ${button.active ? 'text-signature' : 'text-sub-bu'}`}
        >
          {button.icon && (
            <MaterialSymbol
              icon={button.icon}
              size={24}
              fill
              grade={-25}
              className="inline-block mr-1"
            />
          )}
          {children}
          <span>{button.text}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomButton;
