import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="onboarding">
        <Navbar />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
