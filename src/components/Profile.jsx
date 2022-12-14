import React, { useState, useEffect, Fragment }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Badge,
  Card, 
} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker"
import { Formik } from 'formik'
import * as yup from 'yup'
import { Auth } from 'aws-amplify'
import 'react-phone-number-input/style.css'
import "react-datepicker/dist/react-datepicker.css"
import './style/profile.css';
import { sidebar_check } from '../actions/sidebar'
//import { progress_value } from '../actions/progress'
import fetch from '../helpers/usermethods'
import { profile } from '../actions/profile'

const schema = yup.object().shape({
  firstName: yup.string().required('Please input firstName'),
  lastName: yup.string().required('Please input lastName'),
  email: yup.string().email('Invalid email format').required('Please input your email'),
  tel: yup.string().required('Please input your telephone number'),
});

const Profile = ({
  firstName, 
  setFirstName, 
  lastName, 
  setLastName, 
  email, 
  setEmail, 
  birthDate,
  setBirthDate,
  handleData,
  currentEmail,
  phoneNumber,
  file,
  setFile,
  handleProfile,
  setPhoneNumber,
  setCurrentEmail,
  handleAlert
}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [seed, setSeed] = useState(1);
  
  const reset = () => {
      setSeed(Math.random());
  }
  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then(data => {
      setCurrentEmail(data?.attributes?.email)
    })
    .catch(err => console.log(err))
    fetch()
    .then(data => {
      data=data.data.data;
      if (data.name === 'Invalid Session ID') {
        Auth.signOut();
        navigate('/login')
      }
      const first_name_c = data.first_name;
      const last_name_c = data.last_name;
      const phone_number_c = data.phone_number==="na"?null:data.phone_number;
      const data_of_birth_c = data.birth_date;
      const payload = {
        firstName:first_name_c,
        lastName:last_name_c,
        phoneNumber:phone_number_c,
        birthDate:data_of_birth_c,
      }      
      dispatch(profile(payload));
      setFirstName(first_name_c);
      setLastName(last_name_c);
      setPhoneNumber(phone_number_c);
    }
    )
    }, [])  
  let reduxData = useSelector(state => state.profile)
  const maav_first_name = reduxData.currentUser.firstName;
  const maav_last_name = reduxData.currentUser.lastName;
  const maav_phone_number = reduxData.currentUser.phoneNumber;
  const maav_birth = reduxData.currentUser.birthDate;
  

 
    // const data =JSON.parse(localStorage.getItem('userData'));
    // console.log(data&& data.file)
   
  return (
    <Container fluid>
      <div className='pb-5' style={{paddingTop:'20px'}}>
      <h1 style={{
          fontFamily: 'AGaramond-regular',
          fontSize: '64px',
          letterSpacing: '-5px',
        }}
        >Your Profile</h1>
        <p>
          Complete some basic information about your identity.
        </p>

        <Card className='striped-tabled-with-hover mt-5 py-5 px-3' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px'}}>
        <Row style={{display:'flex'}}>
          <Col 
          style={{
            width:'100%'
          }}>
        <h4 style={{
          fontFamily: 'AGaramond-regular',
          fontSize: '32px',
          letterSpacing: '-2px',
        }}
        >Your Details</h4>
        <p>Please fill in all the fields in order to ensure a complete application.</p></Col>
        {file ? 
        <Col
        className='d-flex flex-row-reverse'
        style={{
          alignItems:'flex-end',
          width:'100%',
          marginRight:'3rem',
         
        }}>
        <img src={file} className="p-2 profile"/>
        </Col>
        : <></>
      }
        </Row>
        <Formik
          validationSchema={schema}
          //onSubmit={console.log('')}
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            email: currentEmail ? currentEmail : email,            

          }}
        >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <div style={{width:'100%'}}>
            <Form.Group className="d-flex justify-content-between mb-3 gap-2" controlId="formBasicEmail">
              <div style={{width:'100%'}}>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name='firstName' 
                  value={ maav_first_name ? maav_first_name : firstName}
                  disabled={maav_first_name }
                  onChange={
                    e => {handleChange(e)
                    setFirstName(e.target.value)
                    }}
                  isInvalid={!!touched && !!errors.firstName}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.firstName}
                </Form.Control.Feedback>
              </div>
              <div style={{width:'100%'}}> 
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name='lastName'  
                  value={ maav_last_name ? maav_last_name : lastName}
                  disabled={maav_last_name }
                  onChange={e => {handleChange(e);
                  setLastName(e.target.value)
                  }}
                  isInvalid={!!touched && !!errors.lastName}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.lastName}
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <Form.Group className="d-flex justify-content-between mb-3 gap-2 mobile-class" controlId="formBasicEmail">
              <div style={{width:'100%'}}>
                <Form.Label>Email</Form.Label>
                  <Form.Control 
                  
                    type="email" 
                    name='email' 
                    value={currentEmail ? currentEmail : email}
                    disabled={currentEmail ? true : false}
                    onChange={e => {
                      handleChange(e);
                      setEmail(e.target.value)
                    }}
                    onBlur={handleBlur}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email}
                  </Form.Control.Feedback>
              </div>
              <div style={{width:'100%'}}> 
                <Form.Label>Phone Number</Form.Label>
                <PhoneInput
                  className='phone-number-input'
                  value={phoneNumber ? phoneNumber : maav_phone_number}
                  disabled={maav_phone_number}
                  type='tel'
                  placeholder="Enter phone number"
                  international
                  defaultCountry="US"
                 
                  onChange={setPhoneNumber}
                />
              </div>
            </Form.Group>

            <Form.Group className="d-flex justify-content-between mb-3 gap-2 mobile-class" controlId="formBasicEmail">
              <div style={{width:'100%'}}>
                <Form.Label>Date of birth</Form.Label>
                <DatePicker 
                   value={maav_birth ? maav_birth : new Date()}
                   disabled={maav_birth}
                 selected={birthDate} 
                  onChange={(date) => setBirthDate(date)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  dateFormat={(birthDate, "yyyy-MM-dd")
                }
                />
              </div>
              <div style={{width:'100%'}}>
                <Form.Label>Add Profile</Form.Label>
                <Form.Control name="file" type="file" onChange={handleProfile} 
                //disabled={file}
                >
                  </Form.Control>
              </div>
              
            </Form.Group>
          </div>
       
        <div className='d-flex justify-content-end mt-4'>
          { firstName ? 
            <Button
              className="d-flex justify-content-center align-items-center rounded-4"
              style={{minWidth:'150px'}}
              variant="outline-dark"
              type="submit"
              onClick={() => {
                handleData()
              }}
            >
              Next step
            </Button>
            :
            <Link to='/application'
              style={{
                textDecoration: 'none'
              }}
            >
              <Button
                className="d-flex justify-content-center align-items-center rounded-4"
                style={{minWidth:'150px'}}
                variant="outline-dark"
                type="submit"
                onClick={() => {
                  // dispatch(progress_value(18));
                  handleData()
                }}
              >
                Next step
              </Button>
            </Link>
          }
        </div>
        </Form>
         )}
        </Formik>
      </Card>
      </div>
    </Container>
  )
}

export default Profile
