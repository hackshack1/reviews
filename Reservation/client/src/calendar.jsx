import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Day from './day';

const Wrapper = styled.div`
  border: 1px solid #dedede;
  background: white;
  z-index: 1;
  position: absolute;
  width: 350px;
  margin: 10px;
  text-align: center;
  display: grid;
  grid-template-rows: 20% 1fr 20%;
  grid-template-columns: 10% 1fr 10%;

  :after {
    position: absolute;
    width: 10px;
    height: 10px;
    border-top: 1px solid #dedede;
    border-right: 0px solid #dedede;
    border-bottom: 0px solid #dedede;
    border-left: 1px solid #dedede;
    bottom: 100%;
    left: ${props => (props.cal === 'checkIn' ? '10%' : '60%')};
    content: '';
    transform: rotate(45deg);
    margin-bottom: -5px;
    background: white;
  }

  h2 {
    grid-row: 1;
    grid-column: 2;
    justify-self: center;
    margin: 20px 0px;
    font-weight: 600;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  grid-column: 2;
  padding: 0;
  margin: 10px 0px;
  height: 30px;
  width: 35px;
  border-radius: 4px;
  border: 1px solid #dedede;
  text-align: center;
`;

const LeftButton = styled(Button)`
  justify-self: start;
`;

const RightButton = styled(Button)`
  justify-self: right;
`;

const Table = styled.table`
  grid-row: 2;
  grid-column: 2;
  margin: 15px 0;
  text-align: center;
  empty-cells: hide;
  border-collapse: separate;
  empty-cells: hide;

  th {
    height: 20px
    font-size: 12px;
  }

  td {
    border: 0.5px solid #dedede;
    height: 30px;
    width: 35px;
    text-align: center;
    vertical-align: middle;
    font-size: 12px;
    font-weight: 500;
  }
`;

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
      <Wrapper ref={node => (this.node = node)} cal={this.props.cal}>
        <LeftButton
          onClick={() => {
            this.handleMonthClick('left');
          }}
        >
          {' '}
          <svg width="20px" height="20px">
            <line
              x1="0"
              x2="20"
              y1="10"
              y2="10"
              stroke="black"
              strokeWidth=".70"
              strokeLinecap="butt"
            />
            <line />
            <line
              x1="0"
              x2="5"
              y1="10"
              y2="15"
              stroke="black"
              strokeWidth=".70"
              strokeLinecap="butt"
            ></line>
            <line
              x1="0"
              x2="5"
              y1="10"
              y2="5"
              stroke="black"
              strokeWidth=".70"
              strokeLinecap="butt"
            ></line>
          </svg>
        </LeftButton>
        <h2>{this.state.month.format('MMMM YYYY')}</h2>
        <RightButton
          onClick={() => {
            this.handleMonthClick('right');
          }}
        >
          <svg width="20px" height="20px">
            <line
              x1="0"
              x2="20"
              y1="10"
              y2="10"
              stroke="black"
              strokeWidth=".70"
              strokeLinecap="butt"
            />
            <line />
            <line
              x1="20"
              x2="15"
              y1="10"
              y2="15"
              stroke="black"
              strokeWidth=".70"
              strokeLinecap="butt"
            ></line>
            <line
              x1="20"
              x2="15"
              y1="10"
              y2="5"
              stroke="black"
              strokeWidth=".70"
              strokeLinecap="butt"
            ></line>
          </svg>
        </RightButton>
        <Table>
          <thead>
            <tr>
              {this.state.weekdays.map(day => (
                <th key={`wd${day}`}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{this.createDays(this.state.month)}</tbody>
        </Table>
      </Wrapper>
    );
  }
}

export default Calendar;
