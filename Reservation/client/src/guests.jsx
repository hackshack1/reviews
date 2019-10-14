import React from 'react';
import GuestDropdown from './guestDropdown';

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
    <div className="guests" ref={props.node}>
      <label>Guests</label>
      <button
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
    </div>
  );
};

export default Guests;
