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
import CountrySelect from 'react-bootstrap-country-select'
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
import fetch from '../helpers/methods'
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
  setPhoneNumber,
  handleAlert
}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [seed, setSeed] = useState(1);
  const reset = () => {
      setSeed(Math.random());
  }
  
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
          Complete some basic information about your identity and residency status. 
          Please fill in the details as it appears on your Emirates ID or passport.
        </p>
        <Card className='striped-tabled-with-hover mt-5 py-5 px-3' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px'}}>
        <h4 style={{
          fontFamily: 'AGaramond-regular',
          fontSize: '32px',
          letterSpacing: '-2px',
        }}
        >Your Details</h4>
        <p>Please fill in all the fields in order to ensure a complete application.</p>
        <Formik
          validationSchema={schema}
          onSubmit={console.log('')}
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
                  value={ firstName}
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
                  value={ lastName}
                 
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
                    disabled={currentEmail ? true : false}
                    type="email" 
                    name='email' 
                    value={currentEmail ? currentEmail : email}
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
                  value={ new Date()}
                
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
            <Link to='/income'
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
