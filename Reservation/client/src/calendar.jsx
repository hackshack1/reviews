import React from 'react';
import moment from 'moment';
import Day from './day';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment().format('MMMM YYYY'),
      weekdays: moment.weekdaysMin(),
      firstDay: moment()
        .startOf('month')
        .format('d'),
      lastDate: moment()
        .endOf('month')
        .format('D')
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    let node = this.node;
    if (node.contains(e.target)) {
      console.log('clicked');
    } else {
      this.props.displayCal('');
    }
  }

  createDays(firstDay, lastDate) {
    const days = [];
    const rows = [];
    let start = 0;
    let end = 7;

    for (let k = 0; k < firstDay; k++) {
      days.push(<Day key={`b${k}`} day="" />);
    }
    for (let k = 1; k <= lastDate; k++) {
      days.push(<Day key={k} month={this.state.month} day={k} />);
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
      <div ref={node => (this.node = node)}>
        <section>{this.state.month}</section>
        <table>
          <thead>
            <tr>
              {this.state.weekdays.map(day => (
                <th key={`wd${day}`}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.createDays(this.state.firstDay, this.state.lastDate)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
