import { createStore } from 'redux'





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
    
    case 'UPDATE_TODO':
      return Object.assign({}, state, {
        todoList: payload.list
      })

    default:
      return state
  }
}

export const store = createStore(reducer);




