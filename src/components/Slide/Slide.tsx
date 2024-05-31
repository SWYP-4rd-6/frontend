import { GuideProductType } from '@/types/common';

type PropsType = {
  src: string;
  onClick?: () => void;
};

/* */
const Slide = ({ onClick, src }: PropsType) => {
  return (
    <div className=" min-h-[27rem] min-w-full relative cursor-pointer" onClick={onClick}>
      <div
        className="inset-0 size-full bg-cover bg-center bg-no-repeat min-h-[27rem] min-w-full "
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="blue-filter"></div>
    </div>
  );
};

export default Slide;
