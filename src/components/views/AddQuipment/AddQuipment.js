import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useStyles, StyledTextField, BootstrapInput} from '../Form.theme.js';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {NoPermission} from '../NoPermission/NoPermission';
import { connect } from 'react-redux';
import { getStatus } from '../../../redux/statusUsersRedux.js';
import {Link} from 'react-router-dom';

const Component = ({status}) => { 

  const classes = useStyles();

  const [equipments] = React.useState(JSON.parse(localStorage.getItem('equipments')));

  const [fields, setFields] = React.useState({});
  const [option, setOption] = React.useState('typ');
  
  const fieldChange = function(e){ 
    setFields({...fields, [e.target.id]: e.target.value});
  };
  const handleChangeOption = (event) => {
    setOption(event.target.value);
  };
  const handleSubmit = () => {  
    localStorage.setItem('equipments',JSON.stringify([...equipments, {id: equipments.length + 1, ...fields}]));
  };
  return(
    status === 'admin' ? <div className={classes.root}>
      <form onSubmit={()=>handleSubmit()}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Select
              labelId="option"
              id="option"
              value={option}
              onChange={handleChangeOption}
              fullWidth
              input={<BootstrapInput />}
            >
              <MenuItem value={'typ'} disabled>Wybierz typ</MenuItem>
              <MenuItem value={'towel'} >Ręcznik</MenuItem>
              <MenuItem value={'umbrella'} >Parasol</MenuItem>
              <MenuItem value={'sunbed'}>Leżak</MenuItem>
              <MenuItem value={'screen'} >Parawan</MenuItem>
            </Select>
 
          </Grid>
          <Grid item xs={12}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="name" label="Nazwa" variant="outlined"  required fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="link" label="Link do zdjęcia" variant="outlined" required fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="price" label="Cena za 1 dzień" variant="outlined" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField  onChange={(e) => fieldChange(e)} id="amount" label="Ilość" variant="outlined" required fullWidth />
          </Grid>
          <Grid item container xs={12} >
            <Button className={classes.buttonSubmit} onClick={(e)=>handleSubmit(e)} component={Link} to={'/'} variant="contained" color="primary" type='submit' fullWidth>Dodaj</Button>
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
  equipments: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = state => ({
  status: getStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as AddQuipment,
  Container as AddQuipment,
  Component as AddQuipmentComponent,
};
