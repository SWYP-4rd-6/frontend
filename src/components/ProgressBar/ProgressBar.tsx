const ProgressBar = ({ step }: { step: number }) => {
  const baseProgress = (step / 7) * 100;
  const extraWidth = step === 7 ? 4 : 0;
  const progress = `calc(${baseProgress}% + ${extraWidth}px)`;

  return (
    <div className="w-full bg-white h-[0.875rem] mb-[0.875rem] border-2 border-sub-none box-border relative">
      <div
        className="absolute -top-[2px] -left-[2px] bg-signature h-[0.875rem] transition-all duration-500"
        style={{ width: progress, boxSizing: 'border-box' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
