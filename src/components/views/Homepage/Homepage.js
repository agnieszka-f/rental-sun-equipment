import React from 'react';
import PropTypes from 'prop-types';

import {MainButtons} from '../../common/MainButtons/MainButtons';
import {Weather} from '../../common/Weather/Weather';

const Component = () =>{ 
 
  return (
    <div >
      <Weather />
      <MainButtons />
    </div>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
  Component as HomepageComponent,
};
