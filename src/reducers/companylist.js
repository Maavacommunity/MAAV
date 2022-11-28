import {
    COMPANYLIST 
  } from '../constants/actionTypes/companylist'
  
  const INITIAL_STATE = {
    currentUser: {
      
    }
  }
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case COMPANYLIST:
        return {
          ...state,
          currentUser:action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer