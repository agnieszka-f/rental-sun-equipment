import React from 'react';
import { shallow } from 'enzyme';
import { RentConfirmItemComponent } from './RentConfirmItem';

describe('Component RentConfirmItem', () => {
  it('should render without crashing', () => {
    const component = shallow(<RentConfirmItemComponent />);
    expect(component).toBeTruthy();
  });
});
