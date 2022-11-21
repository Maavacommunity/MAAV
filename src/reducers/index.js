import { combineReducers } from 'redux'

import auth from './auth'
import sidebar from './sidebar'
import profile from './profile'
import common from './common'
import docs from './docs'

const rootReducer = combineReducers({
  auth,
  common,
  sidebar,
  profile,
  docs,
})

export default rootReducer