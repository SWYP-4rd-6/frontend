type PropsType = {
  className?: string;
  color?: string;
  thick?: number;
};

const DoubleLine = ({ className, color = 'signature', thick }: PropsType) => {
  return (
    <div
      className={`${className} ${color === 'white' ? '*:bg-white' : '*:bg-signature'} ${thick === 2 ? '*:h-0.5' : '*:h-px'} *:w-full `}
    >
      <div className={`mb-1`} />
      <div />
    </div>
  );
};

export default DoubleLine;
