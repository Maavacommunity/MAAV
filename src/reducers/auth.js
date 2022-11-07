import {
    AUTH_LOGIN,
   // AUTH_LOGOUT,
    //AUTH_SIGNUP
  } from '../constants/actionTypes/auth'
  
  const INITIAL_STATE = {
    currentUser: {
      email: '',
      
    }
  }
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case AUTH_LOGIN:
        return {
          ...state,
          currentUser: action.user
        }
      
      default:
        return state
    }
  }
  
  export default reducer