import {
  DOCS 
} from '../constants/actionTypes/docs'

const INITIAL_STATE = {
  currentUser: {
    transcriptPath:'',
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