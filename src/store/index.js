import { createStore } from 'redux'



/** Action Creator */
export const actions = {
  int: () => {
    return { type: 'INCREMENT' }
  },

  dec: () => {
    return { type: 'DECREMENT' };
  }
}

/** Reducer */
const reducer = (state = {
  counter: 0
}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 }
  
    case 'DECREMENT':
      return { counter: state.counter - 1 }

    default:
      return state
  }
}

export const store = createStore(reducer);




