import { Fragment ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import ApplicationComponent from '../components/Application'

import { logout } from '../actions/auth'

const Application = () => {
  // const [school, setSchool] = useState()
  //    // console.log(school)

  // const handleSchool = () => { 
  //   setSchool(true)
  //   console.log(school)
  //   localStorage.setItem('school', school)
  // }




  return <ApplicationComponent 
  // school={school}
  // setSchool={setSchool}
  // handleSchool={handleSchool}
  />
}

export default Application