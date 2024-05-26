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
import { calculateDiffMonths } from '@/utils';
import CategoryButton from '@/components/Button/CategoryButton';

interface PropsType {
  onClickPayment: () => void;
  onChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  message: string;
  startDate: Date;
  endDate: Date;
  handleDateRangeChange: (start: Date | null, end: Date | null) => void;
  handleTimeRangeChange: ({
    startTime,
    endTime,
  }: {
    startTime?: string | null;
    endTime?: string | null;
  }) => void;

  title: string;
  open: { calendar: boolean };
  toggleState: (name: 'calendar') => any;
  guideStart: string;
  guideEnd: string;
  guideTime: number;
}

const ReservationDetailView = ({
  message,
  startDate,
  endDate,
  guideStart,
  guideEnd,
  guideTime,
  onClickPayment,
  onChangeText,
  toggleState,
  open,
  handleDateRangeChange,
  handleTimeRangeChange,
  title,
}: PropsType) => {
  const generateTimeButtons = () => {
    console.log(guideStart);
    console.log(startDate);
    const buttons = [];
    let current = parseISO('2024-05-25 00:00:00');
    //let current: Date = startDate;
    // 다음 시간의 정시로 설정
    if (
      current.getMinutes() !== 0 ||
      current.getSeconds() !== 0 ||
      current.getMilliseconds() !== 0
    ) {
      current = startOfHour(addHours(current, 1));
    }
    const endOfStartDay = setMilliseconds(
      setSeconds(setMinutes(setHours(parseISO(guideStart), 11), 0), 0),
      0,
    );
    while (isBefore(current, endOfStartDay) || isEqual(current, endOfStartDay)) {
      buttons.push(
        <CategoryButton
          key={format(current, 'HH:mm')}
          text={format(current, 'HH:mm')}
          onClick={() => {}}
        />,
      );
      current = addHours(current, 1);
    }

    return buttons;
  };

  /*
  const generateTimeButtons = () => {
    const buttons = [];
    let current = parseISO(guideStart);
    const endDate = parseISO(guideEnd);
    while (isBefore(current, endDate) || isEqual(current, endDate)) {
      buttons.push(
        <CategoryButton
          key={format(current, 'HH:mm')}
          text={format(current, 'HH:mm')}
          //active={selectedCategory === category}
          onClick={() => {}}
        />,
      );
      current = addHours(current, 1);
    }

    return buttons;
  };
*/
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
        {generateTimeButtons()}

        {/* 
        <TimeRangePicker
          endActive={false}
          handleTimeRangeChange={handleTimeRangeChange}
          initialEndTime={guideEnd}
          initialStartTime={guideStart}
          lange={guideTime}
        /> */}
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
