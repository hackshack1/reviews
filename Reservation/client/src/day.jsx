import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Cell = styled.td`
  ${props =>
    props.unavailable
      ? `text-decoration: line-through #dedede; 
      color: #dedede;`
      : props.isCheckIn
      ? `background-color: #02A699;
        color: white;`
      : props.cal === 'checkIn'
      ? `:hover {
        background-color: #E4E7E7;
      }`
      : null}
  ${props =>
    props.isHover
      ? `background-color: #B3F1EC;
      color: white;`
      : null}
`;

const Day = props => (
  <Cell
    unavailable={props.unavailable}
    cal={props.cal}
    isCheckIn={props.isCheckIn}
    isHover={props.isHover}
    onClick={() => {
      !props.unavailable
        ? props.handleDateClick(props.cal, props.month, props.day)
        : null;
    }}
    onMouseOver={() => {
      !props.unavailable
        ? props.handleMinDaysHover(props.month, props.day, props.cal)
        : null;
    }}
    onMouseLeave={props.handleMouseLeave}
  >
    {props.day}
  </Cell>
);

export default Day;
