import React from 'react';
import Dates from './dates.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      maxGuests: 0,
      price: 95,
      guestAmt: 0,
      checkIn: 'Check-in',
      checkOut: 'Check-out'
    };
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.state.price}
          per night
        </div>
        <Dates checkIn={this.state.checkIn} checkOut={this.state.checkOut} />
        <div>guest</div>
        <button type="button">Reserve</button>
      </div>
    );
  }
}

export default App;
