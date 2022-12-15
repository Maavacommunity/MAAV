import {
    UNILIST 
  } from '../constants/actionTypes/unilist'
  
  const INITIAL_STATE = {
    currentUser: {
      university:[]
    }
  }
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UNILIST:
        return {
          ...state,
          currentUser:action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer