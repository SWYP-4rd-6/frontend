import { GuideProductType } from '@/types/common';
import { MaterialSymbol } from 'react-material-symbols';
import { formatDate } from '@/utils';

type PropsType = {
  content: GuideProductType;
  onClick: () => void;
};

/*
 * 호스트 상세페이지 이미지 리스트
 */
const ImgList = ({ content, onClick }: PropsType) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <div className="max-h-44 overflow-hidden">
        <img className="size-full" src={content.thumb}></img>
      </div>
      <div className="opacity-blue-filter" />
      <div className="px-4 absolute bottom-6">
        <div className="font-black text-base text-white">{content.title}</div>
        <div className="text-[0.7rem] text-white font-right">
          <MaterialSymbol icon="fmd_good" size={19} fill grade={-25} color="white" />
          {content.locationName}
        </div>
        <div className="text-[0.7rem] text-white font-right">
          <MaterialSymbol icon="date_range" size={19} fill grade={-25} color="white" />
          {formatDate(content.guideStart)}~{formatDate(content.guideEnd)}
        </div>
      </div>
    </div>
  );
};

export default ImgList;
