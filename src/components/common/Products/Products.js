import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {OptionButtons} from '../../common/OptionButtons/OptionButtons';
import {ProductCard} from '../../common/ProductCard/ProductCard';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const useStyles = makeStyles((theme) => ({
  buttonSubmit:{
    display:'block',
    textAlign:'center',
    margin: '20px auto 20px auto',
    width: 200,
    transition: 'all 1s',
    '&:hover':{
      background: 'yellow',
    },
  },
}));

const Component = ({className, children}) => { 
  const classes = useStyles(); 

  const [products] = React.useState(JSON.parse(localStorage.getItem('equipments')));

  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('cart'))!==null ? JSON.parse(localStorage.getItem('cart')) : []);

  const rentProduct = (product) =>{
    setCart([...cart, {...product, rentAmount: 1}]); 
  };
  
  React.useEffect(() => localStorage.setItem('cart',JSON.stringify(cart)), [cart]);

  return(
    <div>
      {cart.length > 0 ? <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth component={Link} to={'/rent-confirm'}>Podsumowanie</Button> : ''}
      <Grid container spacing={2} justify='center'>
        {
          products && products.length > 0 ? products.map(product => <Grid item key={product.id}><ProductCard product={product} rentProduct={rentProduct}/></Grid>):''
        }
      </Grid>
      {cart.length > 0 ? <Button className={classes.buttonSubmit}  variant="contained" color="primary" fullWidth component={Link} to={'/rent-confirm'}>Podsumowanie</Button> : ''}
    </div>
  );
};
  
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Products,
  // Container as Products,
  Component as ProductsComponent,
};
