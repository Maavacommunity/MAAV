import {
    COUNTRYLIST 
  } from '../constants/actionTypes/countrylist'
  
  const INITIAL_STATE = {
    currentUser: {
      country:''
    }
  }
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case COUNTRYLIST:
        return {
          ...state,
          currentUser:action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer