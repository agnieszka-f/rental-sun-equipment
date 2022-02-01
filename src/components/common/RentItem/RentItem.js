import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const useStyles = makeStyles((theme) => ({
  container:{
    background: 'beige',
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
    margin: '4px 0',
    boxShadow: '1px 1px silver',
    borderRadius: 5,
  },
  img:{
    height: 65,
    width: 80,
    overflow: 'hidden',
    objectFit: 'cover',
  },
  fontItem:{
    fontSize: '0.8rem',
    fontWeight: 600,
    textAlign: 'center',
  },
}));

const Component = ({item}) => { 
  const classes = useStyles();

  return(
    <Grid item container justify="space-between" alignItems="center" className={classes.container}>
      <Grid item xs={2}  alignItems="center" container>
        <img src={item.photo} alt={item.name} className={classes.img}></img>
      </Grid>
      <Grid item xs={3}  justify="center" alignItems="center" direction="column" container>
        <Typography className={classes.fontItem}>{item.name}</Typography>
        <Typography className={classes.fontItem}>{item.price} zł/dzień</Typography>
      </Grid>
      <Grid item justify="center" alignItems="center" xs={4} direction="column" container>
        <Typography className={classes.fontItem}>Wartość</Typography>
        <Typography className={classes.fontItem}>200 zł</Typography>
      </Grid>
      <Grid item xs={3} justify="flex-end" alignItems="center">
        <Button variant="contained" color="primary" type='submit' fullWidth>Zwrot</Button>
      </Grid>
    </Grid>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  item: PropTypes.object,
};


// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as RentItem,
  // Container as RentItem,
  Component as RentItemComponent,
};
