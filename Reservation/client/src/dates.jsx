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

const InputWrapper = styled.section`
  border: 1px solid #dedede;
`;

const Input = styled.input`
  display: inline-block;
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
