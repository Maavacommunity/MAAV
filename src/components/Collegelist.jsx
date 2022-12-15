import { Formik } from 'formik'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import fetch from '../helpers/usermethods'
import { collegelist } from '../actions/collegelist'
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
const Collegelist =({
    CollegeList,
    college,
    setCollege,
    getCollege,
    handleCollegeList,
    UkCollege,
    UsCollege,
    SwedenCollege,
    ChinaCollege,
    CanadaCollege,
    AustraliaCollege,
    GermanyCollege,
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
            <Form noValidate onSubmit={handleCollegeList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Schools</h4>
                <p>You can select any 5 Schools.</p>
              </Col>
            </Row>
            {AustraliaCollege.map((item, index) => ( 
         <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
         <Form.Check
           type='checkbox'
           //name={item}
           value={item}
           label={item}
            // disabled={College.length==5}
          // value={item}
          onChange={(e) => {
            getCollege(e)
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
          <Form noValidate onSubmit={handleCollegeList}>
          <Row className='d-flex mt-5'>
            <Col lg={3}>
              <h4>List of Colleges</h4>
              <p>You can select any 5 Colleges.</p>
            </Col>
          </Row>
          {UkCollege.map((item, index) => ( 
       <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
       <Form.Check
         type='checkbox'
         //name={item}
         value={item}
         label={item}
          // disabled={College.length==5}
        // value={item}
        onChange={(e) => {
          getCollege(e)
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
              handleCollegeList()
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
        <Form noValidate onSubmit={handleCollegeList}>
        <Row className='d-flex mt-5'>
          <Col lg={3}>
            <h4>List of Colleges</h4>
            <p>You can select any 5 Colleges.</p>
          </Col>
        </Row>
        {SwedenCollege.map((item, index) => ( 
     <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
     <Form.Check
       type='checkbox'
       //name={item}
       value={item}
       label={item}
        // disabled={College.length==5}
      // value={item}
      onChange={(e) => {
        getCollege(e)
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
            handleCollegeList()
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
      <Form noValidate onSubmit={handleCollegeList}>
      <Row className='d-flex mt-5'>
        <Col lg={3}>
          <h4>List of Colleges</h4>
          <p>You can select any 5 Colleges.</p>
        </Col>
      </Row>
      {ChinaCollege.map((item, index) => ( 
   <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
   <Form.Check
     type='checkbox'
     //name={item}
     value={item}
     label={item}
      // disabled={College.length==5}
    // value={item}
    onChange={(e) => {
      getCollege(e)
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
          handleCollegeList()
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
            <Form noValidate onSubmit={handleCollegeList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Colleges</h4>
                <p>You can select any 5 Colleges.</p>
              </Col>
            </Row>
            {GermanyCollege.map((item, index) => ( 
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
            // disabled={College.length==5}
          // value={item}
          onChange={(e) => {
            getCollege(e)
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
            <Form noValidate onSubmit={handleCollegeList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Colleges</h4>
                <p>You can select any 5 Colleges.</p>
              </Col>
            </Row>
            {UsCollege.map((item, index) => ( 
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
            // disabled={College.length==5}
          // value={item}
          onChange={(e) => {
            getCollege(e)
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
            <Form noValidate onSubmit={handleCollegeList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Colleges</h4>
                <p>You can select any 5 Colleges.</p>
              </Col>
            </Row>
            {CanadaCollege.map((item, index) => ( 
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
            // disabled={College.length==5}
          // value={item}
          onChange={(e) => {
            getCollege(e)
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

export default Collegelist;