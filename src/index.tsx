import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import forecastReducer from "./store/reducers/forecastReducer";
import { applyMiddleware, createStore } from "redux";
import { sagaForecastWatcher } from "./store/sagas/forecastSaga";

const saga = createSagaMiddleware();

export const store = createStore(
  forecastReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(saga))
);

saga.run(sagaForecastWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
