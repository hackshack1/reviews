import React from 'react';
import GuestDropdown from './guestDropdown';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5px;

  label {
    display: block;
    margin: 2px;
    font-size: 12px;
    font-weight: 500;
  }

  .guests {
    border: 1px solid #dedede;
    padding: 8px;
    width: 100%;
    text-align: left;

    :after {
      position: absolute;
      width: 10px;
      height: 10px;
      border-top: 1px solid black;
      border-right: 0px solid #dedede;
      border-bottom: 0px solid #dedede;
      border-left: 1px solid black;
      left: 80%
      content: '';
      transform: rotate(45deg);
      margin-top: 5px;
      background: white;
    }

    :select:after {
      border-top: 0px solid black;
      border-right: 1px solid #dedede;
      border-bottom: 1px solid #dedede;
      border-left: 0px solid black;
    }
  }
`;

const Guests = props => {
  const guestAmt =
    props.guestAmt > 1 ? `${props.guestAmt} guests` : `${props.guestAmt} guest`;

  const infantAmt =
    props.infants === 1
      ? `, ${props.infants} infant`
      : props.infants > 1
      ? `, ${props.infants} infants`
      : null;

  return (
    <Wrapper ref={props.node}>
      <label>Guests</label>
      <button
        className="guests"
        onClick={() => {
          props.handleDropdownClick(true);
        }}
      >
        {guestAmt} {infantAmt}
      </button>
      {props.displayDropdown ? (
        <GuestDropdown
          handleDropdownClick={props.handleDropdownClick}
          handleGuestClick={props.handleGuestClick}
          adults={props.adults}
          children={props.children}
          infants={props.infants}
        />
      ) : null}
    </Wrapper>
  );
};

export default Guests;
