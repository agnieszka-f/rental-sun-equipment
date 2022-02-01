import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {StyledTextField} from '../Form.theme.js';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const useStyles = makeStyles((theme) => ({
  root:{
    margin:'20px auto',
    borderRadius: 15,
    width: 600,
    padding: theme.spacing(8),
  },
  item:{
    margin: '10px auto',
  },
  buttonSubmit:{
    padding: theme.spacing(1.5),
    fontWeight: 600,
    marginTop: theme.spacing(2),
    transition: 'all 1s',
    '&:hover':{
      background: 'yellow',
    },
  },
}));
const Component = () => { 
  const classes = useStyles();
  const [fields, setFields] = React.useState({});
  
  const fieldChange = function(e){ 
    setFields({...fields, [e.target.id]: e.target.value});
  };

  return(
    <Paper className={classes.root}>
      <StyledTextField  className={classes.item} onChange={(e) => fieldChange(e)} id="email" label="E-mail" variant="outlined" required fullWidth/>
      <StyledTextField  className={classes.item} onChange={(e) => fieldChange(e)} id="message" label="Wpisz wiadomość" variant="outlined" multiline rows={8} required fullWidth />
      <Button className={classes.buttonSubmit} variant="contained" color="primary" type='submit' fullWidth>Wyślij</Button>
    </Paper>
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
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent,
};
