import {
    TIMELINE
  } from '../constants/actionTypes/timeline'
  
  const INITIAL_STATE = {
    currentUser: {
      imagePath:'',
      text:'',
      username:''
    }
  }
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case TIMELINE:
        return {
          ...state,
          currentUser:action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer