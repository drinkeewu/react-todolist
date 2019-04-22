import actionTypes from '../actions/action-types'
import { storage } from '../../utils'

function setStorage(todos) {
  storage.setJSON('react_todos', todos)
}

const reducer = (state, action) => {
  const { payload } = action;
  let todos = []
  switch (action.type) {
    case actionTypes.ADD_TODO:
      todos = [
        ...state.todos,
        action.payload
      ]
      setStorage(todos);

      return {
        todos 
      }

    case actionTypes.TOGGLE_COMPLETE:
      todos = state.todos.map(item => {
        if(item.id === action.payload.id) {
          item.complete = !item.complete
        }
        return item
      })
      setStorage(todos);
      return {
        todos
      }

    case actionTypes.UPDATE_TODO: 
      todos = state.todos.map(item => {
        if(item.id === payload.id) {
          item.value = payload.value
        }
        return item
      })
      setStorage(todos);
      return {
        todos
      }

    case actionTypes.DELETE_TODO: 
      todos = state.todos.filter(item => item.id !== payload.id)
      setStorage(todos);
      return { 
        todos
      }

    case actionTypes.CLEAR_COMPLETE: 
      todos = state.todos.filter(item => !item.complete)
      setStorage(todos);
      return  {
        todos
      }
    
      case actionTypes.TOGGLE_ALL:
        const { isCheckAll } = payload;
        todos = state.todos.map(item => {
          return Object.assign({}, item, {
            complete: !isCheckAll
          })
        })
        return {
          todos
        }
  
    default:
      return state
  }
}

export default reducer;
