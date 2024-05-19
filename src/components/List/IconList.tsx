import React, { ReactNode } from 'react';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';

type PropsType = {
  icon: SymbolCodepoints;
  text?: string | null;
  children?: ReactNode;
};

const IconList = ({ icon, text, children }: PropsType) => {
  return (
    <li className="flex   items-center space-x-2">
      <MaterialSymbol icon={icon} size={20} fill grade={-25} className="text-signature" />
      <p className="font-light">{text}</p>
      {children}
    </li>
  );
};

export default IconList;
