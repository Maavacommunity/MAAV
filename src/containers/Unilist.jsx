import React, { useState } from 'react'
import axios from 'axios'
//import md5 from 'md5'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import UnilistComponent from '../components/Unilist'
import { unilist } from '../actions/unilist'
import { useNavigate} from 'react-router-dom'
import { Auth } from 'aws-amplify'
const Unilist = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [university , setUniversity] = useState ([]);
  
  const getUniversity = (e) => {
    const {value , checked} = e.target
    if(checked){
        setUniversity([...university , value])
    }
    else{
        setUniversity(university.filter((e)=> e !== value))
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


  const UkUniversity = [
    'University 1 of Uk',
    'University 2 of Uk',
    'University 3 of Uk',
    'University 4 of Uk',
    'University 5 of Uk',
    'University 6 of Uk',
    'University 7 of Uk',
    'University 8 of Uk',
    'University 9 of Uk',
    'University 10 of Uk',
    
  ];
  const UsUniversity = [
    'University 1 of Us',
    'University 2 of Us',
    'University 3 of Us',
    'University 4 of Us',
    'University 5 of Us',
    'University 6 of Us',
    'University 7 of Us',
    'University 8 of Us',
    'University 9 of Us',
    'University 10 of Us',
    
  ];

  const SwedenUniversity = [
    'University 1 of Sweden',
    'University 2 of Sweden',
    'University 3 of Sweden',
    'University 4 of Sweden',
    'University 5 of Sweden',
    'University 6 of Sweden',
    'University 7 of Sweden',
    'University 8 of Sweden',
    'University 9 of Sweden',
    'University 10 of Sweden',
    
  ];
  const ChinaUniversity = [
    'University 1 of China',
    'University 2 of China',
    'University 3 of China',
    'University 4 of China',
    'University 5 of China',
    'University 6 of China',
    'University 7 of China',
    'University 8 of China',
    'University 9 of China',
    'University 10 of China',
    
  ];
  const CanadaUniversity = [
    'University 1 of Canada',
    'University 2 of Canada',
    'University 3 of Canada',
    'University 4 of Canada',
    'University 5 of Canada',
    'University 6 of Canada',
    'University 7 of Canada',
    'University 8 of Canada',
    'University 9 of Canada',
    'University 10 of Canada',
    
  ];

  const GermanyUniversity = [
    'University 1 of Germany',
    'University 2 of Germany',
    'University 3 of Germany',
    'University 4 of Germany',
    'University 5 of Germany',
    'University 6 of Germany',
    'University 7 of Germany',
    'University 8 of Germany',
    'University 9 of Germany',
    'University 10 of Germany',
    
  ];
  const AustraliaUniversity = [
    'University 1 of Australia',
    'University 2 of Australia',
    'University 3 of Australia',
    'University 4 of Australia',
    'University 5 of Australia',
    'University 6 of Australia',
    'University 7 of Australia',
    'University 8 of Australia',
    'University 9 of Australia',
    'University 10 of Australia',
    
  ];
 
  return (
    <UnilistComponent 
    UkUniversity={UkUniversity}
    UsUniversity={UsUniversity}
    SwedenUniversity={SwedenUniversity}
    ChinaUniversity={ChinaUniversity}
    CanadaUniversity={CanadaUniversity}
    GermanyUniversity={GermanyUniversity}
    AustraliaUniversity={AustraliaUniversity}
    getUniversity={getUniversity}
    university={university}
    setUniversity={setUniversity}
    handleUniversityList={handleUniversityList}
    />
  )
}

export default Unilist