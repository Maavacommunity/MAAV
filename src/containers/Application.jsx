import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import ApplicationComponent from '../components/Application'

import { logout } from '../actions/auth'

const Application = () => {
  return <ApplicationComponent />
}

export default Application