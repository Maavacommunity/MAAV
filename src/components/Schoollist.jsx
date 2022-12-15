import { Formik } from 'formik'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import fetch from '../helpers/usermethods'
import { schoollist } from '../actions/schoollist'
import { countrylist } from '../actions/countrylist'
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
  
  const schema = yup.object().shape({
  });
const Schoollist =({
    SchoolList,
    school,
    setSchool,
    getSchool,
    handleSchoolList,
    UkSchool,
    UsSchool,
    SwedenSchool,
    ChinaSchool,
    CanadaSchool,
    AustraliaSchool,
    GermanySchool,
})=> {
  const navigate = useNavigate()
  const schoolpush= localStorage.getItem('school')
   const collegepush= localStorage.getItem('college')
   const universitypush= localStorage.getItem('university')
   const internationalpush= localStorage.getItem('international')
   const dispatch = useDispatch()
    useEffect(() => {
      fetch()
      .then(data => {
        data=data.data.data;
        const country = data.country;
        const payload = {
          country:country,
          
        }      
        dispatch(countrylist(payload));
      }
      )
      }, [])  
      let reduxData = useSelector(state => state.countrylist)  
 const usercountry = reduxData.currentUser.country;
     console.log(usercountry)
    
  return (
    <Container fluid>
      <div className='pb-5'>
      {(() => {
        if (usercountry === "Australia") {
          return (
        <Formik validationSchema={schema}
         // onSubmit={console.log('')}
          initialValues={{
          }}
        >
        {({
          
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
            <Form noValidate onSubmit={handleSchoolList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Schools</h4>
                <p>You can select any 5 Schools.</p>
              </Col>
            </Row>
            {AustraliaSchool.map((item, index) => ( 
         <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
         <Form.Check
           type='checkbox'
           //name={item}
           value={item}
           label={item}
            // disabled={school.length==5}
          // value={item}
          onChange={(e) => {
            getSchool(e)
          }}
         />
          </Col>
      ))}

  <div className='d-flex justify-content-end mt-4'>
            <Button
              className="d-flex justify-content-center align-items-center rounded-4"
              style={{minWidth:'150px'}}
              variant="outline-dark"
              type="submit"
              
            >
              Next step
            </Button>
        </div>
            </Form>
        )}
        </Formik>
      )} 
    if (usercountry === "UK") {
        return (
      <Formik validationSchema={schema}
       // onSubmit={console.log('')}
        initialValues={{
        }}
      >
      {({
        
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
          <Form noValidate onSubmit={handleSchoolList}>
          <Row className='d-flex mt-5'>
            <Col lg={3}>
              <h4>List of Schools</h4>
              <p>You can select any 5 Schools.</p>
            </Col>
          </Row>
          {UkSchool.map((item, index) => ( 
       <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
       <Form.Check
         type='checkbox'
         //name={item}
         value={item}
         label={item}
          // disabled={school.length==5}
        // value={item}
        onChange={(e) => {
          getSchool(e)
        }}
       />
        </Col>
    ))}

<div className='d-flex justify-content-end mt-4'>
          <Button
            className="d-flex justify-content-center align-items-center rounded-4"
            style={{minWidth:'150px'}}
            variant="outline-dark"
            type="submit"
            onClick={() => {
              handleSchoolList()
            }}
          >
            Next step
          </Button>
      </div>
          </Form>
      )}
      </Formik>
    )} 

    if (usercountry === "Sweden") {
      return (
    <Formik validationSchema={schema}
     // onSubmit={console.log('')}
      initialValues={{
      }}
    >
    {({
      
      handleChange,
      handleBlur,
      values,
      touched,
      errors,
    }) => (
        <Form noValidate onSubmit={handleSchoolList}>
        <Row className='d-flex mt-5'>
          <Col lg={3}>
            <h4>List of Schools</h4>
            <p>You can select any 5 Schools.</p>
          </Col>
        </Row>
        {SwedenSchool.map((item, index) => ( 
     <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
     <Form.Check
       type='checkbox'
       //name={item}
       value={item}
       label={item}
        // disabled={school.length==5}
      // value={item}
      onChange={(e) => {
        getSchool(e)
      }}
     />
      </Col>
  ))}

<div className='d-flex justify-content-end mt-4'>
        <Button
          className="d-flex justify-content-center align-items-center rounded-4"
          style={{minWidth:'150px'}}
          variant="outline-dark"
          type="submit"
          onClick={() => {
            handleSchoolList()
          }}
        >
          Next step
        </Button>
    </div>
        </Form>
    )}
    </Formik>
  )} 

  if (usercountry === "China") {
    return (
  <Formik validationSchema={schema}
   // onSubmit={console.log('')}
    initialValues={{
    }}
  >
  {({
    
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  }) => (
      <Form noValidate onSubmit={handleSchoolList}>
      <Row className='d-flex mt-5'>
        <Col lg={3}>
          <h4>List of Schools</h4>
          <p>You can select any 5 Schools.</p>
        </Col>
      </Row>
      {ChinaSchool.map((item, index) => ( 
   <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
   <Form.Check
     type='checkbox'
     //name={item}
     value={item}
     label={item}
      // disabled={school.length==5}
    // value={item}
    onChange={(e) => {
      getSchool(e)
    }}
   />
    </Col>
))}

<div className='d-flex justify-content-end mt-4'>
      <Button
        className="d-flex justify-content-center align-items-center rounded-4"
        style={{minWidth:'150px'}}
        variant="outline-dark"
        type="submit"
        onClick={() => {
          handleSchoolList()
        }}
      >
        Next step
      </Button>
  </div>
      </Form>
  )}
  </Formik>
)} 

        if (usercountry === "Germany") {
          return (
        <Formik validationSchema={schema}
        // onSubmit={console.log('')}
          initialValues={{
          }}
        >
        {({
          
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
            <Form noValidate onSubmit={handleSchoolList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Schools</h4>
                <p>You can select any 5 Schools.</p>
              </Col>
            </Row>
            {GermanySchool.map((item, index) => ( 
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
            // disabled={school.length==5}
          // value={item}
          onChange={(e) => {
            getSchool(e)
          }}
        />
          </Col>
        ))}

        <div className='d-flex justify-content-end mt-4'>
            <Button
              className="d-flex justify-content-center align-items-center rounded-4"
              style={{minWidth:'150px'}}
              variant="outline-dark"
              type="submit"
              
            >
              Next step
            </Button>
        </div>
            </Form>
        )}
        </Formik>
        )} 

        if (usercountry === "US") {
          return (
        <Formik validationSchema={schema}
        // onSubmit={console.log('')}
          initialValues={{
          }}
        >
        {({
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
            <Form noValidate onSubmit={handleSchoolList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Schools</h4>
                <p>You can select any 5 Schools.</p>
              </Col>
            </Row>
            {UsSchool.map((item, index) => ( 
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
            // disabled={school.length==5}
          // value={item}
          onChange={(e) => {
            getSchool(e)
          }}
        />
          </Col>
        ))}

        <div className='d-flex justify-content-end mt-4'>
            <Button
              className="d-flex justify-content-center align-items-center rounded-4"
              style={{minWidth:'150px'}}
              variant="outline-dark"
              type="submit"
              
            >
              Next step
            </Button>
        </div>
            </Form>
        )}
        </Formik>
        )} 

        if (usercountry === "Canada") {
          return (
        <Formik validationSchema={schema}
        // onSubmit={console.log('')}
          initialValues={{
          }}
        >
        {({
          
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
            <Form noValidate onSubmit={handleSchoolList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Schools</h4>
                <p>You can select any 5 Schools.</p>
              </Col>
            </Row>
            {CanadaSchool.map((item, index) => ( 
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
            // disabled={school.length==5}
          // value={item}
          onChange={(e) => {
            getSchool(e)
          }}
        />
          </Col>
        ))}

        <div className='d-flex justify-content-end mt-4'>
            <Button
              className="d-flex justify-content-center align-items-center rounded-4"
              style={{minWidth:'150px'}}
              variant="outline-dark"
              type="submit"
             
            >
              Next step
            </Button>
        </div>
            </Form>
        )}
        </Formik>
        )} 
      else {
        return(
          <div> 
            <h3> 
              Please Select an Application Option
            </h3>
          </div>
        )
      }
    }) ()}   
      </div>
    </Container>
  );
}

export default Schoollist;