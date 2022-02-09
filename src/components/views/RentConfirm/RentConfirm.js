import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {RentConfirmItem} from '../../common/RentConfirmItem/RentConfirmItem';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { getStatus } from '../../../redux/statusUsersRedux.js';
import { connect } from 'react-redux';

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

const Component = ({status}) => { 
  const classes = useStyles();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateTotalSum = () =>{
    return JSON.parse(localStorage.getItem('cart'))!==null ? JSON.parse(localStorage.getItem('cart')).reduce((prev, curr) =>(prev + parseInt(curr.rentAmount)*parseFloat(curr.price)),0) : 0;
  };

  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('cart'))!==null ? JSON.parse(localStorage.getItem('cart')) : []);

  const [arrHidden, setArrHidden] = React.useState(JSON.parse(localStorage.getItem('arrHidden'))!==null ? JSON.parse(localStorage.getItem('arrHidden')) : []);

  const [totalSum, setTotalSum] = React.useState(calculateTotalSum());

  const [rents] = React.useState(JSON.parse(localStorage.getItem('rents'))!==null ? JSON.parse(localStorage.getItem('rents')) : []);

  const handleDeleteItem = (id) => { 
    setCart(cart.filter( item => item.id !== id)); 
    setArrHidden(arrHidden.filter( item => item !== id)); 
    setTotalSum(calculateTotalSum());
  };
  
  React.useEffect(()=>localStorage.setItem('cart',JSON.stringify(cart)), [cart]);
  React.useEffect(()=>localStorage.setItem('arrHidden',JSON.stringify(arrHidden)), [arrHidden]);
  React.useEffect(()=>setTotalSum(calculateTotalSum()),[calculateTotalSum]);

  const changeItem = (id, amount) =>{
    setCart(cart.map(cartItem => cartItem.id === id ? {...cartItem, rentAmount:amount}:cartItem));
    setTotalSum(calculateTotalSum());
  };
  
  const handleSaveRent = () =>{
    const lender = status; 
    const rent = {id: Date.now(), rentDate: new Date(Date.now()), lender, cart}; 
    localStorage.setItem('rents',JSON.stringify([...rents, rent]));
  };

  const handleConfirm = () => {
    const res = JSON.parse(localStorage.getItem('equipments')).map(product =>{
      let find = cart.find(cartItem => cartItem.id === product.id); 
      return find ? {...product, amount: product.amount-find.rentAmount} : product;
    });
    localStorage.setItem('equipments',JSON.stringify(res)); 
    handleSaveRent();
    handleDelete();
  };
  
  const handleDelete = () =>{
    localStorage.setItem('cart',JSON.stringify([]));
    localStorage.setItem('arrHidden',JSON.stringify([]));
  };

  return(
    cart && cart.length > 0 ? 
      <Grid className={classes.root} container >
        <Typography variant="h6">Zamówione produkty</Typography>
        {
          cart.map( item => <RentConfirmItem key={item.id} item={item} deleteItem={handleDeleteItem} changeItem={changeItem}/>)
        }
        <Grid item container justify="flex-end">
          <Grid item container justify="flex-end" className={classes.confirm}>
           Całkowity koszt wypożyczenia: {totalSum} zł
          </Grid>
          <Button className={classes.buttonSubmit} onClick={()=>handleConfirm()} variant="contained" color="primary" type='submit' fullWidth component={Link} to={'/'}>Zatwierdź</Button>
          <Button className={classes.buttonSubmit} onClick={()=>handleDelete()} variant="contained" color="primary" type='submit' fullWidth component={Link} to={'/'}>Anuluj</Button>
        </Grid>
      </Grid>
      : <Typography variant="h2">Nie wybrałeś żadnych produktów</Typography>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  status: PropTypes.string,
};

const mapStateToProps = state => ({
  status: getStatus(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps/*, mapDispatchToProps*/)(Component);

export {
  Container as RentConfirm,
  Component as RentConfirmComponent,
};
