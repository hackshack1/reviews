import React from 'react';
import Calendar from './calendar';

const Dates = props => (
  <div>
    <label>Dates</label>
    <input
      onClick={() => {
        props.displayCal('checkIn');
      }}
      type="text"
      readOnly
      value={props.checkIn}
    />
    <input
      onClick={() => {
        props.displayCal('checkOut');
      }}
      type="text"
      readOnly
      value={props.checkOut}
    />
    {props.cal === 'checkIn' ? (
      <Calendar
        cal={props.cal}
        handleDateClick={props.handleDateClick}
        displayCal={props.displayCal}
      />
    ) : null}
    {props.cal === 'checkOut' ? (
      <Calendar
        cal={props.cal}
        handleDateClick={props.handleDateClick}
        displayCal={props.displayCal}
      />
    ) : null}
  </div>
);

export default Dates;
