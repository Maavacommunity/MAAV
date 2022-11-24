import {
    UNIVERSITYDOCS
  } from '../constants/actionTypes/universitydocs'
  
  const INITIAL_STATE = {
    currentUser: {
      alevel:'',
      olevel:'',
      applicationPath:'',
      referencePath:'',
      studentIDPath:'',
      // submittedCrm:false
    }
  }
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UNIVERSITYDOCS:
        return {
          ...state,
          currentUser:action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer