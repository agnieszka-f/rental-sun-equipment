import React from 'react';
import { shallow } from 'enzyme';
import { RentConfirmComponent } from './RentConfirm';

describe('Component RentConfirm', () => {
  it('should render without crashing', () => {
    const component = shallow(<RentConfirmComponent />);
    expect(component).toBeTruthy();
  });
});
