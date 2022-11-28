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
  const [international, setInternational] = useState(false);

  //    // console.log(school)
  const handleSchool =async (e) => { 
    setSchool(true)
    setCollege(false)
    setUniversity(false)
    setInternational(false)
   // console.log(school)
  }
  const handleCollege =async (e) => { 
    setCollege(true)
    setSchool(false)
    setUniversity(false)
    setInternational(false)
   // console.log(college)
  }
  const handleUniversity =async (e) => { 
    setUniversity(true)
    setCollege(false)
    setSchool(false)
    setInternational(false)
  //  console.log(university)
  }
  const handleInternational =async (e) => { 
    console.log("check")
    setInternational(true)
    setUniversity(false)
    setCollege(false)
    setSchool(false)
  //  console.log(university)
  }



  useEffect(()=>{
    if (school || college || university || international === true){
      //console.log(school)
      localStorage.setItem('school', JSON.stringify(school))
      localStorage.setItem('college',JSON.stringify (college))
      localStorage.setItem('university', JSON .stringify(university))
      localStorage.setItem('international', JSON .stringify(international))
      navigate('/list')
    }
   
  },[school , college , university , international])

  
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
  international={international}
  setInternational={setInternational}
  handleInternational={handleInternational}
  />
}

export default Application