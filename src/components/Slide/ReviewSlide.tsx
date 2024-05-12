import { imgs } from '@/constants/test';
import StarGrade from '../StarGrade';

type PropsType = {
  onClick?: () => void;
};

const ReviewSlide = ({ onClick }: PropsType) => {
  return (
    <div className="px-5 py-4 border-content w-[93%]">
      <div className="flex">
        <div className="size-[3.2rem] rounded-full bg-sub-non"></div>
        <div className="mx-3">
          <p className="font-black text-signature text-base">busannnnni</p>
          <StarGrade point={4} />
        </div>
      </div>

      <div className="text-xs text-light h-14 my-3">
        후기가 너무 좋아서 기대 되네요! 다음번에도 참여하고 싶어요.
      </div>
      {imgs.map((category, index) => (
        <div className="size-10 inline-block bg-sub-non mr-3"></div>
      ))}
    </div>
  );
};

export default ReviewSlide;
