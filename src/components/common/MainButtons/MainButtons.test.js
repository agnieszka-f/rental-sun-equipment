import React from 'react';
import { shallow } from 'enzyme';
import { MainButtonsComponent } from './MainButtons';

describe('Component MainButtons', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainButtonsComponent />);
    expect(component).toBeTruthy();
  });
});
