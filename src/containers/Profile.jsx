import React, { useState } from 'react'
import axios from 'axios'
//import md5 from 'md5'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import ProfileComponent from '../components/Profile'
import { sidebar_check } from '../actions/sidebar'
import { profile } from '../actions/profile'
import { Auth } from 'aws-amplify'

const Profile = () => {
  const dispatch = useDispatch()
  const { addToast } = useToasts()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [country, setCountry] = useState(null)
  const [residency, setResidency] = useState('UAE Resident')
  const [martial, setMartial] = useState('single')
  const [birthDate, setBirthDate] = useState(new Date())
  const [currentEmail, setCurrentEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const userData = {    
    first_name:firstName,
    last_name:lastName,
    email:currentEmail ? currentEmail : email,
    phone_number:phoneNumber,
    birth_date:birthDate.getUTCFullYear() + "-" + (birthDate.getUTCMonth() + 1) + "-" + birthDate.getUTCDate(),
  }
  const handleData = async () => {
    console.log(firstName)
    {/*let session = await Auth.currentSession();    
    try {    
      dispatch(profile(userData));      
      const response = axios({
        method: 'post',
        headers:{'x-access-token':session.accessToken.jwtToken},
        url: 'https://u1flyn3aqa.execute-api.eu-west-2.amazonaws.com/test/save_user_data',
        data: userData,
        crossDomain: true
      });
      dispatch(sidebar_check('profile'))      
    }
    catch (errors) {
      console.log('errors', errors)
    }
  }
  const handleAlert = () => {
    addToast('An error happened. Please try again.', {
      appearance:'error',
      autoDismiss:true
    })*/}
  }

  return (
    <ProfileComponent 
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      tel={tel}
      setTel={setTel}
      country={country}
      setCountry={setCountry}
      residency={residency}
      setResidency={setResidency}
      martial={martial}
      setMartial={setMartial}
      birthDate={birthDate}
      setBirthDate={setBirthDate}
      handleData={handleData}
      userData={userData}
      currentEmail={currentEmail}
      setCurrentEmail={setCurrentEmail}
      setPhoneNumber={setPhoneNumber}
      phoneNumber={phoneNumber}

    />
  )
}

export default Profile