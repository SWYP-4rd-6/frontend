import { GuideProductType } from '@/types/common';
import { MaterialSymbol } from 'react-material-symbols';
import { formatDate, formatDate2 } from '@/utils';
import DoubleLine from '@/components/DoubleLIne';
import IconText from '@/components/IconText';

type PropsType = {
  content: GuideProductType;
  onClick: () => void;
};

/*
 * 호스트 상세페이지 이미지 리스트
 */
const ImgList = ({ content, onClick }: PropsType) => {
  return (
    <div className="relative cursor-pointer " onClick={onClick}>
      <img className="size-[11.25rem] object-cover" alt="" src={content.thumb} />
      <div className="blue-filter" />
      <div className="px-4 absolute top-[2.35rem] w-full">
        <div className="font-black text-base text-white mb-0.5">{content.title}</div>
        <DoubleLine color="white" />
      </div>
      <div className="px-4 absolute bottom-6">
        <IconText text={content.locationName} icon={'fmd_good'} />
        <IconText
          text={`${formatDate2(content.guideStart)}~${formatDate2(content.guideEnd)}`}
          icon={'date_range'}
        />
      </div>
    </div>
  );
};

export default ImgList;
