import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {OptionButtons} from '../../common/OptionButtons/OptionButtons';
import {Products} from '../../common/Products/Products';
import {NoPermission} from '../NoPermission/NoPermission';
import { connect } from 'react-redux';
import { getStatus } from '../../../redux/statusUsersRedux.js';

const useStyles = makeStyles((theme) => ({

}));

const Component = ({status,equipments}) => { 
  const classes = useStyles(); 
  
  return(
    status === 'user' ? <Products /> : <NoPermission />
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

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps/*, mapDispatchToProps*/)(Component);

export {
  //Component as Rent,
  Container as Rent,
  Component as RentComponent,
};
