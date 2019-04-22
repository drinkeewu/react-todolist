import actionTypes from './action-types'

const actions = {
  addTodo: (payload) => {
    return {
      type: actionTypes.ADD_TODO,
      payload
    }
  },


  toggleComplete: (payload) => {
    return {
      type: actionTypes.TOGGLE_COMPLETE,
      payload
    }
  },

  updateTodo: (payload) => {
    return {
      type: actionTypes.UPDATE_TODO,
      payload
    }
  },

  deleteTodo: (payload) => {
    return {
      type: actionTypes.DELETE_TODO,
      payload
    }
  },

  clearCompleted: (payload) => {
    return {
      type: actionTypes.CLEAR_COMPLETE,
      payload
    }
  },

  toggleAllTodos: (payload) => {
    return {
      type: actionTypes.TOGGLE_ALL,
      payload
    }
  }

}

export default actions;