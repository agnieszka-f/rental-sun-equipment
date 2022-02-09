import React from 'react';
import PropTypes from 'prop-types';

const Component = ({children}) => (
  <div >
    <h4>No permission to see this site</h4>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as NoPermission,
  Component as NoPermissionComponent,
};
