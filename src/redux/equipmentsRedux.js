/* eslint-disable linebreak-style */
import Axios from 'axios';

/* selectors */
export const getEquipments = ({equipments}) => equipments.data;

/* action name creator */
const reducerName = 'equipments';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');

/* action creators */
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });

/* thunk creators */
export const fetchFromApi = () => {
  return (dispatch) => {
    
    if(JSON.parse(localStorage.getItem('equipments')) === null){
      Axios
        .get(`data.json`)
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
