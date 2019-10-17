import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Cell = styled.td`
  ${props =>
    props.unavailable
      ? `text-decoration: line-through #dedede; 
      color: #dedede;`
      : props.checkInSelected
      ? `background-color: #02A699;
        color: white;`
      : props.cal === 'checkIn'
      ? `:hover {
        background-color: #E4E7E7;
      }`
      : null}
  ${props =>
    props.isMinStay
      ? `background-color: #B3F1EC;
      color: white;`
      : null}
`;

const Day = props => (
  <Cell
    unavailable={props.unavailable}
    cal={props.cal}
    checkInSelected={props.checkInSelected}
    isMinStay={props.isMinStay}
    onClick={() => {
      !props.unavailable
        ? props.handleDateClick(props.cal, props.month, props.day)
        : null;
    }}
    onMouseOver={() => {
      props.checkInSelected ? props.handleSelectedHover() : null;
    }}
    onMouseLeave={props.handleMouseLeave}
  >
    {props.day}
  </Cell>
);

export default Day;
