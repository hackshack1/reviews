import React from 'react';

const TotalPrice = props => {
  let feesNTaxes = props.taxes * props.newPrice;

  return (
    <div>
      <section>
        <span>{`$${props.basePrice} x ${props.nights}`}</span>
        <span>${props.newPrice}</span>
      </section>
      <section>
        <span>Service fee</span> <span>${props.serviceFee}</span>
      </section>
      {props.cleaningFee > 0 ? (
        <section>
          <span>Cleaning fee</span> <span>{props.cleaningFee}</span>
        </section>
      ) : null}
      <section>
        <span>Occupancy taxes and fees</span> <span>${feesNTaxes}</span>
      </section>
      <section>
        <span>Total</span>
        <span>${props.newPrice + props.serviceFee + feesNTaxes}</span>
      </section>
    </div>
  );
};

export default TotalPrice;
