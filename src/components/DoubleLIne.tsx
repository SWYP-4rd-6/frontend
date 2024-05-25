type PropsType = {
  className?: string;
  color?: string;
  thick?: string;
};

const DoubleLine = ({ className, color = 'signature', thick }: PropsType) => {
  return (
    <div
      className={`${className} *:bg-${color} ${thick ? '*:h-[' + thick + ']' : '*:h-px'} *:w-full `}
    >
      <div className={`mb-1`} />
      <div />
    </div>
  );
};

export default DoubleLine;
