import { MaterialSymbol } from 'react-material-symbols';
import { useNavigate } from 'react-router-dom';
interface headerProps {
  type?: string;
}

const Header = ({ type }: headerProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className={`mb-[14px] cursor-pointer ${type === 'trans' && 'z-50 absolute top-0 left-0 box-border'}`}
    >
      <MaterialSymbol
        icon="arrow_back"
        fill
        size={28}
        className="pt-[26px] pb-5 pl-[25px] text-[#646464] z-50"
      />
      {type !== 'trans' && <div className="border-y-2 border-signature h-[10px]"></div>}
    </div>
  );
};

export default Header;
