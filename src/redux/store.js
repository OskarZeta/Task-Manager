import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import reducer from './reducers/reducer';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function setStore() {
  return createStore(
    //reducer,
    rootReducer,
    composeWithDevTools(
    applyMiddleware(thunk)
    )
  );
}
