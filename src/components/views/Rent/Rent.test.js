import React from 'react';
import { shallow } from 'enzyme';
import { RentComponent } from './Rent';

describe('Component Rent', () => {
  it('should render without crashing', () => {
    const component = shallow(<RentComponent />);
    expect(component).toBeTruthy();
  });
});
