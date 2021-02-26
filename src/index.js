import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/Redux-store';
// import { Provider } from './StoreContext';
import {Provider} from 'react-redux';


  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App  />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

// rerenderEnrireTree(store.getState());
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEnrireTree(state);
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
