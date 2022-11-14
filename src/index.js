import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'
import reducers from './reducers/index';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter  } from 'react-router-dom';
import './global.scss'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = [reduxThunk]
const middlewareEnhancer = applyMiddleware(...middlewares)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)
const store = createStore(reducers, composedEnhancers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
   <BrowserRouter>
      <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


