import React from 'react';
import PropTypes from 'prop-types';
import {Products} from '../../common/Products/Products';
import {NoPermission} from '../NoPermission/NoPermission';
import { connect } from 'react-redux';
import { getStatus } from '../../../redux/statusUsersRedux.js';


const Component = ({status}) => { 
  
  return(
    status !== 'admin' && status !=='Zaloguj jako' ? <Products /> : <NoPermission />
  );
};
  
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  status:PropTypes.string,
  equipments: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = state => ({
  status: getStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Rent,
  Component as RentComponent,
};
