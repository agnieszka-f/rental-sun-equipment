export const initialState = {
  statusUsers:{
    status: JSON.parse(localStorage.getItem('login')) === null ? 'Zaloguj jako': JSON.parse(localStorage.getItem('login')),
  },
};
