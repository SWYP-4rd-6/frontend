type PropsType = {
  className?: string;
};

const DoubleLine = ({ className }: PropsType) => {
  return (
    <div className={className}>
      <div className="w-full h-0.5 bg-signature mb-1" />
      <div className="w-full h-0.5 bg-signature" />
    </div>
  );
};

export default DoubleLine;
