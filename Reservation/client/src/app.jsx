import React from 'react';
import moment from 'moment';
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
      checkOut: 'Check-out',
      cal: ''
    };

    this.displayCal = this.displayCal.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
  }

  displayCal(cal) {
    this.setState({ cal });
  }

  handleDateClick(cal, month, date) {
    const selected = moment(`${month} ${date}`, 'MMMM-YYYY-DD').format(
      'MM/DD/YYYY'
    );

    if (cal === 'checkIn') {
      const checkIn = selected;
      const cal = 'checkOut';
      this.setState({ checkIn, cal });
    } else {
      const checkOut = selected;
      this.setState({ checkOut });
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.state.price}
          per night
        </div>
        <Dates
          checkIn={this.state.checkIn}
          checkOut={this.state.checkOut}
          displayCal={this.displayCal}
          cal={this.state.cal}
          handleDateClick={this.handleDateClick}
        />
        <div>guest</div>
        <button type="button">Reserve</button>
      </div>
    );
  }
}

export default App;
