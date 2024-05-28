import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MaterialSymbol } from 'react-material-symbols';
import FloatingButton from './Button/FloatingButton';
import useScrollStore from '@/store/scrollStore';

type PropsType = {
  login: boolean;
  children?: ReactNode;
};

const BottomNavLayout = ({ login, children }: PropsType) => {
  const { scrolling, setScrolling } = useScrollStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleScroll = () => {
    setScrolling(true);
  };

  const handleScrollEnd = () => {
    setScrolling(false);
  };

  useEffect(() => {
    const container = containerRef?.current;

    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('scrollend', handleScrollEnd);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('scrollend', handleScrollEnd);
      }
    };
  }, []);

  return (
    <div className="relative h-full overflow-y-scroll no-scroll-bar" ref={containerRef}>
      {children}
      <FloatingButton />
      <div
        className={`fixed bottom-0 justify-between w-full overflow-hidden
    bg-white px-5 py-7 flex gap-x-1 rounded-t-3xl shadow-top *:flex *: items-center *:justify-center`}
      >
        {login ? (
          <>
            <Link to="/" className="">
              {location.pathname === '/' ? (
                <img src="/select_nav_home.png" className="w-[6.4rem]" alt="home" />
              ) : (
                <MaterialSymbol icon="home" size={24} fill grade={-25} color="#d9d9d9" />
              )}
            </Link>
            <Link to="#" className="mx-2">
              <MaterialSymbol icon="trip" size={24} fill grade={-25} color="#d9d9d9" />
            </Link>
            <Link to="#" className="mx-2">
              <MaterialSymbol icon="message" size={24} fill grade={-25} color="#d9d9d9" />
            </Link>
            <Link to={`/mypage/${localStorage.getItem('userId')}`} className="mx-2">
              {location.pathname.startsWith('/mypage/') ? (
                <img src="/select_nav_mypage.png" className="w-[6.4rem]" alt="mypage" />
              ) : (
                <MaterialSymbol icon="person" size={24} fill grade={-25} color="#d9d9d9" />
              )}
            </Link>
          </>
        ) : (
          <>
            <Link to="#" className="w-1/2">
              <img src="/select_nav_explore.png" className="w-[8.2rem]" alt="explore" />
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

export default BottomNavLayout;
