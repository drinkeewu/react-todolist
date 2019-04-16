import actionTypes from '../actions/action-types'


const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        todos: [
          ...state.todos,
          action.payload
        ]
      }

    case actionTypes.TOGGLE_COMPLETE:
      return {
        todos: state.todos.map(item => {
          if(item.id === action.payload.id) {
            item.complete = !item.complete
          }
          return item
        })
      }

    case actionTypes.UPDATE_TODO: 
      return {
        todos: state.todos.map(item => {
          if(item.id === payload.id) {
            item.value = payload.value
          }
          return item
        })
      }

    case actionTypes.DELETE_TODO: 
      return { 
        todos: state.todos.filter(item => item.id !== payload.id)
      }

    case actionTypes.CLEAR_COMPLETE: 
      return  {
        todos: state.todos.filter(item => !item.complete)
      }
  
    default:
      return state
  }
}

export default reducer;
