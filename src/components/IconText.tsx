import { MaterialSymbol, MaterialSymbolProps, SymbolCodepoints } from 'react-material-symbols';

type PropsType = {
  className?: string;
  icon: SymbolCodepoints;
  text?: string;
  textClass?: string;
  iconClass?: string;
  iconSize?: number;
};

const IconText = ({
  icon,
  text,
  textClass = 'text-white text-[0.7rem]',
  iconClass,
  iconSize = 19,
}: PropsType) => {
  return (
    <div className={`font-right flex items-center ${textClass}`}>
      <MaterialSymbol
        icon={icon}
        size={iconSize}
        fill
        grade={-25}
        className={`mr-0.5 ${iconClass}`}
      />
      {text}
    </div>
  );
};
export default IconText;
