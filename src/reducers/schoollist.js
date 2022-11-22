import {
    SCHOOLLIST 
  } from '../constants/actionTypes/schoollist'
  
  const INITIAL_STATE = {
    currentUser: {
      firstName:'',
      lastName:'',
      phoneNumber:'',
      birthDate:'',
    }
  }
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SCHOOLLIST:
        return {
          ...state,
          currentUser:action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer