import {
  PROFILE 
} from '../constants/actionTypes/profile'

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
    case PROFILE:
      return {
        ...state,
        currentUser:action.payload
      }
    default:
      return state
  }
}

export default reducer