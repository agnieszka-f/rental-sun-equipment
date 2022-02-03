import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';
//import {OptionButtons} from '../../common/OptionButtons/OptionButtons';

import { connect } from 'react-redux';
import { getStatus, updateStatus } from '../../../redux/statusUsersRedux.js';

const useStyles = makeStyles((theme) => ({
  appbar: {
    marginBottom: theme.spacing(5),
  },
  toolbar:{
    justifyContent:'space-between',
  },
  login:{
    display:'flex',
  },
  form:{
    marginRight: theme.spacing(2),
  },
}));
const Component = ({status, updateStatus}) =>{ 
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null); 

  const history = useHistory();

  const handleClick = (event) => {  
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    if(event.currentTarget.getAttribute('value') !== null) {
      updateStatus(event.currentTarget.getAttribute('value')); 
      history.replace('/');
    }
  };
 
  React.useEffect(()=>{
    localStorage.setItem('login',JSON.stringify(status));
    updateStatus(status);
  });

  const handleChangeValue = () => {
    updateStatus('Zaloguj jako');
    history.replace('/');
  };

  return ( 
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Button color="inherit" component={Link} to={'/'}>
            Home
        </Button>
        <Box className={classes.login}> 
          <div >
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              { status !== 'Zaloguj jako' ? 'Zalogowano jako: ' + status : 'Zaloguj jako'}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem value={'admin'} onClick={handleClose} >Administrator</MenuItem>
              <MenuItem value={'user'} onClick={handleClose} >Użytkownik</MenuItem>
            </Menu>
            { status !== 'Zaloguj jako' ? <Button onClick={handleChangeValue} >Wyloguj</Button> : ''}
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  status: PropTypes.string,
  updateStatus: PropTypes.func,
  
};

const mapStateToProps = state => ({
  status: getStatus(state),
});

const mapDispatchToProps = dispatch => ({
  updateStatus: arg => dispatch(updateStatus(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
