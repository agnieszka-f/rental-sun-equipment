import React from 'react';
import { shallow } from 'enzyme';
import { ProductCardComponent } from './ProductCard';

describe('Component ProductCard', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductCardComponent />);
    expect(component).toBeTruthy();
  });
});
