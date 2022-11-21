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
import Dashboard from './pages/Dashboard'
import FirstView from './containers/firstview'
import ProtectedRoute from './helpers/ProtectedRoute'
import NonProtectedRoute from './helpers/NonProtectedRoute'
import Preloader from './components/Preloader';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import Application from './pages/Application'
import './App.css'
function App () {
  return (
    <Fragment>
      {/* <Header /> */}
        <ToastProvider>
          <Sidebar/>
          <Container className='app-container' style={{ marginTop: "70px"}}>
            <Routes>
              <Route path='/overview' element={<React.Fragment><FirstView /></React.Fragment>} />
              <Route path='/dashboard' element={<React.Fragment><ProtectedRoute><Dashboard /></ProtectedRoute></React.Fragment>} />
              <Route path='/' element={<React.Fragment><Login /></React.Fragment>} />
              <Route path='/confirmation' element={<React.Fragment><Confirmation /></React.Fragment>} />
              <Route path='/profile' element={<React.Fragment><Profile /></React.Fragment>} />
              <Route path='/application' element={<React.Fragment><Application /></React.Fragment>} />
              
            </Routes>
            {/* <Preloader/> */}
            {/* <Toast /> */}
          </Container>
        </ToastProvider>
    </Fragment>
  )
}
export default App


