import React, { Fragment, useState } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './pages/Auth/Login';

function App () {
  return (
    <Fragment>
    <Container>
      <Routes>
        <Route path='/' element={<React.Fragment><Login/></React.Fragment>}/>
      </Routes>
    </Container>
    </Fragment>
  )
}
export default App


