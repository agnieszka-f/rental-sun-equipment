/* selectors */
export const getStatus = ({statusUsers}) => statusUsers.status;

/* action name creator */
const reducerName = 'statusUsers';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_STATUS = createActionName('FETCH_STATUS');
const UPDATE_STATUS = createActionName('UPDATE_STATUS');

/* action creators */
export const fetchStatus = payload => ({ payload, type: FETCH_STATUS });
export const updateStatus = payload => ({ payload, type: UPDATE_STATUS });

/* thunk creators */
export const fetchUsersStatus = () => { 
  return (dispatch) => { 
    dispatch(fetchStatus(JSON.parse(localStorage.getItem('login')))); //JSON.parse(localStorage.getItem('login'))
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_STATUS: {
      return {
        ...statePart, status: action.payload,
      };
    }
    case UPDATE_STATUS: {
      return {
        ...statePart, status: action.payload,
      };
    }

    default:
      return statePart;
  }
};
