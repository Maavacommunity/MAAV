import React, { useState } from 'react'
import axios from 'axios'
//import md5 from 'md5'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import SchoollistComponent from '../components/Schoollist'
import { schoollist } from '../actions/schoollist'
import { useNavigate} from 'react-router-dom'
const Schoollist = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [school , setSchool] = useState ([]);
  const getSchool = (e) => {
    const {value , checked} = e.target
    if(checked){
        setSchool([...school , value])
    }
    else{
        setSchool(school.filter((e)=> e !== value))
    }
  }


  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData()
    
    data.append('school', school)
   
    if (school.length==5) {
     
      console.log(data.get('school'))
     navigate('/grade')
    
    } 
    if(school.length>5){
      addToast('Please Select only 5',
      { appearance: 'error',
       autoDismiss: true}
       )
    }
     if(school.length<5) {
      addToast('Please Select Atleast 5',
      { appearance: 'error',
       autoDismiss: true}
       )
    }
  }

  const List = [
    'Groton Private School',
    'Philips Academy',
    'The City School',
    'The Lawrenceville School',
    'Beaconhouse School System',
    'Froebel’s International School',
    'Habib Public School',
    'Groton Private School',
    'Philips Academy',
    'The City School',
    'The Lawrenceville School',
    'Beaconhouse School System',
    'Froebel’s International School',
    'Habib Public School',
  ];

  return (
    <SchoollistComponent 
    List={List}
    school={school}
    setSchool={setSchool}
    handleSubmit={handleSubmit}
    getSchool={getSchool}
    />
  )
}

export default Schoollist