import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (err) {
    // forces log out
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
