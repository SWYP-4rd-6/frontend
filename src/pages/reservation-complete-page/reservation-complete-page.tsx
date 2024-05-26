import TextArrowButton from '@/components/Button/TextArrowButton';
import Header from '@/components/Header/Header';
import Loading from '@/components/Loading';
import Ticket from '@/components/Ticket';
import { GuideProductType } from '@/types/common';

interface PropsType {
  content?: GuideProductType;
  onClick: () => void;
}
const ReservationCompleteView = ({ content, onClick }: PropsType) => {
  return (
    <div>
      <Header />
      <div className="px-6">
        <div className="title">예약 요청 완료!</div>
        <div className="desc-text pt-3.5 pb-4">
          가이드가 일정을 확인하고 있어요. <br />
          예약을 확정하면 알려드릴게요!
        </div>
        {content ? <Ticket src={content.thumb} content={content} /> : <Loading />}

        <TextArrowButton activate={true} onClick={onClick} />
      </div>
    </div>
  );
};

export default ReservationCompleteView;
