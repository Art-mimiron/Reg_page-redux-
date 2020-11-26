import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rootReducer from './reducers/rootReducer'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App/App';

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  , document.getElementById('root')
);
