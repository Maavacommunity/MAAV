import { Formik } from 'formik'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import fetch from '../helpers/usermethods'
import { unilist } from '../actions/unilist'
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
const Unilist =({
    UniversityList,
    University,
    setUniversity,
    getUniversity,
    handleUniversityList,
    UkUniversity,
    UsUniversity,
    SwedenUniversity,
    ChinaUniversity,
    CanadaUniversity,
    AustraliaUniversity,
    GermanyUniversity,
})=> {
  const navigate = useNavigate()
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
            <Form noValidate onSubmit={handleUniversityList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Universities</h4>
                <p>You can select any 5 Universities.</p>
              </Col>
            </Row>
            {AustraliaUniversity.map((item, index) => ( 
         <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
         <Form.Check
           type='checkbox'
           //name={item}
           value={item}
           label={item}
            // disabled={University.length==5}
          // value={item}
          onChange={(e) => {
            getUniversity(e)
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
          <Form noValidate onSubmit={handleUniversityList}>
          <Row className='d-flex mt-5'>
            <Col lg={3}>
              <h4>List of Universities</h4>
              <p>You can select any 5 Universities.</p>
            </Col>
          </Row>
          {UkUniversity.map((item, index) => ( 
       <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
       <Form.Check
         type='checkbox'
         //name={item}
         value={item}
         label={item}
          // disabled={University.length==5}
        // value={item}
        onChange={(e) => {
          getUniversity(e)
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
              handleUniversityList()
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
        <Form noValidate onSubmit={handleUniversityList}>
        <Row className='d-flex mt-5'>
          <Col lg={3}>
            <h4>List of Universities</h4>
            <p>You can select any 5 Universities.</p>
          </Col>
        </Row>
        {SwedenUniversity.map((item, index) => ( 
     <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
     <Form.Check
       type='checkbox'
       //name={item}
       value={item}
       label={item}
        // disabled={University.length==5}
      // value={item}
      onChange={(e) => {
        getUniversity(e)
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
            handleUniversityList()
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
      <Form noValidate onSubmit={handleUniversityList}>
      <Row className='d-flex mt-5'>
        <Col lg={3}>
          <h4>List of Universities</h4>
          <p>You can select any 5 Universities.</p>
        </Col>
      </Row>
      {ChinaUniversity.map((item, index) => ( 
   <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
   <Form.Check
     type='checkbox'
     //name={item}
     value={item}
     label={item}
      // disabled={University.length==5}
    // value={item}
    onChange={(e) => {
      getUniversity(e)
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
          handleUniversityList()
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
            <Form noValidate onSubmit={handleUniversityList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Universities</h4>
                <p>You can select any 5 Universities.</p>
              </Col>
            </Row>
            {GermanyUniversity.map((item, index) => ( 
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
            // disabled={University.length==5}
          // value={item}
          onChange={(e) => {
            getUniversity(e)
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
            <Form noValidate onSubmit={handleUniversityList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Universities</h4>
                <p>You can select any 5 Universities.</p>
              </Col>
            </Row>
            {UsUniversity.map((item, index) => ( 
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
            // disabled={University.length==5}
          // value={item}
          onChange={(e) => {
            getUniversity(e)
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
            <Form noValidate onSubmit={handleUniversityList}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Universities</h4>
                <p>You can select any 5 Universities.</p>
              </Col>
            </Row>
            {CanadaUniversity.map((item, index) => ( 
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
            // disabled={University.length==5}
          // value={item}
          onChange={(e) => {
            getUniversity(e)
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

export default Unilist;