import React,{ Fragment ,useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ApplicationComponent from '../components/Application'
import { logout } from '../actions/auth'
const Application = () => {
  const navigate = useNavigate()
  const [school, setSchool] = useState(false)
  const [college, setCollege] = useState(false);
    const [university, setUniversity] = useState(false);

  //    // console.log(school)
  const handleSchool =async (e) => { 
    setSchool(true)
    setCollege(false)
    setUniversity(false)
    console.log(school)
  }
  const handleCollege =async (e) => { 
    setCollege(true)
    setSchool(false)
    setUniversity(false)
    console.log(college)
  }
  const handleUniversity =async (e) => { 
    setCollege(false)
    setSchool(false)
    console.log(university)
  }


  useEffect(()=>{
    if (school || college || university === true){
      console.log(school)
      localStorage.setItem('school', JSON.stringify(school))
      localStorage.setItem('college',JSON.stringify (college))
      localStorage.setItem('university', JSON .stringify(university))
      navigate('/list')
    }
   
  },[school , college , university])

  
  return <ApplicationComponent 
  school={school}
  setSchool={setSchool}
  handleSchool={handleSchool}
  college={college}
  setCollege={setCollege}
  handleCollege={handleCollege}
  university={university}
  setUniversity={setUniversity}
  handleUniversity={handleUniversity}
  />
}

export default Application