import React from 'react';
import { shallow } from 'enzyme';
import { RegisterComponent } from './Register';

describe('Component Register', () => {
  it('should render without crashing', () => {
    const component = shallow(<RegisterComponent />);
    expect(component).toBeTruthy();
  });
});
