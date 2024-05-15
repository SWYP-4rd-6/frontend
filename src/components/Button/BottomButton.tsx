import { Link } from 'react-router-dom';
import { MaterialSymbol, MaterialSymbolProps } from 'react-material-symbols';
interface PropsType {
  num: number;
  text: Array<string>;
  icons: Array<any>;
  onClickOne?: () => void;
  onClickTwo?: () => void;
}

const BottomButton = ({ onClickOne, onClickTwo, num, text, icons }: PropsType) => {
  return (
    <div
      className=" sticky justify-between
    bottom-0 bg-white py-8 min-h-24 flex rounded-t-3xl shadow-top 
    *:flex *:items-center  *:justify-center *:mx-2 *:flex-1"
    >
      <button onClick={onClickOne} className=" ">
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
        <button onClick={onClickTwo} className=" ">
          <MaterialSymbol icon={icons[1]} size={24} fill grade={-25} className="text-sub-bu" />
          <span className="text-xl text-sub-bu font-light ml-1">{text[1]}</span>
        </button>
      )}
    </div>
  );
};

export default BottomButton;
