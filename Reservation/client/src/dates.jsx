import React from 'react';
import Calendar from './calendar';

const Dates = props => (
  <div>
    <section>Dates</section>
    {props.checkIn} {props.checkOut}
    <Calendar />
  </div>
);

export default Dates;
