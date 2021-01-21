import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Reducer from "./Reducer";

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(Reducer, enhancers);
