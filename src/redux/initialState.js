export const initialState = {
  statusUsers:{
    status: JSON.parse(localStorage.getItem('login')) === null  ? 'Zaloguj jako': JSON.parse(localStorage.getItem('login')),
  },
  equipments:{
    data:  JSON.parse(localStorage.getItem('equipments')) !== null ?  JSON.parse(localStorage.getItem('equipments')) : {},
  },
  users:{
    data:  JSON.parse(localStorage.getItem('users')) !== null ?  JSON.parse(localStorage.getItem('users')) : {},
  },
};
