import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    marginBottom: theme.spacing(1),
  },
  fontItem:{
    fontSize: '0.8rem',
    fontWeight: 600,
    textAlign: 'center',
  },
  buttonReturn:{
    transition: 'all 1s',
    '&:hover':{
      background: 'yellow',
    },
  },
}));

const Component = ({item,date,removeFromCart,rentId}) => { 
  const classes = useStyles();
  
  const [disabled, setDisabled] = React.useState(false);

  const handleClick = () =>{
    removeFromCart(item.id, rentId, item.rentAmount);
    setDisabled(true);
  };

  return(
    <Grid item container justify="space-between" alignItems="center" className={classes.container}>
      <Grid item xs={4}  alignItems="center" container>
        <img src={item.photo} alt={item.name} className={classes.img}></img>
        <Typography variant='caption'>{'Data wypożyczenia: ' + new Date(date).toLocaleDateString('pl-PL') + ' ' + new Date(date).toLocaleTimeString('pl-PL')}</Typography>
      </Grid>
      <Grid item xs={3}  justify="center" alignItems="center" direction="column" container>
        <Typography className={classes.fontItem}>{item.name}</Typography>
        <Typography className={classes.fontItem}>{item.price} zł/dzień</Typography>
      </Grid>
      <Grid item justify="center" alignItems="center" xs={3} direction="column" container>
        <Typography className={classes.fontItem}>Wartość</Typography>
        <Typography className={classes.fontItem}>{item.price * item.rentAmount} zł</Typography>
      </Grid>
      <Grid item xs={2} justify="flex-end" alignItems="center" container>
        <Button className={classes.buttonReturn} disabled={disabled} onClick={()=>handleClick()} variant="contained" color="primary" type='submit' fullWidth>Zwrot</Button>
      </Grid>
    </Grid>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  item: PropTypes.object,
  date:PropTypes.string,
  removeFromCart: PropTypes.func,
  rentId: PropTypes.number,
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
