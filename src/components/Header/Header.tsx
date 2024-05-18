import { MaterialSymbol } from 'react-material-symbols';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className="mb-[14px] cursor-pointer ">
      <MaterialSymbol
        icon="arrow_back"
        fill
        size={28}
        className="pt-[26px] pb-5 pl-[25px] text-[#646464]"
      />
      <div className="border-y-2 border-signature h-[10px]"></div>
    </div>
  );
};

export default Header;
