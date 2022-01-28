/* eslint-disable linebreak-style */

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