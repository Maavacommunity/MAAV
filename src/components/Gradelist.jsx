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
    firstName: yup.string().required('Please input firstName'),
    lastName: yup.string().required('Please input lastName'),
    email: yup.string().email('Invalid email format').required('Please input your email'),
    tel: yup.string().required('Please input your telephone number'),
  });
const Gradelist =({
    Grade,
    school,
    setSchool,
    getSchool,
    handleSubmit
})=> {


  // Multi Checkbox
  

  return (
    <Container fluid>
      <div className='pb-5'>
        <Formik validationSchema={schema}
         // onSubmit={console.log('')}
          initialValues={{
           

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
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>Select Your Grade</h4>
                
              </Col>
            
            </Row>
      {Grade.map((item, index) => (
         <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
         <Form.Check
         inline
           type='radio'
           //name={item}
           value={item}
           label={item}
          // value={item}
          onChange={(e) => {
           console.log(e.target.value)
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
      </div>
    </Container>
      
        
           
   
  );
}

export default Gradelist;