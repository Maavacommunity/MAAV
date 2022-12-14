import React, { Fragment, useState } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsmobile  from './constants/aws-exports'
import { Container } from 'react-bootstrap';
import * as AWS from 'aws-sdk'
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
import Docs from './pages/Docs';
import Collegedocs from './pages/Collegedocs';
import Universitydocs from './pages/Universitydocs';
import Application from './pages/Application'
import Schoollist from './pages/Schoollist';
import Gradelist from './pages/Gradelist';
import Companylist from './pages/Companylist';
import Timeline from './pages/Timeline';
import './App.css'

Amplify.configure({...awsmobile,authenticationFlowType: 'CUSTOM_AUTH'})
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
              <Route path='/login' element={<React.Fragment><Login /></React.Fragment>} />
              <Route path='/' element={<React.Fragment><Timeline /></React.Fragment>} />
              <Route path='/confirmation' element={<React.Fragment><Confirmation /></React.Fragment>} />
              <Route path='/profile' element={<React.Fragment><Profile /></React.Fragment>} />
              <Route path='/application' element={<React.Fragment><Application /></React.Fragment>} />
              <Route path='/documents' element={<React.Fragment><Docs /></React.Fragment>} />
              <Route path='/list' element={<React.Fragment><Schoollist /></React.Fragment>} />
              <Route path='/grade' element={<React.Fragment><Gradelist /></React.Fragment>} />
              <Route path='/college' element={<React.Fragment><Collegedocs /></React.Fragment>} />
              <Route path='/university' element={<React.Fragment><Universitydocs /></React.Fragment>} />
              <Route path='/international' element={<React.Fragment><Companylist /></React.Fragment>} />
            </Routes>
            {/* <Preloader/> */}
            {/* <Toast /> */}
          </Container>
        </ToastProvider>
    </Fragment>
  )
}
export default App


