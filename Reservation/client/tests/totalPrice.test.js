import React from 'react';
import { shallow } from 'enzyme';
import TotalPrice from '../src/totalPrice';

describe('TotalPrice Unit Tests', () => {
  test('it should render a list of fees + price', () => {
    const wrapper = shallow(<TotalPrice />);

    expect(wrapper.find('section')).toExist();
  });

  test('it should not render cleaningFee if not greater than 0', () => {
    const wrapper = shallow(<TotalPrice cleaningFee={0} />);

    expect(wrapper.find('Cleaning Fee').length).toBe(0);
  });

  test('it should render the price correctly base on the props', () => {
    const wrapper = shallow(
      <TotalPrice
        basePrice={100}
        newPrice={100}
        nights={1}
        serviceFee={10}
        taxes={0.1}
        cleaningFee={10}
      />
    );
    expect(
      wrapper
        .find('.totalCost')
        .html()
        .includes('120')
    ).toBeTruthy();
  });
});
