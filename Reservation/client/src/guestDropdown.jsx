import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #dedede;
  background: white;
  z-index: 1;
  width: 358px;
  position: absolute;
  display: flex;
  flex-direction: column;
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
      <label>
        Adults
        <button
          onClick={() => {
            props.handleGuestClick('adults', 'minus');
          }}
        >
          minus
        </button>
        {props.adults}
        <button
          onClick={() => {
            props.handleGuestClick('adults', 'plus');
          }}
        >
          plus
        </button>
      </label>
      <label>
        Children
        <button
          onClick={() => {
            props.handleGuestClick('children', 'minus');
          }}
        >
          minus
        </button>
        {props.children}
        <button
          onClick={() => {
            props.handleGuestClick('children', 'plus');
          }}
        >
          plus
        </button>
      </label>
      <label>
        Infants
        <button
          onClick={() => {
            props.handleGuestClick('infants', 'minus');
          }}
        >
          minus
        </button>
        {props.infants}
        <button
          onClick={() => {
            props.handleGuestClick('infants', 'plus');
          }}
        >
          plus
        </button>
      </label>
    </Wrapper>
  );
};

export default GuestDropdown;
