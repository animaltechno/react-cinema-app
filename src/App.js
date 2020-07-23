import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <div className="app">

      </div>
    </Provider>
  );
};

export default App;

