import { Link } from 'react-router-dom';
import { MaterialSymbol } from 'react-material-symbols';
const BottomButton = () => {
  return (
    <div
      className=" sticky justify-between
    bottom-0 bg-white py-8 min-h-24 flex rounded-t-3xl shadow-top 
    *:flex *:items-center  *:justify-center *:mx-2 *:flex-1"
    >
      <Link to="#" className=" ">
        <MaterialSymbol
          icon="chat"
          size={24}
          fill
          grade={-25}
          className="text-sub-bu inline-block "
        />
        <div className="text-xl text-sub-bu font-light ml-1 ">1:1 Message</div>
      </Link>
      <Link to="#" className=" ">
        <MaterialSymbol icon="local_activity" size={24} fill grade={-25} className="text-sub-bu" />
        <span className="text-xl text-sub-bu font-light ml-1">예약하기</span>
      </Link>
    </div>
  );
};

export default BottomButton;
