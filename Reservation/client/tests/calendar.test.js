import React from 'react';
import moment from 'moment';
import { mount, shallow } from 'enzyme';
import Calendar from '../src/calendar';
import Dates from '../src/dates';
import Day from '../src/day';

const mockRSVP = [
  {
    id: 7,
    user: 'Ashley Huel',
    checkIn: '2019-10-17T00:59:59.000Z',
    totalNights: 3,
    guests: 3,
    createdAt: '2019-10-17T00:59:59.000Z',
    updatedAt: '2019-10-17T00:59:59.000Z',
    listingId: 2
  },
  {
    id: 8,
    user: 'Audreanne Bradtke',
    checkIn: '2019-10-31T00:59:59.000Z',
    totalNights: 4,
    guests: 6,
    createdAt: '2019-10-17T00:59:59.000Z',
    updatedAt: '2019-10-17T00:59:59.000Z',
    listingId: 2
  },
  {
    id: 9,
    user: 'Dayna Dibbert',
    checkIn: '2019-10-23T00:59:59.000Z',
    totalNights: 6,
    guests: 5,
    createdAt: '2019-10-17T00:59:59.000Z',
    updatedAt: '2019-10-17T00:59:59.000Z',
    listingId: 2
  }
];

describe('Calendar Unit Tests', () => {
  test('it should render a calendar', () => {
    const wrapper = shallow(
      <Calendar
        reservations={mockRSVP}
        cal={'checkIn'}
        checkIn={'Check-in'}
        checkOut={'Check-out'}
        handleDateClick={() => {}}
        handleClearClick={() => {}}
        displayCal={() => {}}
        selectedDays={['10/29/2019']}
        minStayWeekday={0}
        minStayWeekday={0}
      />
    );
    expect(wrapper.find('tbody')).toExist();
  });

  test('it should call handleClick once input box is clicked', () => {
    const mockClickHandler = jest.fn();
    const wrapper = shallow(<Dates displayCal={mockClickHandler} />);

    wrapper.find('#calInput').map(node => node.simulate('click'));
    expect(mockClickHandler).toHaveBeenCalled();
  });

  test('it should call handleDateClick once date is clicked', () => {
    const mockClickHandler = jest.fn();
    const wrapper = shallow(
      <Day
        isCheckIn={false}
        isHover={false}
        isSelected={false}
        cal={'checkIn'}
        handleDateClick={mockClickHandler}
        handleDaysHover={() => {}}
        handleCheckOutHover={() => {}}
        handleMouseLeave={() => {}}
        month={'October 2019'}
        day={1}
        unavailable={false}
      />
    );
    wrapper.simulate('click');
    expect(mockClickHandler).toHaveBeenCalled();
  });

  test('it should call handleMonthClick when arrow is clicked', () => {
    const mockClickHandler = jest.fn();
    const wrapper = mount(
      <Calendar
        reservations={mockRSVP}
        cal={'checkIn'}
        checkIn={'Check-in'}
        checkOut={'Check-out'}
        handleDateClick={() => {}}
        handleClearClick={() => {}}
        displayCal={() => {}}
        selectedDays={['10/29/2019']}
        minStayWeekday={0}
        minStayWeekday={0}
      />
    );

    wrapper.instance().handleMonthClick = mockClickHandler;
    wrapper.instance().forceUpdate();
    wrapper.find('button').forEach(node => {
      node.simulate('click');
      expect(mockClickHandler).toHaveBeenCalled();
    });
  });

  test('it should update the month when arrow is clicked', () => {
    const wrapper = mount(
      <Calendar
        reservations={mockRSVP}
        cal={'checkIn'}
        checkIn={'Check-in'}
        checkOut={'Check-out'}
        handleDateClick={() => {}}
        handleClearClick={() => {}}
        displayCal={() => {}}
        selectedDays={['10/29/2019']}
        minStayWeekday={0}
        minStayWeekday={0}
      />
    );

    wrapper.instance().forceUpdate();
    wrapper.find('button').forEach(node => node.simulate('click'));
    expect(wrapper.instance().state.month.format('MMMM')).toBe(
      moment().format('MMMM')
    );
  });
});
