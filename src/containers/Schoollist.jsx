import React, { useState } from 'react'
import axios from 'axios'
//import md5 from 'md5'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import SchoollistComponent from '../components/Schoollist'
import { schoollist } from '../actions/schoollist'
import { useNavigate} from 'react-router-dom'
import { Auth } from 'aws-amplify'
const Schoollist = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [school , setSchool] = useState ([]);
  const [college , setCollege] = useState ([]);
  const [university , setUniversity] = useState ([]);
  const [international , setInternational] = useState ([]);
  const getSchool = (e) => {
    const {value , checked} = e.target
    if(checked){
        setSchool([...school , value])
    }
    else{
        setSchool(school.filter((e)=> e !== value))
    }
  }
  const getCollege = (e) => {
    const {value , checked} = e.target
    if(checked){
        setCollege([...college , value])
    }
    else{
        setCollege(college.filter((e)=> e !== value))
    }
  }
  const getUniversity = (e) => {
    const {value , checked} = e.target
    if(checked){
        setUniversity([...university , value])
    }
    else{
        setUniversity(university.filter((e)=> e !== value))
    }
  }

  const getInternational = (e) => {
    const {value , checked} = e.target
    if(checked){
       const check = setInternational([...international , value])
      //  localStorage.setItem('internationalcheck', JSON.stringify(check))
    }
    else{
        setInternational(international.filter((e)=> e !== value))
    }
  }
  // Handle Form Submission
  const handleSchoolList = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('school', school)
    if (school.length<=5) {
      let session = await Auth.currentSession();    
      try {    
        //dispatch(profile(userData));      
        const response = axios({
          method: 'post',
          headers:{'x-access-token':session.accessToken.jwtToken},
          url: 'https://30ihetuol1.execute-api.eu-west-2.amazonaws.com/test/saveUserData',
          data: school,
          crossDomain: true
        });
        //dispatch(sidebar_check('profile'))      
      }
      catch (errors) {
        console.log('errors', errors)
      }
      console.log(data.get('school'))
     navigate('/grade')
    } 
    if(school.length>5){
      addToast('Please Select only 5 Schools',
      { appearance: 'error',
       autoDismiss: true}
       )
    }
  }

  const handleCollegeList = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('college', college)
    if (college.length<=5) {
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
 
  const handleUniversityList = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('university', university)
    if (university.length<=5) {
      console.log(data.get('university'))
     navigate('/university')
    } 
    if(university.length>5){
      addToast('Please Select only 5 universities',
      { appearance: 'error',
       autoDismiss: true}
       )
    }
  }

  const handleInternationalList = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('international', international)
    if (international) {
      localStorage.setItem('internationalcheck',JSON.stringify(international))
      
     navigate('/international')
    } 
    if(international.length > 5){
      addToast('Please Select only 5 Countries',
      { appearance: 'error',
       autoDismiss: true}
       )
    }
  }
 
  const SchoolList = [
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

  const CollegeList = [
    'Massachusetts Institute of Technology (MIT)',
    'St. Joseph’s College',
    'Massachusetts Institute of Technology (MIT)',
    'St. Joseph’s College',
    'Massachusetts Institute of Technology (MIT)',
    'St. Joseph’s College',
    'Massachusetts Institute of Technology (MIT)',
    'St. Joseph’s College',
    'Massachusetts Institute of Technology (MIT)',
    'St. Joseph’s College',
    'Massachusetts Institute of Technology (MIT)',
    'St. Joseph’s College',
    
  ];

  const UniversityList = [
    'University of Cambridge',
    'Stanford University',
    'Harvard University.',
    'University of Oxford.',
    'University of Washington Seattle.',
    'Columbia University.',
    'Oxford University' ,
    'National University of Sciences and Technology (NUST)' ,
    'University of Cambridge',
    'Stanford University',
    'Harvard University.',
    'University of Oxford.',
    'University of Washington Seattle.',
    'Columbia University.',
    'Oxford University' ,
    'National University of Sciences and Technology (NUST)' ,
    
  ];

  const CountryList = [
    'Uk',
    'Australia',
    'US',
    'Canada',
    'Sweden',
    'Germany',
    'China',
    
  ];
  
  return (
    <SchoollistComponent 
    SchoolList={SchoolList}
    school={school}
    setSchool={setSchool}
    CollegeList={CollegeList}
    college={college}
    setCollege={setCollege}
    getCollege={getCollege}
    getUniversity={getUniversity}
    UniversityList={UniversityList}
    university={university}
    setUniversity={setUniversity}
    getInternational={getInternational}
    CountryList={CountryList}
    international={international}
    setInternational={setInternational}
    handleSchoolList={handleSchoolList}
    handleCollegeList={handleCollegeList}
    handleUniversityList={handleUniversityList}
    handleInternationalList={handleInternationalList}
    getSchool={getSchool}
    />
  )
}

export default Schoollist