import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Cell = styled.td`
  ${props =>
    props.unavailable
      ? 'text-decoration: line-through #dedede; color: #dedede'
      : null}
`;

const Day = props => (
  <Cell
    unavailable={props.unavailable}
    onClick={() => {
      !props.unavailable
        ? props.handleDateClick(props.cal, props.month, props.day)
        : null;
    }}
  >
    {props.day}
  </Cell>
);

export default Day;
