import React, { useEffect } from 'react';

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
    <div ref={node} className="guestDropdown">
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
    </div>
  );
};

export default GuestDropdown;
