import React from 'react';
import PropTypes from 'prop-types';

const Component = ({children}) => (
  <div>
    <h4>NotFound</h4>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
