import { FC, ReactNode } from 'react';

const BackGround: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="bg-slate-100 w-screen h-screen flex items-center">{children}</div>
);

export default BackGround;
