import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    maxWidth: 500,
    margin: '0 auto',
    borderRadius: 5,
    padding: theme.spacing(2),
  },
  temperatur:{
    color: 'orange',
    borderBottom: '1px dotted orange',
    paddingBottom: theme.spacing(2),
  },
  otherParameters:{
    marginTop: theme.spacing(2),
  },
}));

const Component = () =>{ 
  const classes = useStyles();

  const [weather, setWeather] = React.useState({});

  React.useEffect(() => {
    Axios.get('https://danepubliczne.imgw.pl/api/data/synop/station/rzeszow').then(res => 
    {
      setWeather(res.data);          
    }); 
  });
  
  return (
    <Paper className={classes.root}>
      <Grid container justify='space-between' >
        <Typography variant="h6">Pogoda</Typography>
        <Typography variant="h6">{weather.stacja}</Typography>
      </Grid>
      <Grid container justify='center' className={classes.temperatur}>
        <Typography variant="h3">{weather.temperatura}<sup>o</sup>C</Typography>
      </Grid>
      <Grid container justify='space-between' className={classes.otherParameters}>
        <Grid item>
          <Typography variant="subtitle2">Ciśnienie atmosferyczne</Typography>
          <Typography variant="h6">{weather.cisnienie} hPa</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">Predkość wiatru</Typography>
          <Typography variant="h6">{weather.predkosc_wiatru} km/h</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">Kierunek wiatru</Typography>
          <Typography variant="h6">{weather.kierunek_wiatru}<sup>o</sup></Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Weather,
  Component as WeatherComponent,
};
