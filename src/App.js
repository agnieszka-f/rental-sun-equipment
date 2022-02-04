import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { AddQuipment } from './components/views/AddQuipment/AddQuipment';
import { Contact } from './components/views/Contact/Contact';
import { Login } from './components/views/Login/Login';
import { Register } from './components/views/Register/Register';
import { Rent } from './components/views/Rent/Rent';
import { RentConfirm } from './components/views/RentConfirm/RentConfirm';
import { Return } from './components/views/Return/Return';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#dfdf46' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/add-equipment' component={AddQuipment} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/rent' component={Rent} />
              <Route exact path='/rent-confirm' component={RentConfirm} />
              <Route exact path='/return' component={Return} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
