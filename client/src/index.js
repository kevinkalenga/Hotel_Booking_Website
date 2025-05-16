import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. import from react-redux and redux
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux"

// 2. create user reducer function 
const authReducer = (state = {}, action) => {
  switch(action.type) {
    case "LOGGED_IN_USER":
      return {...state, ...action.payload} 
    case "LOGOUT":
        return action.payload;
    default: 
       return state; 
  }
} 

// 3. combine multiple reducers 
const rootReducer = combineReducers({
  user: authReducer,
}) 

// 4. create redux store
const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
