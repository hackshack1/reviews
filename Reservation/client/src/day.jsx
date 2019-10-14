import React from 'react';

const Day = props => (
  <td
    onClick={() => {
      props.handleDateClick(props.cal, props.month, props.day);
    }}
  >
    {props.day}
  </td>
);

export default Day;
