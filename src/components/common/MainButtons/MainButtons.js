import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { getStatus } from '../../../redux/statusUsersRedux.js';
import { fetchFromApi, getEquipments } from '../../../redux/equipmentsRedux.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    width: '100%',
  },
  item:{
    minWidth: 150,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    fontWeight:'600',
    cursor: 'pointer',
    transition: 'all 1s',
    '&:hover':{
      opacity: 0.8,
    },
    textDecoration: 'none',
  },
  yellow:{
    background: 'rgb(255, 247, 205)',
    color: 'rgb(122, 79, 1)',
  },
  red:{
    background: 'rgb(255, 231, 217)',
    color: 'rgb(122, 12, 46)',
  },  
  blue:{
    background: 'rgb(208, 242, 255)',
    color: 'rgb(4, 41, 122)',
  },
  green: {
    background: 'rgb(200, 250, 205)',
    color: 'rgb(0, 82, 73)',
  },
  pink: {
    background: 'rgb(255 218 254)',
    color: 'rgb(90 88 88)',
  },
  white: {
    background: 'rgb(233 233 233)',
    color: 'rgb(3 126 115)',
  },
  icon:{
    margin: 'auto auto 24px',
    display: 'flex',
    borderRadius: '50%',
    '-webkit-box-align': 'center',
    alignItems: 'center',
    width: '44px',
    height: '44px',
    '-webkit-box-pack': 'center',
    justifyContent: 'center',
  },
  iconRed:{
    color: 'rgb(183, 33, 54)',
    backgroundImage: 'linear-gradient(135deg , rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)',
  },
  iconYellow:{
    color: 'rgb(183, 129, 3)',
    backgroundImage: 'linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)',
  },
  iconBlue:{
    color: 'rgb(12, 83, 183)',
    backgroundImage: 'linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)',
  },
  iconGreen:{
    color: 'rgb(0, 123, 85)',
    backgroundImage: 'linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)',
  },
  iconPink:{
    color: 'rgb(88 85 85)',
    backgroundImage: 'linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)',
  },
  iconWhite:{
    color: 'rgb(49 149 139)',
    backgroundImage: 'linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)',
  },
}));

const Component = ({fetchFromApi, status, equipments}) =>{ 
  const classes = useStyles();
  
  React.useEffect(() => {
    const getResult = async () =>{
      await fetchFromApi();
    };
    getResult();
  }, [fetchFromApi]);

  React.useEffect(()=>{
    const eq = JSON.parse(localStorage.getItem('equipments'));
    localStorage.setItem('equipments',JSON.stringify(eq && eq.length > 0 ? eq:(equipments && equipments.length > 0 ? equipments : [])));
  });
  
  const [isLender] = React.useState(JSON.parse(localStorage.getItem('rents'))!==null ? JSON.parse(localStorage.getItem('rents')).find(rent => rent.lender === status):false);

  return ( 
    <div className={classes.root}>
      { status === 'Zaloguj jako' || !status ? 
        <Paper className={`${classes.item} + ${classes.yellow}`} component={Link} to={'/register'}>
          <Box className={`${classes.icon} + ${classes.iconYellow}`}><VpnLockIcon /></Box>
              Rejestracja
        </Paper> : '' }
      {status === 'Zaloguj jako' || !status ? 
        <Paper className={`${classes.item} + ${classes.red}`} component={Link} to={'/login'}>
          <Box className={`${classes.icon} + ${classes.iconRed}`}><VpnKeyIcon /></Box>
              Logowanie
        </Paper> : '' }
      { status && status === 'admin' ?
        <Paper className={`${classes.item} + ${classes.pink}`} component={Link} to={'/add-equipment'}>
          <Box className={`${classes.icon} + ${classes.iconPink}`}><PlaylistAddIcon /></Box>
              Nowy sprzet
        </Paper> : '' }
      { status && status !== 'admin' && status!=='Zaloguj jako'?
        <Paper className={`${classes.item} + ${classes.green}`} component={Link} to={'/rent'}>
          <Box className={`${classes.icon} + ${classes.iconGreen}`}><VerticalAlignBottomIcon /></Box>
              Wypożycz sprzęt
        </Paper> : '' }
      { status && status !== 'admin' && status!=='Zaloguj jako' && isLender ?
        <Paper className={`${classes.item} + ${classes.blue}`} component={Link} to={'/return'}>
          <Box className={`${classes.icon} + ${classes.iconBlue}`}><VerticalAlignTopIcon /></Box>
              Zwróć sprzęt
        </Paper> : '' }
      <Paper className={`${classes.item} + ${classes.white}`} component={Link} to={'/contact'}>
        <Box className={`${classes.icon} + ${classes.iconWhite}`}><ContactMailIcon /></Box>
              Kontakt
      </Paper>
    </div>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  status:PropTypes.string,
  fetchFromApi: PropTypes.func,
  equipments: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = state => ({
  status: getStatus(state),
  equipments: getEquipments(state),
});

const mapDispatchToProps = dispatch => ({
  fetchFromApi: () => dispatch(fetchFromApi()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as MainButtons,
  Component as MainButtonsComponent,
};
