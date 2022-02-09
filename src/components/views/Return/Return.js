import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {RentItem} from '../../common/RentItem/RentItem';
import Button from '@material-ui/core/Button';
import {NoPermission} from '../NoPermission/NoPermission';
import { connect } from 'react-redux';
import { getStatus } from '../../../redux/statusUsersRedux.js';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root:{
    width: 800,
    height: 110,
    margin: '0 auto',
  },
  buttonSubmit:{
    fontWeight: 600,
    width: '22%',
    margin: '20px 5px',
    padding: theme.spacing(1.5),
    transition: 'all 1s',
    '&:hover':{
      background: 'yellow',
    },
  },
}));

const Component = ({status}) => { 
  const classes = useStyles();

  const [rents] = React.useState(JSON.parse(localStorage.getItem('rents')));
  const [equipments] = React.useState(JSON.parse(localStorage.getItem('equipments')));
  const [tempRents, setTempRents] = React.useState(rents);
  const [tempEquipments, setTempEquipments] = React.useState(equipments);
  const [rentedEquipment] = React.useState(JSON.parse(localStorage.getItem('rents')).filter(rent => rent.lender === status));

  const removeFromCart = (id,rentId,rentAmount) =>{
    const temp = tempRents.map(item => item.id === rentId ? {...item, cart: item.cart.filter(itemCart => itemCart.id!==id)} : item);
    const res = temp.filter(item => item.cart.length > 0);
    setTempRents(res);
    setTempEquipments(tempEquipments.map(item => item.id === id ? {...item, amount: item.amount + rentAmount} : item));
  };

  const handleSubmit = () =>{
    localStorage.setItem('rents',JSON.stringify(tempRents));
    localStorage.setItem('equipments',JSON.stringify(tempEquipments));
  };

  const handleCancel = () =>{
    setTempRents(rents);
    setTempEquipments(equipments);
  };
  
  return(
    status === 'user' && rentedEquipment && rentedEquipment.length > 0 ? 
      <Grid className={classes.root} container >
        <Typography variant="h6">Wypożyczone produkty</Typography>
        {
          rentedEquipment.length >0 ? rentedEquipment.map( rent => rent.cart.map(item => <RentItem key={item.id} item={item} date={rent.rentDate} rentId={rent.id} removeFromCart={removeFromCart}/>)) :''
        }
        <Grid item container justify="flex-end">

          <Button className={classes.buttonSubmit} onClick={handleSubmit} variant="contained" color="primary" type='submit' fullWidth component={Link} to={'/'}>Zatwierdź</Button>
          <Button className={classes.buttonSubmit} onClick={handleCancel} variant="contained" color="primary" type='submit' fullWidth component={Link} to={'/'}>Anuluj</Button>
        </Grid>
      </Grid>
      : <NoPermission />
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  status:PropTypes.string,
};

const mapStateToProps = state => ({
  status: getStatus(state),
});

const Container = connect(mapStateToProps/*, mapDispatchToProps*/)(Component);

export {
  Container as Return,
  Component as ReturnComponent,
};
