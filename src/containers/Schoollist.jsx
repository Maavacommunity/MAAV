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
        let schoolData = { 
          school:school
        }
      console.log(schoolData)
        //dispatch(profile(userData));      
        const response = axios({
          method: 'post',
          headers:{'x-access-token':session.accessToken.jwtToken},
          url: 'https://30ihetuol1.execute-api.eu-west-2.amazonaws.com/test/saveUserData',
          data: schoolData,
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
 
  const handleUniversityList  =async  (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('university', university)
    if (university.length<=5) {
      let session = await Auth.currentSession();    
      try {    
        let uniData = { 
          university:university
        }
      console.log(uniData)
        //dispatch(profile(userData));      
        const response = axios({
          method: 'post',
          headers:{'x-access-token':session.accessToken.jwtToken},
          url: 'https://30ihetuol1.execute-api.eu-west-2.amazonaws.com/test/saveUserData',
          data: uniData,
          crossDomain: true
        });
        //dispatch(sidebar_check('profile'))      
      }
      catch (errors) {
        console.log('errors', errors)
      }
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

  const UkSchool = [
    'School 1 of Uk',
    'School 2 of Uk',
    'School 3 of Uk',
    'School 4 of Uk',
    'School 5 of Uk',
    'School 6 of Uk',
    'School 7 of Uk',
    'School 8 of Uk',
    'School 9 of Uk',
    'School 10 of Uk',
    
  ];
  const UsSchool = [
    'School 1 of Us',
    'School 2 of Us',
    'School 3 of Us',
    'School 4 of Us',
    'School 5 of Us',
    'School 6 of Us',
    'School 7 of Us',
    'School 8 of Us',
    'School 9 of Us',
    'School 10 of Us',
    
  ];

  const SwedenSchool = [
    'School 1 of Sweden',
    'School 2 of Sweden',
    'School 3 of Sweden',
    'School 4 of Sweden',
    'School 5 of Sweden',
    'School 6 of Sweden',
    'School 7 of Sweden',
    'School 8 of Sweden',
    'School 9 of Sweden',
    'School 10 of Sweden',
    
  ];
  const ChinaSchool = [
    'School 1 of China',
    'School 2 of China',
    'School 3 of China',
    'School 4 of China',
    'School 5 of China',
    'School 6 of China',
    'School 7 of China',
    'School 8 of China',
    'School 9 of China',
    'School 10 of China',
    
  ];
  const CanadaSchool = [
    'School 1 of Canada',
    'School 2 of Canada',
    'School 3 of Canada',
    'School 4 of Canada',
    'School 5 of Canada',
    'School 6 of Canada',
    'School 7 of Canada',
    'School 8 of Canada',
    'School 9 of Canada',
    'School 10 of Canada',
    
  ];

  const GermanySchool = [
    'School 1 of Germany',
    'School 2 of Germany',
    'School 3 of Germany',
    'School 4 of Germany',
    'School 5 of Germany',
    'School 6 of Germany',
    'School 7 of Germany',
    'School 8 of Germany',
    'School 9 of Germany',
    'School 10 of Germany',
    
  ];
  const AustraliaSchool = [
    'School 1 of Australia',
    'School 2 of Australia',
    'School 3 of Australia',
    'School 4 of Australia',
    'School 5 of Australia',
    'School 6 of Australia',
    'School 7 of Australia',
    'School 8 of Australia',
    'School 9 of Australia',
    'School 10 of Australia',
    
  ];
 
  // const SchoolList = [
  //   'Groton Private School',
  //   'Philips Academy',
  //   'The City School',
  //   'The Lawrenceville School',
  //   'Beaconhouse School System',
  //   'Froebel’s International School',
  //   'Habib Public School',
  //   'Groton Private School',
  //   'Philips Academy',
  //   'The City School',
  //   'The Lawrenceville School',
  //   'Beaconhouse School System',
  //   'Froebel’s International School',
  //   'Habib Public School',
  // ];

  // const CollegeList = [
  //   'Massachusetts Institute of Technology (MIT)',
  //   'St. Joseph’s College',
  //   'Massachusetts Institute of Technology (MIT)',
  //   'St. Joseph’s College',
  //   'Massachusetts Institute of Technology (MIT)',
  //   'St. Joseph’s College',
  //   'Massachusetts Institute of Technology (MIT)',
  //   'St. Joseph’s College',
  //   'Massachusetts Institute of Technology (MIT)',
  //   'St. Joseph’s College',
  //   'Massachusetts Institute of Technology (MIT)',
  //   'St. Joseph’s College',
    
  // ];

  // const UniversityList = [
  //   'University of Cambridge',
  //   'Stanford University',
  //   'Harvard University.',
  //   'University of Oxford.',
  //   'University of Washington Seattle.',
  //   'Columbia University.',
  //   'Oxford University' ,
  //   'National University of Sciences and Technology (NUST)' ,
  //   'University of Cambridge',
  //   'Stanford University',
  //   'Harvard University.',
  //   'University of Oxford.',
  //   'University of Washington Seattle.',
  //   'Columbia University.',
  //   'Oxford University' ,
  //   'National University of Sciences and Technology (NUST)' ,
    
  // ];

  // const CountryList = [
  //  'company 1',
  //  'company 2',
  //  'company 3',
  //  'company 4',
  //  'company 5',
    
  // ];
  
  return (
    <SchoollistComponent 
    // SchoolList={SchoolList}
    school={school}
    setSchool={setSchool}
    UkSchool={UkSchool}
   UsSchool={UsSchool}
   SwedenSchool={SwedenSchool}
   ChinaSchool={ChinaSchool}
   CanadaSchool={CanadaSchool}
   GermanySchool={GermanySchool}
   AustraliaSchool={AustraliaSchool}
    // CollegeList={CollegeList}
    college={college}
    setCollege={setCollege}
    getCollege={getCollege}
    getUniversity={getUniversity}
    // UniversityList={UniversityList}
    university={university}
    setUniversity={setUniversity}
    getInternational={getInternational}
    // CountryList={CountryList}
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