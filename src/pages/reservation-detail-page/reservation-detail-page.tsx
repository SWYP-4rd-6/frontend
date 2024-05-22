import { ReservationType, UserType } from '@/types/common';
import Header from '@/components/Header/Header';
import moment, { Moment } from 'moment';
import TimePicker from '@/components/TimePicker';
import Payment from '@/components/Payment';
import BottomButton from '@/components/Button/BottomButton';
import DayPickerRange from '@/components/DayPickerRange';
import { ChangeEvent, ChangeEventHandler } from 'react';
import TimeRangePicker from '@/components/TimeRangePicker';

interface PropsType {
  onClickPayment: () => void;
  onChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  reserveContent?: ReservationType;
  content: string;
  startDate: Moment | null;
  endDate: Moment | null;
  handleDatesChange: ({
    startDate,
    endDate,
  }: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => void;
  handleTimeChange: ({
    startTime,
    endTime,
  }: {
    startTime?: string | null;
    endTime?: string | null;
  }) => void;
}

const ReservationDetailView = ({
  content,
  reserveContent,
  startDate,
  endDate,
  onClickPayment,
  onChangeText,
  handleDatesChange,
  handleTimeChange,
}: PropsType) => {
  return (
    <div className="relative  h-full">
      <Header />
      <section className="px-6 h-full">
        <div className="title ">
          <span className="title">타이틀</span>에 <br />
          참여해볼까요?
        </div>
        <div className="line-content">
          <div className="sub-title-2">날짜</div>
          <div className="px-5 py-4 border-content text-base text-light my-3">
            <DayPickerRange
              startDate={startDate}
              endDate={endDate}
              handleDatesChange={handleDatesChange}
            />
          </div>
        </div>
        <div className="sub-title-2">시간</div>
        <TimeRangePicker />
        <div className="px-5  border-content text-base text-light my-3 parent">
          <TimePicker
            text="시작 시간"
            value="17:00"
            onChange={(value) => handleTimeChange({ startTime: value })}
            open={startDate !== null}
          />{' '}
          <TimePicker
            text="마감 시간"
            value="17:00"
            lastChild
            onChange={(value) => handleTimeChange({ endTime: value })}
            active={false}
          />{' '}
        </div>
        <div className="sub-title-2">호스트에게 할 메시지</div>
        <textarea
          className="px-5 py-4 border-content text-base text-light my-3 w-full"
          placeholder="호스트에게 하고 싶은 메시지를 남겨주세요!(필수)"
          maxLength={500}
          onChange={onChangeText}
          value={content}
        />
      </section>
      <BottomButton
        buttons={[
          {
            text: '예약 요청',
            icon: 'local_activity',
            onClick: onClickPayment,
            active: content.length > 0,
          },
        ]}
      />
    </div>
  );
};

export default ReservationDetailView;
