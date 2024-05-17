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
      className=" sticky justify-between
    bottom-0 bg-white py-8 min-h-24 flex rounded-t-3xl shadow-top 
    *:flex *:items-center  *:justify-center *:mx-2 *:flex-1"
    >
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={`text-xl font-light ${button.active ? 'text-signature' : 'text-sub-bu'}`}
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
      {/*
      <button onClick={onClickOne} className={`*:${actives && getColor(actives[0])}`}>
        <MaterialSymbol
          icon={icons[0]}
          size={24}
          fill
          grade={-25}
          className="text-sub-bu inline-block "
        />
        <div className="text-xl text-sub-bu font-light ml-1 ">{text[0]}</div>
      </button>
      {num > 1 && (
        <button onClick={onClickTwo} className={`*:${actives && getColor(actives[0])}`}>
          <MaterialSymbol icon={icons[1]} size={24} fill grade={-25} className="text-sub-bu" />
          <span className="text-xl text-sub-bu font-light ml-1">{text[1]}</span>
        </button>
      )}

      */}
    </div>
  );
};

export default BottomButton;
