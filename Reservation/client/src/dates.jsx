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
        cal={props.cal}
        handleDateClick={props.handleDateClick}
        displayCal={props.displayCal}
      />
    ) : null}
    {props.cal === 'checkOut' ? (
      <Calendar
        checkIn={props.checkIn}
        cal={props.cal}
        handleDateClick={props.handleDateClick}
        displayCal={props.displayCal}
      />
    ) : null}
  </Wrapper>
);

export default Dates;
