import React from 'react';
import { shallow } from 'enzyme';
import { AddQuipmentComponent } from './AddQuipment';

describe('Component AddQuipment', () => {
  it('should render without crashing', () => {
    const component = shallow(<AddQuipmentComponent />);
    expect(component).toBeTruthy();
  });
});
