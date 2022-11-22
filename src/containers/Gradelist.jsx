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
  const [school , setSchool] = useState ([]);
 

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
    />
  )
}

export default Gradelist