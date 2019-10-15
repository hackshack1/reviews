import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import request from '../request';
import Dates from './dates';
import Guests from './guests';
import TotalPrice from './totalPrice';

const Wrapper = styled.div`
  border: 1px solid #dedede;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  width: 300px;
  float: right;
  padding: 15px;
  margin: 5px;
  grid-gap: 15px;
`;

const Price = styled.section`
  font-size: 0.5em;
  font-weight: 400;
  padding: 5px;
  padding-bottom: 20px;
  justify-self: start;
  border-bottom: 1px solid #dedede;
`;

const Rate = styled.span`
  font-size: 4em;
  font-weight: 700;
`;

const ReserveButton = styled.button`
  background-color: #f25764;
  color: white;
  border-radius: 8px;
  text-align: center;
  font-size: 16px
  font-weight: 500;
  padding: 10px;
  margin: 5px;
`;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      basePrice: 0,
      newPrice: 0,
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
      nights: 0,
      instantBooked: true,
      cal: '',
      displayDropdown: false,
      displayTotal: false
    };

    this.displayCal = this.displayCal.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
    this.calculatePrice = this.calculatePrice.bind(this);
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
      this.setState({ checkOut }, this.calculatePrice);
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
    let displayTotal = true;
    let newPrice;
    let nights;
    if (checkOut !== 'Check-out' && checkIn !== 'Check-in') {
      nights = moment(checkOut).diff(moment(checkIn), 'days');
      newPrice = nights * basePrice;
    }

    this.setState({ newPrice, nights, displayTotal });
  }

  render() {
    return (
      <Wrapper>
        <Price>
          <Rate>${this.state.basePrice}</Rate>
          per night
        </Price>
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
        {this.state.displayTotal ? (
          <TotalPrice
            basePrice={this.state.basePrice}
            newPrice={this.state.newPrice}
            nights={this.state.nights}
            serviceFee={this.state.serviceFee}
            taxes={this.state.taxes}
            cleaningFee={this.state.cleaningFee}
          />
        ) : null}
        <ReserveButton>Reserve</ReserveButton>
      </Wrapper>
    );
  }
}
