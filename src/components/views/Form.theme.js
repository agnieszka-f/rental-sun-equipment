/* eslint-disable linebreak-style */
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const useStyles = makeStyles((theme) => ({
  root:{
    maxWidth: 500,
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '80%', 
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%', 
    },
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
  error:{
    color:'red',
  },
  success:{
    color: 'green',
  },
  none:{
    display:'none',
  },
}));
  
export const StyledTextField = withStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& input': {
        backgroundColor: theme.palette.background.paper,
      },
    },
  },
}))(TextField);


export const BootstrapInput = withStyles((theme) => ({
  input: { 
    backgroundColor: theme.palette.background.paper,
    border: '1px solid silver',
    borderRadius: 5,
    fontSize: 16,
    padding: '20px 26px 20px 12px',
    transition: theme.transitions.create(['border-color']),
  },
}))(InputBase);