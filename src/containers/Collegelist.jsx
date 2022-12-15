import React, { useState } from 'react'
import axios from 'axios'
//import md5 from 'md5'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import CollegelistComponent from '../components/Collegelist'
import {collegelist } from '../actions/collegelist'
import { useNavigate} from 'react-router-dom'
import { Auth } from 'aws-amplify'
const Collegelist = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [college , setCollege] = useState ([]);
 
  const getCollege = (e) => {
    const {value , checked} = e.target
    if(checked){
        setCollege([...college , value])
    }
    else{
        setCollege(college.filter((e)=> e !== value))
    }
  }
  const handleCollegeList = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('college', college)
    if (college.length<=5) {
      let session = await Auth.currentSession();    
      try {    
        let collegeData = { 
          college:college
        }
      console.log(collegeData)
        //dispatch(profile(userData));      
        const response = axios({
          method: 'post',
          headers:{'x-access-token':session.accessToken.jwtToken},
          url: 'https://30ihetuol1.execute-api.eu-west-2.amazonaws.com/test/saveUserData',
          data: collegeData,
          crossDomain: true
        });
        //dispatch(sidebar_check('profile'))      
      }
      catch (errors) {
        console.log('errors', errors)
      }
      console.log(data.get('college'))
     navigate('/college')
    } 
    if(college.length>5){
      addToast('Please Select only 5 colleges',
      { appearance: 'error',
       autoDismiss: true}
       )
    }
    
  }

  const UkCollege = [
    'College 1 of Uk',
    'College 2 of Uk',
    'College 3 of Uk',
    'College 4 of Uk',
    'College 5 of Uk',
    'College 6 of Uk',
    'College 7 of Uk',
    'College 8 of Uk',
    'College 9 of Uk',
    'College 10 of Uk',
    
  ];
  const UsCollege = [
    'College 1 of Us',
    'College 2 of Us',
    'College 3 of Us',
    'College 4 of Us',
    'College 5 of Us',
    'College 6 of Us',
    'College 7 of Us',
    'College 8 of Us',
    'College 9 of Us',
    'College 10 of Us',
    
  ];

  const SwedenCollege = [
    'College 1 of Sweden',
    'College 2 of Sweden',
    'College 3 of Sweden',
    'College 4 of Sweden',
    'College 5 of Sweden',
    'College 6 of Sweden',
    'College 7 of Sweden',
    'College 8 of Sweden',
    'College 9 of Sweden',
    'College 10 of Sweden',
    
  ];
  const ChinaCollege = [
    'College 1 of China',
    'College 2 of China',
    'College 3 of China',
    'College 4 of China',
    'College 5 of China',
    'College 6 of China',
    'College 7 of China',
    'College 8 of China',
    'College 9 of China',
    'College 10 of China',
    
  ];
  const CanadaCollege = [
    'College 1 of Canada',
    'College 2 of Canada',
    'College 3 of Canada',
    'College 4 of Canada',
    'College 5 of Canada',
    'College 6 of Canada',
    'College 7 of Canada',
    'College 8 of Canada',
    'College 9 of Canada',
    'College 10 of Canada',
    
  ];

  const GermanyCollege = [
    'College 1 of Germany',
    'College 2 of Germany',
    'College 3 of Germany',
    'College 4 of Germany',
    'College 5 of Germany',
    'College 6 of Germany',
    'College 7 of Germany',
    'College 8 of Germany',
    'College 9 of Germany',
    'College 10 of Germany',
    
  ];
  const AustraliaCollege = [
    'College 1 of Australia',
    'College 2 of Australia',
    'College 3 of Australia',
    'College 4 of Australia',
    'College 5 of Australia',
    'College 6 of Australia',
    'College 7 of Australia',
    'College 8 of Australia',
    'College 9 of Australia',
    'College 10 of Australia',
    
  ];
 
  return (
    <CollegelistComponent 
    UkCollege={UkCollege}
    UsCollege={UsCollege}
    SwedenCollege={SwedenCollege}
    ChinaCollege={ChinaCollege}
    CanadaCollege={CanadaCollege}
    GermanyCollege={GermanyCollege}
    AustraliaCollege={AustraliaCollege}
    // CollegeList={CollegeList}
    college={college}
    setCollege={setCollege}
    getCollege={getCollege}
    handleCollegeList={handleCollegeList}
   
    />
  )
}

export default Collegelist