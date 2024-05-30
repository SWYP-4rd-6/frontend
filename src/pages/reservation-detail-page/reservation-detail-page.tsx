import { ReservationType, UserType } from '@/types/common';
import Header from '@/components/Header/Header';
import moment, { Moment } from 'moment';
import TimePicker from '@/components/TimePicker';
import Payment from '@/components/Payment';
import BottomButton from '@/components/Button/BottomButton';
import DayPickerRange from '@/components/DayPickerRange';
import { ChangeEvent, ChangeEventHandler } from 'react';
import TimeRangePicker from '@/components/TimeRangePicker';
import CalendarR from '@/components/CalendarR/CalendarR';
import {
  parseISO,
  format,
  isBefore,
  isEqual,
  addHours,
  startOfHour,
  setMilliseconds,
  setSeconds,
  setMinutes,
  setHours,
} from 'date-fns';
import { calculateDiffMonths, extractHour } from '@/utils';
import CategoryButton from '@/components/Button/CategoryButton';
import TimeSelector from '@/components/TimeSelector';

interface PropsType {
  onClickPayment: () => void;
  onChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  message: string;
  startDate: Date | null;
  endDate: Date | null;
  handleDateRangeChange: (start: Date | null, end: Date | null) => void;
  title: string;
  open: { calendar: boolean };
  toggleState: (name: 'calendar') => any;
  guideStart: string;
  guideEnd: string;
  guideTime: number;
  guideStartTime: string;
  guideEndTime: string;
  selectedTime: string | null;
  handleTimeChange: (num: string | null) => void;
}

const ReservationDetailView = ({
  message,
  startDate,
  endDate,
  guideStart,
  guideEnd,
  guideTime,
  guideStartTime,
  guideEndTime,
  onClickPayment,
  onChangeText,
  toggleState,
  open,
  handleDateRangeChange,
  title,
  selectedTime,
  handleTimeChange,
}: PropsType) => {
  return (
    <div className="relative  h-full">
      <Header />
      <section className="px-6 h-full">
        <div className="title-lg-bk ">
          <div className="whitespace-nowrap ">
            <span className="title-lg inline-block max-w-[88%] text-ellipsis  line-clamp-1  ">
              {title}
            </span>
            <span>에</span>
          </div>
          <p>참여해볼까요?</p>
        </div>
        <div className="line-content">
          <div className="sub-title-2">날짜</div>
          <div className="mb-5">
            {open.calendar ? (
              <CalendarR
                onDateRangeChange={handleDateRangeChange}
                initialDate={{ guideStart: parseISO(guideStart), guideEnd: parseISO(guideEnd) }}
                monthRange={calculateDiffMonths(guideStart, guideEnd) + 1}
              />
            ) : (
              <div
                onClick={() => toggleState('calendar')}
                className=" px-5 py-[0.75rem] border-2 border-signature"
              >
                <div className="text-sub-bu font-[300] text-base">
                  <div>
                    <span className="text-signature font-[900]">
                      {startDate && endDate
                        ? `${format(startDate, 'yyyy년 M월 d일')} ~ ${format(endDate, 'yyyy년 M월 d일')}`
                        : '날짜를 선택해주세요'}
                    </span>
                    에
                  </div>
                  <div>이웃을 만나요.</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="sub-title-2">예약 가능 시간</div>
        <TimeSelector
          startTime={extractHour(guideStartTime)}
          endTime={extractHour(guideEndTime)}
          selectedTime={selectedTime}
          handleTimeChange={handleTimeChange}
        />
        <div className="sub-title-2 hidden">호스트에게 할 메시지</div>
        <textarea
          className="px-5 py-4 border-content text-base text-light my-3 w-full hidden"
          placeholder="호스트에게 하고 싶은 메시지를 남겨주세요!(필수)"
          maxLength={500}
          onChange={onChangeText}
          value={message}
        />
      </section>
      <BottomButton
        className="sticky"
        buttons={[
          {
            text: '예약 요청',
            icon: 'local_activity',
            onClick: onClickPayment,
            active: message.length > 0,
          },
        ]}
      />
    </div>
  );
};

export default ReservationDetailView;
