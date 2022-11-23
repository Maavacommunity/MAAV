import React, { useState } from 'react'
import axios from 'axios'
//import md5 from 'md5'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import GradelistComponent from '../components/Gradelist'
import { gradelist } from '../actions/gradelist'
import { useNavigate} from 'react-router-dom'
const Gradelist = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [grade , setGrade] = useState ();
  const handleSubmit = async(e) => {
    e.preventDefault();
    // const data = new FormData()
    // data.append('grade', grade)
    if (grade) {
      console.log(grade)
      
      navigate('/documents')
    }
    else {
      console.log('error')
    }
  }

  const Grade = [
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
    'Grade 8',
    'Grade 9',
    'Grade 10',
    
  ];

  return (
    <GradelistComponent 
   Grade={Grade}
   grade={grade}
   setGrade={setGrade}
  //getGrade={getGrade}
   handleSubmit={handleSubmit}
    />
  )
}

export default Gradelist