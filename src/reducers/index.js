import { combineReducers } from 'redux'

import auth from './auth'
import sidebar from './sidebar'
import profile from './profile'

const rootReducer = combineReducers({
  auth,
  sidebar,
  profile,
})

export default rootReducer