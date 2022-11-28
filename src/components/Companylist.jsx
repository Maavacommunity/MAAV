
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
  const Companylist =({
      company,
      UkCompany,
      UsCompany,
      SwedenCompany,
      ChinaCompany,
      CanadaCompany,
      AustraliaCompany,
      GermanyCompany,
      setCompany,
      getCompany,
      handleSubmit
  })=> {
  
    // Multi Checkbox
    const countryselect=JSON.parse(localStorage.getItem('internationalcheck'))
    const Uk = countryselect.filter(obj => {
      return obj === 'Uk';
    });
    const Australia = countryselect.filter(obj => {
      return obj === 'Australia';
    });
    const US = countryselect.filter(obj => {
      return obj === 'US';
    });
    const Canada = countryselect.filter(obj => {
      return obj === 'Canada';
    });
    const Sweden = countryselect.filter(obj => {
      return obj === 'Sweden';
    });

    const Germany = countryselect.filter(obj => {
      return obj === 'Germany';
    });
    const China = countryselect.filter(obj => {
      return obj === 'China';
    });
    
    
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
                <Col lg={4}>
                  <h4>Select Your Company</h4>
                </Col>
              </Row>
              {Uk.map(obj => {
          return (
            <div>
               <Badge pill bg='secondary' style={{width:'5rem'}}>{obj}</Badge>{' '}
           <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Uk"
                value="Company of Uk"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Uk"
                value="Company of Uk"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               </div>
              );
            })}
             {US.map(obj => {
          return (
            <div>
               <Badge pill bg='secondary' style={{width:'5rem'}}>{obj}</Badge>{' '}
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Us"
                value="Company of Us"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Us"
                value="Company of Us"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               </div>
              );
            })}
             {Australia.map(obj => {
          return (
            <div>
               <Badge pill bg='secondary' style={{width:'5rem'}}>{obj}</Badge>{' '}
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Australia"
                value="Company of Australia"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Australia"
                value="Company of Australia"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               </div>
              );
            })}

        {Sweden.map(obj => {
          return (
            <div>
               <Badge pill bg='secondary' style={{width:'5rem'}}>{obj}</Badge>{' '}
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Sweden"
                value="Company of Sweden"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Sweden"
                value="Company of Sweden"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               </div>
              );
            })}
             {Canada.map(obj => {
          return (
            <div>
               <Badge pill bg='secondary' style={{width:'5rem'}}>{obj}</Badge>{' '}
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Canada"
                value="Company of Canada"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Canada"
                value="Company of Canada"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               </div>
              );
            })}
            {Germany.map(obj => {
          return (
            <div>
               <Badge pill bg='secondary' style={{width:'5rem'}}>{obj}</Badge>{' '}
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Germany"
                value="Company of Germany"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of Germany"
                value="Company of Germany"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               </div>
              );
            })}
            {China.map(obj => {
          return (
            <div>
               <Badge pill bg='secondary' style={{width:'5rem'}}>{obj}</Badge>{' '}
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of China"
                value="Company of China"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               <div lg={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'1px solid grey', padding :'15px', margin:'10px' , borderRadius:'0.5rem' }}>
            <Form.Check 
                type='checkbox'
                label="Company of China"
                value="Company of China"
                name='group'
                id='radio_1'
                // onChange={(e) => setGrade(e.target.value)}
              />
               </div>
               </div>
              );
            })}
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
  
  export default Companylist;