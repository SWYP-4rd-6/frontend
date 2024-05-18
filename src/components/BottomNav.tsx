import { Link } from 'react-router-dom';
import { MaterialSymbol } from 'react-material-symbols';

type PropsType = {
  login: boolean;
};

const BottomNav = ({ login }: PropsType) => {
  return (
    <div
      className="sticky justify-between
    bottom-0 bg-white px-5 py-7 flex gap-x-1 rounded-t-3xl shadow-top *:flex *: items-center *:justify-center"
    >
      {login ? (
        <>
          <Link to="#" className="">
            <img src="/select_nav_home.png" className="w-[6.4rem] " alt="home" />
          </Link>
          <Link to="#" className="mx-2">
            <MaterialSymbol icon="trip" size={24} fill grade={-25} color="#d9d9d9" />
          </Link>
          <Link to="#" className="mx-2">
            <MaterialSymbol icon="message" size={24} fill grade={-25} color="#d9d9d9" />
          </Link>
          <Link to="#" className="mx-2">
            <MaterialSymbol icon="person" size={24} fill grade={-25} color="#d9d9d9" />
          </Link>
        </>
      ) : (
        <>
          <Link to="#" className="w-1/2">
            <img src="/select_nav_explore.png" className=" w-[8.2rem]" alt="home" />
          </Link>
          <Link to="/login" className="w-1/2 font-poppins font-extrabold text-xl text-signature">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default BottomNav;
