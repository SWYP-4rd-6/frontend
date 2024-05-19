import { CategoryType, CategoryKorType, GuideProductType } from '@/types/common';
import { formatDate, getTagNameKor } from '@/utils';

type PropsType = {
  onClick: () => void;
  content: GuideProductType;
};

/* 메인 근처 카드 */
const SlideCard = ({ content, onClick }: PropsType) => {
  return (
    <div className=" h-[22.5rem] w-[22.5rem] relative cursor-pointer " onClick={onClick}>
      <div
        className="inset-0 size-full bg-contain bg-center bg-no-repeat  "
        style={{ backgroundImage: `url(${content.thumb})` }}
      ></div>
      <div className="blue-filter"></div>
      <div className="px-8 absolute bottom-8">
        <div className="font-black text-4xl text-white">{content.title}</div>
        <div className="text-base text-white font-right">
          {formatDate(content.guideStart)}~{formatDate(content.guideEnd)}
        </div>
        {content.categories?.map((item: CategoryType, index) => (
          <span key={index} className="text-sm text-white font-right">
            #{getTagNameKor(item)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SlideCard;
