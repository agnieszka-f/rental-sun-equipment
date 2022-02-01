import React from 'react';
import { shallow } from 'enzyme';
import { RentItemComponent } from './RentItem';

describe('Component RentItem', () => {
  it('should render without crashing', () => {
    const component = shallow(<RentItemComponent />);
    expect(component).toBeTruthy();
  });
});
