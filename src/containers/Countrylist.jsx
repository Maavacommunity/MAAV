import React, { useState } from 'react'
import axios from 'axios'
//import md5 from 'md5'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import CountrylistComponent from '../components/Countrylist'
import { countrylist } from '../actions/countrylist'
import { useNavigate} from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { AppSync } from 'aws-sdk'
const Countrylist = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [country , setCountry]=useState('')
 
  const CountryList = [
    'Uk',
    'Australia',
    'US',
    'Canada',
    'Sweden',
    'Germany',
    'China',
  ];
  const countryName={
    country:country,
  }
  const schoolpush= localStorage.getItem('school')
  const collegepush= localStorage.getItem('college')
  const universitypush= localStorage.getItem('university')
  const internationalpush= localStorage.getItem('international')
  const handleData =async (e) => {
    if (country) {
      let session = await Auth.currentSession();
      try{
        const response = axios({
        method: 'post',
        headers:{'x-access-token':session.accessToken.jwtToken},
        url: 'https://30ihetuol1.execute-api.eu-west-2.amazonaws.com/test/saveUserData',
        data: countryName,
        crossDomain: true
      });
      console.log(country)
      if (schoolpush === 'true'){
      navigate('/list')
      }
      if (collegepush === 'true'){
        navigate('/collegelist')
        }
        if (universitypush === 'true'){
          navigate('/universitylist')
          }
          if (internationalpush === 'true'){
            navigate('/international')
            }
        //dispatch(sidebar_check('profile'))      
      }
      catch (errors) {
        console.log('errors', errors)
      }
      //localStorage.setItem('countrycheck',JSON.stringify(country))
     
    } 
    else{
      addToast('Please Select Country',
      { appearance: 'error',
       autoDismiss: true}
       )
    }
  }

  
  return (
    <CountrylistComponent 
    CountryList={CountryList}
    //getCountry={getCountry}
    country={country}
    setCountry={setCountry}
    handleData={handleData}
    />
  )
}

export default Countrylist