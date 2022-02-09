import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useStyles, StyledTextField} from '../Form.theme.js';
import {NoPermission} from '../NoPermission/NoPermission';
import { connect } from 'react-redux';
import { getStatus, updateStatus } from '../../../redux/statusUsersRedux.js';
import { useHistory } from 'react-router';

const Component = ({status, updateStatus}) => { 

  const classes = useStyles();
  const history = useHistory();

  const [users] = React.useState(JSON.parse(localStorage.getItem('users')));
  const [display, setDisplay] = React.useState(false);

  const [fields, setFields] = React.useState({});
  
  const fieldChange = function(e){
    setDisplay(false);
    setFields({...fields, [e.target.id]: e.target.value});
  };
  
  React.useEffect(()=>{
    localStorage.setItem('login',JSON.stringify(status));
  });

  const handleSubmit = (e) => {    
    e.preventDefault(); 
    if(users.find(user => user.login === fields.login && user.password===fields.password)){
      updateStatus(fields.login);
      history.replace('/');
    } else setDisplay(true);
    
  };
  return(
    status === 'Zaloguj jako' ? <div className={classes.root}>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={`${display ? classes.error:classes.none}`}>Login lub hasło jest niepoprawne</Grid>
          <Grid item xs={12}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="login" label="Login" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="password" label="Hasło" variant="outlined" required fullWidth type="password"/>
          </Grid>
          <Grid item container xs={12} >
            <Button className={classes.buttonSubmit} variant="contained" color="primary" type='submit' fullWidth>Zaloguj</Button>
          </Grid>
        </Grid>
      </form>
    </div> : <NoPermission />
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  status:PropTypes.string,
  updateStatus:PropTypes.func,
};

const mapStateToProps = state => ({
  status: getStatus(state),
});

const mapDispatchToProps = dispatch => ({
  updateStatus: arg => dispatch(updateStatus(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Login,
  Component as LoginComponent,
};
