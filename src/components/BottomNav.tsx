import { Link } from 'react-router-dom';
import { MaterialSymbol } from 'react-material-symbols';
import { ReactNode } from 'react';
import FloatingButton from './Button/FloatingButton';

type PropsType = {
  login: boolean;
  children?: ReactNode;
};

const BottomNav = ({ login, children }: PropsType) => {
  return (
    <div className=" relative h-full overflow-y-scroll no-scroll-bar">
      {children}
      <FloatingButton />
      <div
        className={`fixed bottom-0 justify-between w-full overflow-hidden
    bg-white px-5 py-7 flex gap-x-1 rounded-t-3xl shadow-top *:flex *: items-center *:justify-center`}
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
    </div>
  );
};

export default BottomNav;
