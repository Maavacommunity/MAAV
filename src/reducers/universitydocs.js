import {
    UNIVERSITYDOCS
  } from '../constants/actionTypes/universitydocs'
  
  const INITIAL_STATE = {
    currentUser: {
      transcriptPath:'',
      applicationPath:'',
      fatherIDPath:'',
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