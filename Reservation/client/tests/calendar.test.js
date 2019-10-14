import React from 'react';
import { mount, shallow } from 'enzyme';
import Calendar from '../src/calendar';

describe('Calendar Unit Tests', () => {
  test('it should render a calendar', () => {
    const wrapper = shallow(
      <Calendar cal={''} handleDateClick={() => {}} displayCal={() => {}} />
    );
    expect(wrapper.find('tbody')).toExist();
  });

  test('it should update check-in date when clicked', () => {
    const mockClickHandler = jest.fn();
    const wrapper = mount(<Calendar handleDateClick={mockClickHandler} />);

    wrapper.instance().forceUpdate();
    wrapper.find({ day: 1 }).simulate('click');
    expect(mockClickHandler).toHaveBeenCalled();
  });
});
