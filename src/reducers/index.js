import { combineReducers } from 'redux'

import auth from './auth'
import sidebar from './sidebar'
import profile from './profile'
import common from './common'
import docs from './docs'
import collegedocs from './collegedocs'
import companylist from './companylist'
import gradelist from './gradelist'
import schoollist from './schoollist'
import timeline from './timeline'
import universitydocs from './universitydocs'
import countrylist from './countrylist'

const rootReducer = combineReducers({
  auth,
  common,
  sidebar,
  profile,
  docs,
  collegedocs,
  companylist,
  gradelist,
  schoollist,
  timeline,
  universitydocs,
  countrylist,

})

export default rootReducer