import React, { ReactNode } from 'react';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';

type PropsType = {
  icon: SymbolCodepoints;
  text: string | null;
  children?: ReactNode;
};

const CategoryIcon = ({ icon, text, children }: PropsType) => {
  return (
    <div className="inline-block text-signature ">
      <MaterialSymbol icon={icon} size={36} fill grade={-25} />
      <p className="text-xs font-light">{text}</p>
      {children}
    </div>
  );
};

export default CategoryIcon;
