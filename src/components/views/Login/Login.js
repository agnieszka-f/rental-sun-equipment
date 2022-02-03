import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useStyles, StyledTextField} from '../Form.theme.js';
import {NoPermission} from '../NoPermission/NoPermission';
import { connect } from 'react-redux';
import { getStatus } from '../../../redux/statusUsersRedux.js';

const Component = ({status}) => { 

  const classes = useStyles();
  const [fields, setFields] = React.useState({});
  
  const fieldChange = function(e){ 
    setFields({...fields, [e.target.id]: e.target.value});
  };
  const handleSubmit = () => {  
    console.log('click buttom submit');
  };
  return(
    status === 'Zaloguj jako' ? <div className={classes.root}>
      <form onSubmit={()=>handleSubmit()}>
        <Grid container spacing={3}>
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
};

const mapStateToProps = state => ({
  status: getStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Login,
  Component as LoginComponent,
};
