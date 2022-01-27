import React from 'react';
import { shallow } from 'enzyme';
import { ReturnComponent } from './Return';

describe('Component Return', () => {
  it('should render without crashing', () => {
    const component = shallow(<ReturnComponent />);
    expect(component).toBeTruthy();
  });
});
