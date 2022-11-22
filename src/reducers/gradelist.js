import {
    GRADELIST 
  } from '../constants/actionTypes/gradelist'
  
  const INITIAL_STATE = {
    currentUser: {
      
    }
  }
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GRADELIST:
        return {
          ...state,
          currentUser:action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer