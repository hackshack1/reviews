import React, { useEffect } from 'react';
import GuestDropdown from './guestDropdown';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5px;

  .field {
    display: block;
    margin: 2px;
    font-size: 12px;
    font-weight: 500;
  }
`;

const Button = styled.button`
  border: 1px solid #dedede;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 16px;
    display: inline-block;
    padding: 5px;
    margin: 5px;
  }

  svg {
    margin: 10px;
  }

  :focus {
    border: 1px solid #02a699;
    span {
      background-color: #a0f2ea;
      outline: none;
      border-radius: 3px;
    }
  }
`;

const Guests = props => {
  const node = React.createRef();

  const guestAmt =
    props.guestAmt > 1
      ? ` ${props.guestAmt} guests`
      : ` ${props.guestAmt} guest`;

  const infantAmt =
    props.infants === 1
      ? `, ${props.infants} infant `
      : props.infants > 1
      ? `, ${props.infants} infants `
      : null;

  const handleClick = e => {
    if (node.current) {
      if (!node.current.contains(e.target)) {
        props.handleDropdownClick(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);

    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  });

  return (
    <Wrapper ref={node}>
      <label className="field">Guests</label>
      <Button
        onClick={() => {
          props.handleDropdownClick(!props.displayDropdown);
        }}
      >
        <span>
          {guestAmt} {infantAmt}
        </span>
        {props.displayDropdown ? (
          <svg width="16px" height="16px">
            <line
              x1="0"
              x2="8"
              y1="8"
              y2="0"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="butt"
            ></line>
            <line
              x1="15"
              x2="8"
              y1="8"
              y2="0"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="butt"
            ></line>
          </svg>
        ) : (
          <svg width="16px" height="16px">
            <line
              x1="0"
              x2="8"
              y1="8"
              y2="15"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="butt"
            ></line>
            <line
              x1="15"
              x2="8"
              y1="8"
              y2="15"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="butt"
            ></line>
          </svg>
        )}
      </Button>
      {props.displayDropdown ? (
        <GuestDropdown
          handleDropdownClick={props.handleDropdownClick}
          handleGuestClick={props.handleGuestClick}
          adults={props.adults}
          children={props.children}
          infants={props.infants}
          maxGuest={props.maxGuest}
        />
      ) : null}
    </Wrapper>
  );
};

export default Guests;
