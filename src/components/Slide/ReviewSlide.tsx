import { imgs } from '@/constants/test';
import StarGrade from '../StarGrade';
import { ReviewType } from '@/types/common';

type PropsType = {
  onClick?: () => void;
  content: ReviewType;
};

const ReviewSlide = ({ onClick, content }: PropsType) => {
  return (
    <div className="px-5 py-4 border-content w-[93%] cursor-pointer">
      <div className="flex">
        <div
          className="size-[3.2rem] rounded-full bg-sub-non inset-0 bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: `url(${content.profileImageUrl})` }}
        ></div>
        <div className="mx-3">
          <p className="font-black text-signature text-base">{content.reviewer}</p>
          <StarGrade point={content.rating} />
        </div>
      </div>

      <div className="text-xs text-light h-14 my-3">{content.content}</div>
      {content.reviewImages.map((item, index) => (
        <div key={index} className="size-10 inline-block bg-sub-non mr-3">
          <img className="size-full" src={item}></img>
        </div>
      ))}
    </div>
  );
};

export default ReviewSlide;
