import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Cell = styled.td`
  ${props =>
    props.isSelected
      ? `background-color: #02A699;
        color: white;`
      : props.unavailable
      ? `text-decoration: line-through #dedede; 
      color: #dedede;
      :hover {cursor: default;}`
      : props.cal === 'checkIn'
      ? `:hover {
        background-color: #E4E7E7;
        cursor: pointer;
      };`
      : `:hover {cursor: pointer;}`}
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
    isSelected={props.isSelected}
    isHover={props.isHover}
    onClick={() => {
      !props.unavailable && !props.isSelected
        ? props.handleDateClick(props.cal, props.month, props.day)
        : null;
    }}
    onMouseOver={() => {
      !props.unavailable
        ? props.handleDaysHover
          ? props.handleDaysHover(props.month, props.day, props.cal)
          : null
        : null;
    }}
    onMouseLeave={props.handleMouseLeave}
  >
    {props.day}
  </Cell>
);

export default Day;
