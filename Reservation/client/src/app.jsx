import React from 'react';
import moment from 'moment';
import request from '../request';
import Dates from './dates';
import Guests from './guests';

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
      guestAmt: 1,
      adults: 1,
      children: 0,
      infants: 0,
      minStayWeekday: 0,
      minStayWeekdend: 0,
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      instantBooked: true,
      cal: '',
      displayDropdown: false
    };

    this.displayCal = this.displayCal.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
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

  handleDropdownClick(boo) {
    this.setState({ displayDropdown: boo });
  }

  handleGuestClick(guest, op) {
    const { adults, children, infants, guestAmt, maxGuest } = this.state;

    if (guestAmt <= maxGuest) {
      if (adults >= 1 && guest === 'adults') {
        if (op === 'plus' && guestAmt < maxGuest) {
          this.setState({ adults: adults + 1, guestAmt: guestAmt + 1 });
        } else if (op === 'minus' && adults >= 2) {
          this.setState({ adults: adults - 1, guestAmt: guestAmt - 1 });
        }
      }

      if (children >= 0 && guest === 'children') {
        if (op === 'plus' && guestAmt < maxGuest) {
          this.setState({ children: children + 1, guestAmt: guestAmt + 1 });
        } else if (op === 'minus' && children >= 1) {
          this.setState({ children: children - 1, guestAmt: guestAmt - 1 });
        }
      }
    }

    if (infants >= 0 && guest === 'infants') {
      if (op === 'plus') {
        this.setState({ infants: infants + 1 });
      } else if (op === 'minus' && infants >= 1) {
        this.setState({ infants: infants - 1 });
      }
    }
  }

  calculatePrice() {
    const { basePrice, checkIn, checkOut } = this.state;
    let newPrice;
    if (checkOut !== 'Check-out' && checkIn !== 'Check-in') {
      let days = moment(checkOut).diff(moment(checkIn), 'days');
      newPrice = days * basePrice;
    }
    newPrice = newPrice || basePrice;
    return newPrice;
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.calculatePrice()}
          per night
        </div>
        <Dates
          checkIn={this.state.checkIn}
          checkOut={this.state.checkOut}
          displayCal={this.displayCal}
          cal={this.state.cal}
          handleDateClick={this.handleDateClick}
        />
        <Guests
          guestAmt={this.state.guestAmt}
          displayDropdown={this.state.displayDropdown}
          handleDropdownClick={this.handleDropdownClick}
          handleGuestClick={this.handleGuestClick}
          adults={this.state.adults}
          children={this.state.children}
          infants={this.state.infants}
        />
        <button type="button">Reserve</button>
      </div>
    );
  }
}

export default App;
