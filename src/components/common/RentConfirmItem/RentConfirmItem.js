import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

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
  input:{
    height: 30,
    width: 40,
    textAlign:'center',
    border: '1px solid black',
    borderRadius: 4,
  },
  button:{
    color: 'black',
    '&:hover':{
      backgroundColor:'beige',
    },
  },
}));

const Component = ({item, deleteItem, changeItem}) => { 
  const classes = useStyles();
  
  const [value,setValue] = React.useState(1);

  const decreease = () =>{
    if(value > 1) setValue(value - 1); 
  };

  const increease = () => {
    if(value < item.amount) setValue(value + 1);
  };

  const handleChange = (e) =>{ 
    const newValue = parseInt(e.target.value);
    if(newValue > 1 && newValue < item.amount) setValue(newValue);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(()=>changeItem(item.id, parseInt(value)), [value]);
  
  return(
    <Grid item container justify="space-between" alignItems="center" className={classes.container}>
      <Grid item xs={2}  alignItems="center" container>
        <img src={item.photo} alt={item.name} className={classes.img}></img>
      </Grid>
      <Grid item xs={2}  justify="center" alignItems="center" direction="column" container>
        <Typography className={classes.fontItem}>{item.name}</Typography>
        <Typography className={classes.fontItem}>{item.price} zł/dzień</Typography>
      </Grid>
      <Grid item xs={4}  justify="center" alignItems="center" container>
        <IconButton className={classes.button} onClick={decreease}><RemoveIcon /></IconButton>
        <input value={value} className={classes.input} onChange={(e)=>handleChange(e)}></input>
        <IconButton className={classes.button} onClick={increease}><AddIcon /></IconButton>
      </Grid>
      <Grid item justify="center" alignItems="center" xs={3} direction="column" container>
        <Typography className={classes.fontItem}>Wartość</Typography>
        <Typography className={classes.fontItem}>{parseFloat(item.price) * parseInt(value)} zł</Typography>
      </Grid>
      <Grid item xs={1} justify="flex-end" alignItems="center" container>
        <IconButton className={classes.button} onClick={() => deleteItem(item.id)}><DeleteIcon /></IconButton>
      </Grid>
    </Grid>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  item: PropTypes.object,
  deleteItem: PropTypes.func,
  changeItem: PropTypes.func,
};

export {
  Component as RentConfirmItem,
  Component as RentConfirmItemComponent,
};
