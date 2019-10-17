import React from 'react';
import Calendar from './calendar';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5px;
`;
const Label = styled.label`
  display: block;
  margin: 2px;
  font-size: 12px;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  border: 1px solid #dedede;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  display: inline-block;
  vertical-align: middle;
  width: 100px;
  margin: 5px;
  padding: 3px;
  border: none;
  ${props =>
    props.cal === 'checkOut'
      ? `background-color: #a0f2ea;
  outline: none;
  border-radius: 3px;`
      : null}
  :focus {
    background-color: #a0f2ea;
    outline: none;
    border-radius: 3px;
  }
`;

const Dates = props => (
  <Wrapper>
    <Label>Dates</Label>
    <InputWrapper>
      <Input
        onClick={() => {
          props.displayCal('checkIn');
        }}
        type="text"
        readOnly
        value={props.checkIn}
      />
      <svg width="30px" height="20px">
        <line
          x1="0"
          x2="30"
          y1="10"
          y2="10"
          stroke="black"
          strokeWidth=".70"
          strokeLinecap="butt"
        />
        <line />
        <line
          x1="20"
          x2="30"
          y1="18"
          y2="10"
          stroke="black"
          strokeWidth=".70"
          strokeLinecap="butt"
        ></line>
        <line
          x1="30"
          x2="20"
          y1="10"
          y2="2"
          stroke="black"
          strokeWidth=".70"
          strokeLinecap="butt"
        ></line>
      </svg>
      <Input
        cal={props.cal}
        onClick={() => {
          props.displayCal('checkOut');
        }}
        type="text"
        readOnly
        value={props.checkOut}
      />
    </InputWrapper>
    {props.cal === 'checkIn' ? (
      <Calendar
        reservations={props.reservations}
        checkIn={props.checkIn}
        checkOut={props.checkOut}
        selectedDays={props.selectedDays}
        cal={props.cal}
        handleDateClick={props.handleDateClick}
        displayCal={props.displayCal}
        minStayWeekday={props.minStayWeekday}
        minStayWeekend={props.minStayWeekend}
      />
    ) : null}
    {props.cal === 'checkOut' ? (
      <Calendar
        reservations={props.reservations}
        checkIn={props.checkIn}
        checkOut={props.checkOut}
        selectedDays={props.selectedDays}
        cal={props.cal}
        handleDateClick={props.handleDateClick}
        displayCal={props.displayCal}
        minStayWeekday={props.minStayWeekday}
        minStayWeekend={props.minStayWeekend}
      />
    ) : null}
  </Wrapper>
);

export default Dates;
