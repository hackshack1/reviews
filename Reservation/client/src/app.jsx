import React from 'react';
import moment from 'moment';
import request from '../request';
import Dates from './dates';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      basePrice: 0,
      cleaningFee: 0,
      discount: 0,
      serviceFee: 0,
      taxes: 0,
      maxGuest: 0,
      guestAmt: 0,
      minStayWeekday: 0,
      minStayWeekdend: 0,
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      instantBooked: true,
      cal: ''
    };

    this.displayCal = this.displayCal.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
  }

  componentDidMount() {
    request.getReservations(listing => {
      this.setState(listing);
    });
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
          {this.state.basePrice}
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
