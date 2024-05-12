import { imgs } from '@/constants/test';
import StarGrade from '../StarGrade';
import { reviewType } from '@/types/common';

type PropsType = {
  onClick?: () => void;
  content: reviewType;
};

const ReviewSlide = ({ onClick, content }: PropsType) => {
  return (
    <div className="px-5 py-4 border-content w-[93%]">
      <div className="flex">
        <div className="size-[3.2rem] rounded-full bg-sub-non"></div>
        <div className="mx-3">
          <p className="font-black text-signature text-base">{content.user}</p>
          <StarGrade point={content.point} />
        </div>
      </div>

      <div className="text-xs text-light h-14 my-3">{content.desc}</div>
      {imgs.map((category, index) => (
        <div key={index} className="size-10 inline-block bg-sub-non mr-3"></div>
      ))}
    </div>
  );
};

export default ReviewSlide;
