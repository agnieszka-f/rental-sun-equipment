import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useStyles, StyledTextField} from '../Form.theme.js';
import { connect } from 'react-redux';
import { getStatus } from '../../../redux/statusUsersRedux.js';
import {NoPermission} from '../NoPermission/NoPermission';
import {Link} from 'react-router-dom';

const Component = ({status}) => { 

  const classes = useStyles();
  const [display, setDisplay] = React.useState({error:false, text:''});
  const [register, setRegister] = React.useState({success:false, text:''});
  const [users, setUsers] = React.useState(JSON.parse(localStorage.getItem('users')));
  const [fields, setFields] = React.useState({});
  
  const fieldChange = function(e){ 
    setDisplay({error:false,text:''});  
    setFields({...fields, [e.target.id]: e.target.value});
  };
  const handleSubmit = (e) => {  
    e.preventDefault(); 
    if(fields.password === fields.password2){
      if(users.find(user => user.login === fields.login)){
        setDisplay({error:true,text:'Ten login jest już używany przez innego użytkownika'});
      } else { 
        if(fields.login.length < 3 || fields.password.length <3){
          setDisplay({error:true,text:'Login i hasło musi składać się z minimum 3 znaków'});
        } else {
          setUsers([...users, fields]);
          setRegister({success:true,text:'Zostałeś pomyślnie zarejestrowany/a. '});
        }
      }
    } else setDisplay({error:true,text:'Hasła nie są zgodne'});    
  };

  React.useEffect(() => {
    localStorage.setItem('users',JSON.stringify(users));
  });

  return(
    status === 'Zaloguj jako' ? <div className={classes.root} >
      <form onSubmit={(e)=>handleSubmit(e)} >
        <Grid container spacing={3}>
          <Grid item xs={12} className={`${display.error ? classes.error:classes.none}`}>{display.text}</Grid>
          <Grid item xs={12} className={`${register.success ? classes.success:classes.none}`}>{register.text}<Button component={Link} to={'/login'}>Zaloguj się</Button></Grid>
          <Grid item xs={12} sm={6} className={`${register.success ? classes.none:''}`}>
            <StyledTextField onChange={(e) => fieldChange(e)} id="firstName" label="Imię" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} className={`${register.success ? classes.none:''}`}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="lastName" label="Nazwisko" variant="outlined"  fullWidth/>
          </Grid>
          <Grid item xs={12} className={`${register.success ? classes.none:''}`}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="login" label="Login" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12} className={`${register.success ? classes.none:''}`}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="password" label="Hasło" variant="outlined" required fullWidth type="password"/>
          </Grid>
          <Grid item xs={12} className={`${register.success ? classes.none:''}`}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="password2" label="Powtórz hasło" variant="outlined" required fullWidth type="password"/>
          </Grid>
          <Grid item container xs={12} className={`${register.success ? classes.none:''}`}>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" type='submit' fullWidth>Zarejestruj</Button>
          </Grid>
        </Grid>
      </form>
    </div>:<NoPermission />
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
  Container as Register,
  Component as RegisterComponent,
};
