import React from 'react';
import PropTypes from 'prop-types';
import {Header} from '../Header/Header';

const Component = ({children}) => (
  <div >
    <Header />
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
