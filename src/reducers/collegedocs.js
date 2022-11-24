import {
    COLLEGEDOCS 
  } from '../constants/actionTypes/collegedocs'
  
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
      case COLLEGEDOCS:
        return {
          ...state,
          currentUser:action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer