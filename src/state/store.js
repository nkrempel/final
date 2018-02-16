import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

//to enable browser debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//base api url further manipulated based on calls needed in Actions
export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument('https://newsapi.org/v2/top-headlines?')),
  )
)