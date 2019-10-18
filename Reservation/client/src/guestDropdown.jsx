import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #dedede;
  background: white;
  z-index: 1;
  width: 358px;
  height: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    display: inline-block;
    margin: 0px 15px;
  }

  .info {
    margin: 10px 0px;
    font-size: 12px;
  }

  .extraInfo {
    margin: 15px;
    font-size: 12px;
  }
`;

const ButtonWrapper = styled.span`
  display: flex;
  width: 120px;
  margin-right: 15px;
  justify-content: space-between;
  align-items: center;

  button {
    width: 35px;
    height: 35px;
    padding: 0;
    border: 1px solid #02a699;
    border-radius: 50%;
  }

  .sign {
    font-size: 16px;
  }
`;

const GuestDropdown = props => {
  let node = React.createRef();

  const handleClick = e => {
    if (!node.current.contains(e.target)) {
      props.handleDropdownClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);

    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  });

  return (
    <Wrapper ref={node} className="guestDropdown">
      <Option>
        <label>Adults</label>
        <ButtonWrapper>
          <button
            onClick={() => {
              props.handleGuestClick('adults', 'minus');
            }}
          >
            <span className="sign">-</span>
          </button>
          {props.adults}
          <button
            onClick={() => {
              props.handleGuestClick('adults', 'plus');
            }}
          >
            <span className="sign">+</span>
          </button>
        </ButtonWrapper>
      </Option>
      <Option>
        <label>
          <div>Children</div>
          <div className="info">Ages 2-12</div>
        </label>
        <ButtonWrapper>
          <button
            onClick={() => {
              props.handleGuestClick('children', 'minus');
            }}
          >
            <span className="sign">-</span>
          </button>
          {props.children}
          <button
            onClick={() => {
              props.handleGuestClick('children', 'plus');
            }}
          >
            <span className="sign">+</span>
          </button>
        </ButtonWrapper>
      </Option>
      <Option>
        <label>
          <div>Infants</div>
          <div className="info">Under 2</div>
        </label>
        <ButtonWrapper>
          <button
            onClick={() => {
              props.handleGuestClick('infants', 'minus');
            }}
          >
            <span className="sign">-</span>
          </button>
          {props.infants}
          <button
            onClick={() => {
              props.handleGuestClick('infants', 'plus');
            }}
          >
            <span className="sign">+</span>
          </button>
        </ButtonWrapper>
      </Option>
      <Option>
        <div className="extraInfo">
          Infants don’t count toward the number of guests.
        </div>
      </Option>
    </Wrapper>
  );
};

export default GuestDropdown;
