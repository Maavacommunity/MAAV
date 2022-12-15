import {
    COLLEGELIST 
  } from '../constants/actionTypes/collegelist'
  
  const INITIAL_STATE = {
    currentUser: {
      college:[]
    }
  }
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case COLLEGELIST:
        return {
          ...state,
          currentUser:action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer