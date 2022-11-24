import { Formik } from 'formik'
import { useState } from 'react';
import * as yup from 'yup'
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
    CollegeList,
    college,
    setCollege,
    UniversityList,
    university,
    setUniversity,
    school,
    setSchool,
    getSchool,
    getUniversity,
    getCollege,
    handleSchoolList,
    handleCollegeList,
    handleUniversityList,
})=> {

  const schoolpush= localStorage.getItem('school')
   const collegepush= localStorage.getItem('college')
   const universitypush= localStorage.getItem('university')
  return (
    <Container fluid>
      <div className='pb-5'>
      {(() => {
        if (schoolpush === "true") {
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
      {SchoolList.map((item, index) => ( 
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
      if( collegepush === "true"){
        return(
       
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
     {CollegeList.map((item, index) => (
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
           // disabled={school.length==5}
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
        )
      }
     else {
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
           {UniversityList.map((item, index) => (
        <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        <Form.Check
          type='checkbox'
          //name={item}
          value={item}
          label={item}
           // disabled={school.length==5}
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
        )
      }
    }) ()}   
      </div>
    </Container>
  );
}

export default Schoollist;