import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';

const store = configureStore();

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
