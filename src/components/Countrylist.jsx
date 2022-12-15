import { Formik } from 'formik'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
const Countrylist =({
    CountryList,
    country,
    setCountry,
    getCountry,
    
    handleData,
})=> {
  const navigate = useNavigate()
 
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
             <Form noValidate>
             <Row className='d-flex mt-5'>
               <Col lg={3}>
                 <h4>List of Countries</h4>
                 <p>Select A Country</p>
               </Col>
             </Row>       
            
          <Col lg={12}  key='inline-radio1' style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
          <Form.Check 
              inline
              type='radio'
              label='UK'
              value='UK'
              name='group'
              id='radio_1'
            //   disabled={bcf_employmentStatus?true:false}
            //   checked={bcf_employmentStatus==='Employee at a company'}
            //   onChange={(e) => setEmploymentStatus(e.target.value)}
            onChange={(e) => {
                setCountry(e.target.value)
              }}
            />
           </Col>        
           <Col lg={12}  key='inline-radio2' style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
          <Form.Check 
              inline
              type='radio'
              label='Australia'
              value='Australia'
              name='group'
              id='radio_1'
            //   disabled={bcf_employmentStatus?true:false}
            //   checked={bcf_employmentStatus==='Employee at a company'}
            //   onChange={(e) => setEmploymentStatus(e.target.value)}
            onChange={(e) => {
                setCountry(e.target.value)
              }}
            />
           </Col>        
           <Col lg={12}  key='inline-radio3' style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
          <Form.Check 
              inline
              type='radio'
              label='US'
              value='US'
              name='group'
              id='radio_1'
            //   disabled={bcf_employmentStatus?true:false}
            //   checked={bcf_employmentStatus==='Employee at a company'}
            //   onChange={(e) => setEmploymentStatus(e.target.value)}
            onChange={(e) => {
                setCountry(e.target.value)
              }}
            />
           </Col>  
           <Col lg={12}  key='inline-radio4' style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
          <Form.Check 
              inline
              type='radio'
              label='Canada'
              value='Canada'
              name='group'
              id='radio_1'
            //   disabled={bcf_employmentStatus?true:false}
            //   checked={bcf_employmentStatus==='Employee at a company'}
            //   onChange={(e) => setEmploymentStatus(e.target.value)}
            onChange={(e) => {
                setCountry(e.target.value)
              }}
            />
           </Col>  
           <Col lg={12}  key='inline-radio5' style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
          <Form.Check 
              inline
              type='radio'
              label='Sweden'
              value='Sweden'
              name='group'
              id='radio_1'
            //   disabled={bcf_employmentStatus?true:false}
            //   checked={bcf_employmentStatus==='Employee at a company'}
            //   onChange={(e) => setEmploymentStatus(e.target.value)}
            onChange={(e) => {
                setCountry(e.target.value)
              }}
            />
           </Col>            
           <Col lg={12}  key='inline-radio6' style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
          <Form.Check 
              inline
              type='radio'
              label='Germany'
              value='Germany'
              name='group'
              id='radio_1'
            //   disabled={bcf_employmentStatus?true:false}
            //   checked={bcf_employmentStatus==='Employee at a company'}
            //   onChange={(e) => setEmploymentStatus(e.target.value)}
            onChange={(e) => {
                setCountry(e.target.value)
              }}
            />
           </Col>  
           <Col lg={12}  key='inline-radio7' style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
          <Form.Check 
              inline
              type='radio'
              label='China'
              value='China'
              name='group'
              id='radio_1'
            //   disabled={bcf_employmentStatus?true:false}
            //   checked={bcf_employmentStatus==='Employee at a company'}
            //   onChange={(e) => setEmploymentStatus(e.target.value)}
            onChange={(e) => {
                setCountry(e.target.value)
              }}
            />
           </Col>  
          
         <div className='d-flex justify-content-end mt-4'>
             <Button
               className="d-flex justify-content-center align-items-center rounded-4"
               style={{minWidth:'150px'}}
               variant="outline-dark"
               type="submit"
               onClick={() => {
                handleData()
              }}
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

export default Countrylist;