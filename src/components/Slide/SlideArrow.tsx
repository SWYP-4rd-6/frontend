type PropsType = {
  onClick?: () => void;
  direction: 'prev' | 'next';
};

const SlideArrow = ({ onClick, direction }: PropsType) => {
  return (
    <div
      className={`${direction === 'prev' ? `left-0` : 'right-0 -scale-x-100'} ps-6 h-full top-0 z-10 absolute  cursor-pointer flex justify-center items-center"`}
      onClick={onClick}
    >
      <img
        className="z-50 w-full h-9 top-0 left-0 right-0 bottom-0 m-auto "
        src={'/slide_arrow.png'}
      />
    </div>
  );
};

export default SlideArrow;
