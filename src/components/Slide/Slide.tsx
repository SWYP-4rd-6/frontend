import { GuideProductType } from '@/types/common';

type PropsType = {
  src: string;
  onClick?: () => void;
};

/* */
const Slide = ({ onClick, src }: PropsType) => {
  return (
    <div className=" h-[27rem] relative cursor-pointer" onClick={onClick}>
      <div
        className="inset-0 size-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="blue-filter"></div>
    </div>
  );
};

export default Slide;
