import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { legacy_createStore  as createReduxStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";

import { ContextProvider } from "./context/ThemeContext";
import App from "./App";

import mySaga from "./store/sagas";
import reducers from "./store/reducers";
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createReduxStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
)
