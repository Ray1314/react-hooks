import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducer from './reducers'
import { Provider } from 'react-redux';
import App from './App';


const store = createStore(allReducer) // stort 全局数据管理
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

