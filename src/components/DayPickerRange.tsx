import React, { useState } from 'react';

import { DateRangePicker, FocusedInputShape } from 'react-dates';
import moment, { Moment } from 'moment';
import { MaterialSymbol } from 'react-material-symbols';

interface PropsType {
  startDate: Moment | null;
  endDate: Moment | null;
  handleDatesChange: ({
    startDate,
    endDate,
  }: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => void;
}

const DayPickerRange = (props: PropsType) => {
  //const [startDate, setStartDate] = useState<Moment | null>(null);
  // const [endDate, setEndDate] = useState<Moment | null>(null);
  // const [focusedInput, setFocusedInput] = useState<'startDate' | 'endDate'>('startDate');

  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(null);

  const handleFocusChange = (focusedInput: FocusedInputShape | null) => {
    setFocusedInput(focusedInput);
    // setFocusedInput(!focusedInput ? 'startDate' : focusedInput);
  };

  const isOutsideRange = (day: Moment) => {
    // 현재 날짜로부터 90일 내의 날짜만 선택 가능하도록 설정
    const today = moment();
    const maxDate = moment().add(90, 'days');
    return day.isBefore(today, 'day') || day.isAfter(maxDate, 'day');
  };

  return (
    <div className="">
      <DateRangePicker
        startDate={props.startDate}
        startDateId="start_date_id"
        endDate={props.endDate}
        endDateId="end_date_id"
        onDatesChange={props.handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={handleFocusChange}
        orientation="vertical"
        verticalHeight={400}
        numberOfMonths={3}
        disableScroll={false}
        keepOpenOnDateSelect={false}
        isOutsideRange={isOutsideRange} // 특정 날짜 범위 외의 날짜 비활성화
        displayFormat="YYYY-MM-DD"
        startDatePlaceholderText="시작일"
        endDatePlaceholderText="완료일"
        inputIconPosition="before"
        hideKeyboardShortcutsPanel

        /*
      onFocusChange={(focusedInput) => {
          handleFocusChange(focusedInput);
        }}
   onDatesChange={({ startDate, endDate }) => {
                handleDatesChange({ startDate, endDate });
              }}
              onFocusChange={(focusedInput) => {
                handleFocusChange(focusedInput);
              }}


                  onFocusChange={(focusedInput) => {
          handleFocusChange(focusedInput);
        }}
        */
      />
    </div>
  );
};

export default DayPickerRange;
