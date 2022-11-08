import React, { Fragment, useState } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { Container } from 'react-bootstrap';
import { ToastProvider } from 'react-toast-notifications'
import Login from './pages/Auth/Login';
import Toast from './containers/Toast'
import Confirmation from './pages/Auth/Confirmation'

function App () {
  return (
    <Fragment>
       <ToastProvider>
    <Container className='app-container' style={{ marginTop: "70px"}}>
      <Routes>
        <Route path='/' element={<React.Fragment><Login/></React.Fragment>}/>
        <Route path='/confirmation' element={<React.Fragment><Confirmation /></React.Fragment>} />
      </Routes>
    </Container>
    </ToastProvider>
    </Fragment>
  )
}
export default App


