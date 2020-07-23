import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducers from './reducers/index'

const initState = {};
const middleware = [thunk];

export const store = createStore(
  rootReducers, 
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;