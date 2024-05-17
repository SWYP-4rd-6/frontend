import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, FocusedInputShape } from 'react-dates';
import moment, { Moment } from 'moment';

interface PropsType {
  startDate: Moment | null;
  endDate: Moment | null;
}

const DayPickerRange = (props: PropsType) => {
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  // const [focusedInput, setFocusedInput] = useState<'startDate' | 'endDate'>('startDate');

  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(null);

  const handleDatesChange = ({
    startDate,
    endDate,
  }: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleFocusChange = (focusedInput: FocusedInputShape | null) => {
    setFocusedInput(focusedInput);
  };

  return (
    <div>
      <DateRangePicker
        startDate={startDate}
        startDateId="start_date_id"
        endDate={endDate}
        endDateId="end_date_id"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={handleFocusChange || null}
        orientation="vertical"
        verticalHeight={400}
        numberOfMonths={12}
        disableScroll={false}
        /*
        keepOpenOnDateSelect={true}
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
