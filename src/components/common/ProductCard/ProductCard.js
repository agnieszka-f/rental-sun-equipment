import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const useStyles = makeStyles((theme) => ({
  card:{
    width: 200,
  },
  media:{
    height: 150,
    overflow: 'hidden',
    objectFit: 'cover',
  },
  content:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center', 
    background: 'beige',
    height: 220,
  },
  buttonSubmit:{
    transition: 'all 1s',
    '&:hover':{
      background: 'yellow',
    },
  },
}));

const Component = ({product}) => { 
  const classes = useStyles();

  return(
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}> 
        <CardMedia
          className={classes.media}
          image={product.photo}
          title={product.name}
          //component={Link} to={'/product/' + product.id}
        > </CardMedia>
        <CardContent className={classes.content} >
          <Typography variant="h6">{product.name}</Typography>
          <Box my={3}> 
            <Typography variant="subtitle2">{product.price} zł/dzień</Typography>
          </Box>  
          <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth>Wybierz</Button> 
          <Box mt={2}> 
            <Typography variant="caption">Dostępna ilość: {product.amount}</Typography>
          </Box>           
        </CardContent>
      </Card>
    </Grid>
  );
};
  
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  product: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductCard,
  // Container as ProductCard,
  Component as ProductCardComponent,
};
