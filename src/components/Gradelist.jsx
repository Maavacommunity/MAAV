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
    Input,
    Label,
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
    grade,
    setGrade,
    getGrade,
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
          //handleSubmit,
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
           
         <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
        
          <Form.Check 
              inline
              type='radio'
              label='Grade 1'
              value='Grade 1'
              name='group'
              id='radio_1'
              onChange={(e) => setGrade(e.target.value)}
            />
            </div>

               
            <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
              <Form.Check 
              inline
              type='radio'
              label='Grade 2'
              value='Grade 2'
              name='group'
              id='radio_2'
              onChange={(e) => setGrade(e.target.value)}
            />
            </div>
            <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
              inline
              type='radio'
              label='Grade 3'
              value='Grade 3'
              name='group'
              id='radio_3'
              onChange={(e) => setGrade(e.target.value)}
            />
            </div>
            <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
             <Form.Check 
              inline
              type='radio'
              label='Grade 4'
              value='Grade 4'
              name='group'
              id='radio_4'
              onChange={(e) => setGrade(e.target.value)}
            />
            </div>
            <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
             <Form.Check 
              inline
              type='radio'
              label='Grade 5'
              value='Grade 5'
              name='group'
              id='radio_5'
              onChange={(e) => setGrade(e.target.value)}
            />
            </div>
              <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
             <Form.Check 
              inline
              type='radio'
              label='Grade 6'
              value='Grade 6'
              name='group'
              id='radio_6'
              onChange={(e) => setGrade(e.target.value)}
            />
            </div>
            <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
             <Form.Check 
              inline
              type='radio'
              label='Grade 7'
              value='Grade 7'
              name='group'
              id='radio_7'
              onChange={(e) => setGrade(e.target.value)}
            />
            </div>
            <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
             <Form.Check 
              inline
              type='radio'
              label='Grade 8'
              value='Grade 8'
              name='group'
              id='radio_8'
              onChange={(e) => setGrade(e.target.value)}
            />
            </div>
            <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
              inline
              type='radio'
              label='Grade 9'
              value='Grade 9'
              name='group'
              id='radio_9'
              onChange={(e) => setGrade(e.target.value)}
            />
            </div>
            <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
             <Form.Check 
              inline
              type='radio'
              label='Grade 10'
              value='Grade 10'
              name='group'
              id='radio_10'
              onChange={(e) => setGrade(e.target.value)}
            />
         </div>
  
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