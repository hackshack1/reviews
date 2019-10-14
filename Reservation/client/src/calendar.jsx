import React from 'react';
import moment from 'moment';
import Day from './day';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month:
        this.props.checkIn !== 'Check-in'
          ? moment(this.props.checkIn)
          : moment(),
      weekdays: moment.weekdaysMin()
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMonthClick = this.handleMonthClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    let node = this.node;
    if (!node.contains(e.target)) {
      this.props.displayCal('');
    }
  }

  handleMonthClick(arrow) {
    let month =
      arrow === 'left'
        ? this.state.month.subtract(1, 'month')
        : this.state.month.add(1, 'month');

    this.setState({ month });
  }

  createDays(month) {
    const firstDay = month.startOf('month').format('d');
    const lastDate = month.endOf('month').format('D');
    const days = [];
    const rows = [];
    let start = 0;
    let end = 7;

    for (let k = 0; k < firstDay; k++) {
      days.push(<Day key={`b${k}`} day="" />);
    }
    for (let k = 1; k <= lastDate; k++) {
      days.push(
        <Day
          cal={this.props.cal}
          handleDateClick={this.props.handleDateClick}
          key={k}
          month={month.format('MMMM YYYY')}
          day={k}
        />
      );
    }

    for (let k = 0; k < 5; k++) {
      let row = [];
      for (let i = start; i < end; i++) {
        days[i] ? row.push(days[i]) : null;
      }
      start = end;
      end = end + 7;
      row = <tr key={`r${k}`}>{row}</tr>;
      rows.push(row);
    }
    return rows;
  }

  render() {
    return (
      <div ref={node => (this.node = node)} className="calendar">
        <button
          onClick={() => {
            this.handleMonthClick('left');
          }}
        >
          left
        </button>
        <section>{this.state.month.format('MMMM YYYY')}</section>
        <button
          onClick={() => {
            this.handleMonthClick('right');
          }}
        >
          right
        </button>
        <table>
          <thead>
            <tr>
              {this.state.weekdays.map(day => (
                <th key={`wd${day}`}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{this.createDays(this.state.month)}</tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
