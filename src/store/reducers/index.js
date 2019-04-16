import actionTypes from '../actions/action-types'


const reducer = (state, action) => {
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
      const { payload } = action;
      return {
        todos: state.todos.map(item => {
          if(item.id === payload.id) {
            item.value = payload.value
          }
          return item
        })
      }
  
    default:
      return state
  }
}

export default reducer;
