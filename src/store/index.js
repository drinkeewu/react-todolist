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
  todoList: []
}, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todoList: [...state.todoList, payload]
      })
  
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todoList: payload.list
      })

    default:
      return state
  }
}

export const store = createStore(reducer);




