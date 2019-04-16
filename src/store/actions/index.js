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
  }
}

export default actions;