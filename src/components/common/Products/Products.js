import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {OptionButtons} from '../../common/OptionButtons/OptionButtons';
import {ProductCard} from '../../common/ProductCard/ProductCard';
import Grid from '@material-ui/core/Grid';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const useStyles = makeStyles((theme) => ({

}));

const Component = ({className, children}) => { 
  const classes = useStyles(); 

  const products = [{id:1, type:'towel',name:'Duży ręcznik',photo:'https://pieknesny.pl/userdata/public/gfx/4007/31.jpg',price:20,amount:50},
    {id:2, type:'sunbed',name:'Leżak niebieski',photo:'https://odjazdowemeble.pl/images/odjazdowemeble/0-1000/Lezak-plazowy-ogrodowy_%5B785%5D_1200.jpg',price:40,amount:10},
    {id:3, type:'umbrella',name:'Parasol kolorowy',photo:'https://www.abud.pl/pol_pl_Parasol-plazowy-170-cm-37533_2.jpg',price:15,amount:80},
    {id:4, type:'screen',name:'Parawan kolorowy',photo:'https://www.wystawienniczesystemy.com.pl/1633-medium_default/parawan.jpg',price:25,amount:40},
  ];
 
  return(
    <Grid container spacing={2} justify='center'>
      {
        products.map(product => <Grid item key={product.id}><ProductCard product={product} /></Grid>)
      }
    </Grid>
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
  Component as Products,
  // Container as Products,
  Component as ProductsComponent,
};
