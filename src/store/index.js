import { createStore, applyMiddleware, compose } from 'redux'
import { storage } from '../utils'
import reducer from './reducers'
import thunk from 'redux-thunk'


const state = {
  todos: storage.getJSON('react_todos') || []
}

const store = createStore(
  reducer,
  state,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;




