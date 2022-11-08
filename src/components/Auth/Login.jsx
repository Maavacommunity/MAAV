import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner
} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {
  Link
} from 'react-router-dom'
import * as yup from 'yup'

import { Formik } from 'formik'
import { Auth } from "aws-amplify";
import { useToasts } from 'react-toast-notifications'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string()
    .email('Invalid email address')
});

const Login = ({ 
  email, 
  setEmail, 
  onLogin, 
  loading 
}) => {
  const [flag, setFlag] = useState(true)
  const user_email = useSelector(state => state.auth.currentUser.email )
 
  const [loginState, setLoginState] = useState(false);
  const { addToast } = useToasts()
  const navigate = useNavigate()
  const responseGoogle = async (response) => {
    let tempEmail = response.profileObj.email;
    try {      
      let result = await Auth.signIn(tempEmail);      
      window.cognitoUser=result
      navigate('/confirmation');      
    } catch (error) {
      console.log("error")
      console.log(error);
      await Auth.signUp({
          username: tempEmail,
          password: tempEmail,
          attributes: {
            email: tempEmail,
           
          }          
        });
        let result=await Auth.signIn(tempEmail);
        window.cognitoUser=result
        navigate('/confirmation')
    }
  }

  return (
  <Container fluid>
    <Formik
      validationSchema={schema}
      onSubmit={e => onLogin()}
      initialValues={{
        email: email,
      
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
      <Row style={{display: 'flex', justifyContent: 'center'}}>
        <Col
          style={{
            position: 'relative',
            maxWidth: '335px',
            width: '100%',
            padding: '0px',
          }}
        >
        <Form noValidate onSubmit={handleSubmit}>
          <h4>Sign in<br/></h4>
          <div
            className='h-100 bg-white rounded-2 d-flex justify-content-between align-items-center'
            style={{
              width: '100%',
              margin: '40px 0px 16px 0px',
              padding:'10px 10px ',
              background: '#DEE2E9',
              fontSize: '12px',
              fontWeight:'bold',
              border: '4px solid lightgrey'
            }}
          >
            <Col
              className=' text-nowrap text-center sign-focus bgwhite' 
              style={{cursor: 'pointer',
            }}
              onClick={()=>setFlag(true)}
            >Sign in with email</Col>            
          </div>
          
            <Button
              className='rounded-4 btn-outline-dark w-100 d-flex justify-content-center align-items-center text-dark bg-white sign-google'
              style={{
                padding:'20px 10px ',
                fontSize: '15px',
                fontWeight:'700',
                border: '4px solid black'
              }}
            >
              <img
                style={{position: 'absolute', left: '30px'}}
                src='/assets/images/google.a0cf285d.svg'
              />
              Sign in with Google
            </Button>
           
           
          <div className='d-flex align-items-center justify-content-center'>
            <h1 style={{position: 'absolute', width: '100%', border: '0.5px solid rgb(222, 226, 233)', margin: '8px 0px'}}></h1>
            <p style={{
              color: 'rgb(127, 133, 148)',
              padding: '0px 2rem',
              margin: '10px 0px 15px',
              backgroundColor: 'rgb(255, 255, 255)',
              lineHeight: '20px',
              fontSize: '16px',
              fontWeight: 500,
              zIndex: 1,
            }}>OR</p>
          </div>
          { flag ? 
            <>
              <h6>Email</h6>
              <div style={{
                width: '100%',
                height: '64px',
              }}>
                <Form.Control
                  className='px-3 w-100 h-100 rounded-3'
                  placeholder='E.g.name@example.com'
                  type='text'
                  style={{
                    fontSize: '15px',
                  }}
                  name='email'
                  value={email}
                  onChange={e => {
                    handleChange(e)
                    setEmail(e.target.value)
                  }} isInvalid={!!touched && !!errors.email} onBlur={handleBlur}
                />
              </div>
            </> : 
            <>
              <h6>Phone Number</h6>
              <div className='phone-wrapper'>
                
              </div>
            </>
          }
          <Button
            className='w-100 d-flex justify-content-center align-items-center'
            style={{
              height: '56px',
              fontSize: '1.2rem',
              borderRadius: '10rem',
              margin: '10px 0px',
              padding: '0px 2rem',
              border: 'none',
              backgroundColor: `${ email ? 'black' : 'rgb(222, 226, 233)'}`,
              color: `${ email ? 'white' : 'rgb(82, 87, 99)'}`,
            }}
            type='submit'
            disabled={( email) ? false : true}
          >
            {loading && <Spinner animation='border' />}
              &nbsp;&nbsp;&nbsp;Sign In
          </Button>          
        </Form>
        </Col>
      </Row>
    )}
    </Formik>
  </Container >
  )
}

export default Login