import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    width: '100%',
  },
  item:{
    color: 'rgb(122, 79, 1)',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    fontWeight:'600',
    flexDirection: 'column',
    marginRight: theme.spacing(2),
  },
  img:{
    width: 35,
    margin: theme.spacing(2),
  },
}));

const Component = ({className, children}) => { 
  const classes = useStyles();
  return(
    <div className={classes.root }>
      <Box className={classes.item }><img src='parasol.png' alt='umbrella' className={classes.img}></img>Parasole</Box>
      <Box className={classes.item }><img src='towel.png' alt='towel' className={classes.img}></img>Ręczniki</Box>
      <Box className={classes.item }><img src='parawan.png' alt='screen' className={classes.img}></img>Parawany</Box>
      <Box className={classes.item }><img src='sunbed.png' alt='sunbed' className={classes.img}></img>Leżaki</Box>
    </div>
  );
};
  
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as OptionButtons,
  // Container as OptionButtons,
  Component as OptionButtonsComponent,
};
