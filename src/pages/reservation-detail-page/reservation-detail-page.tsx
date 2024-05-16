import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/** */
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, FocusedInputShape } from 'react-dates';

/** */
import { ILocation, SlickSettingsType, UserType } from '@/types/common';
import Header from '@/components/Header/Header';
import moment, { Moment } from 'moment';
import TimePicker from '@/components/TimePicker';
import Payment from '@/components/Payment';
import BottomButton from '@/components/Button/BottomButton';

interface PropsType {
  onClickTripImage: () => void;
  location?: ILocation;
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
  onClickComplete: () => void;
  content: UserType;
  startDate: Moment | null;
  endDate: Moment | null;
  focusedInput: FocusedInputShape;
  handleFocusChange: any;
  handleDatesChange: any;
}

const ReservationDetailView = ({
  onClickTripImage,
  content,
  startDate,
  endDate,
  focusedInput,
  handleFocusChange,
  handleDatesChange,
  onClickComplete,
}: PropsType) => {
  return (
    <div className=" ">
      <Header />
      <section className="px-6 ">
        <div className="title ">
          <span className="title">타이틀</span>에 <br />
          참여해볼까요?
        </div>
        <div className="line-content">
          <div className="sub-title-2">날짜</div>
          <div className="px-5 py-4 border-content text-base text-light my-3">
            <DateRangePicker
              verticalHeight={400}
              disableScroll={false}
              keepOpenOnDateSelect={true}
              startDate={startDate}
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={endDate}
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => {
                handleDatesChange({ startDate, endDate });
              }}
              onFocusChange={(focusedInput) => {
                handleFocusChange(focusedInput);
              }}
              focusedInput={focusedInput}
              orientation="vertical"
            />
          </div>
          <div className="sub-title-2">시간</div>
          <div className="px-5  border-content text-base text-light my-3 parent">
            <TimePicker text="시작 시간" value="17:00" onChange={(value) => console.log(value)} />{' '}
            <TimePicker
              text="마감 시간"
              value="17:00"
              lastChild
              onChange={(value) => console.log(value)}
            />{' '}
          </div>
          <div className="sub-title-2">호스트에게 할 메시지</div>
          <textarea
            className="px-5 py-4 border-content text-base text-light my-3 w-full"
            placeholder="호스트에게 하고 싶은 메시지를 남겨주세요!"
          >
            {content.profile}
          </textarea>
          <div className="sub-title-2">결제수단</div>
          <div className="px-5 py-4 border-content text-base text-light my-3">
            <Payment />
          </div>
        </div>
      </section>
      <BottomButton
        num={1}
        text={['예약 요청']}
        icons={['local_activity']}
        onClickOne={onClickComplete}
      />
    </div>
  );
};

export default ReservationDetailView;