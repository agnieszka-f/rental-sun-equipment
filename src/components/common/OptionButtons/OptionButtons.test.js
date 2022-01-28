import React from 'react';
import { shallow } from 'enzyme';
import { OptionButtonsComponent } from './OptionButtons';

describe('Component OptionButtons', () => {
  it('should render without crashing', () => {
    const component = shallow(<OptionButtonsComponent />);
    expect(component).toBeTruthy();
  });
});
