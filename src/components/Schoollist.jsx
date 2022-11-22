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
const Schoollist =({
    List,
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
          
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
            <Form noValidate onSubmit={handleSubmit}>
            <Row className='d-flex mt-5'>
              <Col lg={3}>
                <h4>List of Schools</h4>
                <p>You can select any 5 Schools.</p>
              </Col>
            
            </Row>
      {List.map((item, index) => (
         <Col lg={12} key={index} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
         <Form.Check
           type='checkbox'
           //name={item}
           value={item}
           label={item}
            disabled={school.length==5}
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
      </div>
    </Container>
      
        
           
   
  );
}

export default Schoollist;