/* eslint-disable linebreak-style */
import Axios from 'axios';

/* selectors */
export const getUsers = ({users}) => users.data;

/* action name creator */
const reducerName = 'users';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');

/* action creators */
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });

/* thunk creators */
export const fetchUsersFromApi = () => {
  return (dispatch) => {
    
    if(JSON.parse(localStorage.getItem('users')) === null){
      Axios
        .get(`users.json`)
        .then(res => { 
          return dispatch(fetchSuccess(res.data));
        });
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_SUCCESS: { 
      return {
        ...statePart, data: action.payload,
      };
    }

    default:
      return statePart;
  }
};
