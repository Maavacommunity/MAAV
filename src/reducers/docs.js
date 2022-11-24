import {
  DOCS 
} from '../constants/actionTypes/docs'

const INITIAL_STATE = {
  currentUser: {
    transcriptPath:'',
    applicationPath:'',
    identityPath:'',
    fatherIDPath:'',
    certificatePath:'',
    photoPath:'',
    submittedCrm:false
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DOCS:
      return {
        ...state,
        currentUser:action.payload
      }
    default:
      return state
  }
}

export default reducer