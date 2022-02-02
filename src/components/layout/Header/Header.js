import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//import {OptionButtons} from '../../common/OptionButtons/OptionButtons';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

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
const Component = () =>{ 
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(JSON.parse(localStorage.getItem('login')) === null ? 'Zaloguj jako': JSON.parse(localStorage.getItem('login')));

  const handleClick = (event) => {  
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    if(event.currentTarget.getAttribute('value') !== null) setValue(event.currentTarget.getAttribute('value'));
  };
 
  React.useEffect(()=>{
    localStorage.setItem('login',JSON.stringify(value));
  });

  const handleChangeValue = () => {
    setValue('Zaloguj jako');
  };

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Button color="inherit">
            Home
        </Button>
        <Box className={classes.login}> 
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              { value !== 'Zaloguj jako' ? 'Zalogowano jako: ' + value : 'Zaloguj jako'}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem value={'admin'} onClick={handleClose}>Administrator</MenuItem>
              <MenuItem value={'user'} onClick={handleClose}>Użytkownik</MenuItem>
            </Menu>
            { value !== 'Zaloguj jako' ? <Button onClick={handleChangeValue}>Wyloguj</Button> : ''}
          </div>
        </Box>
      </Toolbar>
    </AppBar>
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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
