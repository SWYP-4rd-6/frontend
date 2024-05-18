import { GuideProductType } from '@/types/common';

type PropsType = {
  src: string;
  onClick?: () => void;
};

const Slide = ({ onClick, src }: PropsType) => {
  return (
    <div className=" h-[27rem] relative " onClick={onClick}>
      <div
        className="inset-0 size-full bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="absolute inset-0 bg-[#0173FA] bg-opacity-20"></div>
    </div>
  );
};

export default Slide;
