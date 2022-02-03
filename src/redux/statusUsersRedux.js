/* selectors */
export const getStatus = ({statusUsers}) => statusUsers.status;

/* action name creator */
const reducerName = 'statusUsers';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_STATUS = createActionName('UPDATE_STATUS');

/* action creators */
export const updateStatus = payload => ({ payload, type: UPDATE_STATUS });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case UPDATE_STATUS: {
      return {
        ...statePart, status: action.payload,
      };
    }

    default:
      return statePart;
  }
};
