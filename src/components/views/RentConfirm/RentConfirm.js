import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {RentConfirmItem} from '../../common/RentConfirmItem/RentConfirmItem';
import Button from '@material-ui/core/Button';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const useStyles = makeStyles((theme) => ({
  root:{
    width: 800,
    height: 100,
    margin: '0 auto',
  },
  confirm:{
    margin: '10px 1px',
    padding: theme.spacing(2),
    fontWeight: 600,
    fontSize: '1.1rem',
  },
  buttonSubmit:{
    fontWeight: 600,
    width: '22%',
    margin: '0 5px',
    padding: theme.spacing(1.5),
    transition: 'all 1s',
    '&:hover':{
      background: 'yellow',
    },
  },
}));

const Component = () => { 
  const classes = useStyles();
  
  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('cart'))!==null ? JSON.parse(localStorage.getItem('cart')) : []);
 
  return(
    cart && cart.length > 0 ? 
      <Grid className={classes.root} container >
        <Typography variant="h6">Zamówione produkty</Typography>
        {
          cart.map( item => <RentConfirmItem key={item.id} item={item}/>)
        }
        <Grid item container justify="flex-end">
          <Grid item container justify="flex-end" className={classes.confirm}>
           Całkowity koszt wypożyczenia: 800 zł
          </Grid>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" type='submit' fullWidth>Zatwierdź</Button>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" type='submit' fullWidth>Anuluj</Button>
        </Grid>
      </Grid>
      : <Typography variant="h2">Nie wybrałeś żadnych produktów</Typography>
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
  Component as RentConfirm,
  // Container as RentConfirm,
  Component as RentConfirmComponent,
};
