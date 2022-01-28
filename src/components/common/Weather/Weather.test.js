import React from 'react';
import { shallow } from 'enzyme';
import { WeatherComponent } from './Weather';

describe('Component Weather', () => {
  it('should render without crashing', () => {
    const component = shallow(<WeatherComponent />);
    expect(component).toBeTruthy();
  });
});
