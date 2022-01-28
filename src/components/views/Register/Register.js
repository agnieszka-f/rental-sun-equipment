import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useStyles, StyledTextField} from '../Form.theme.js';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';



const Component = ({className, children}) => { 

  const classes = useStyles();
  const [fields, setFields] = React.useState({});
  
  const fieldChange = function(e){ 
    setFields({...fields, [e.target.id]: e.target.value});
  };
  const handleSubmit = () => {  
    console.log('click buttom submit');
  };
  return(
    <div className={classes.root}>
      <form onSubmit={()=>handleSubmit()}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <StyledTextField onChange={(e) => fieldChange(e)} id="firstName" label="Imię" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="lastName" label="Nazwisko" variant="outlined"  fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="login" label="Login" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="password" label="Hasło" variant="outlined" required fullWidth type="password"/>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="password2" label="Powtórz hasło" variant="outlined" required fullWidth type="password"/>
          </Grid>
          <Grid item container xs={12} >
            <Button className={classes.buttonSubmit} variant="contained" color="primary" type='submit' fullWidth>Zarejestruj</Button>
          </Grid>
        </Grid>
      </form>
    </div>
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
  Component as Register,
  // Container as Register,
  Component as RegisterComponent,
};
