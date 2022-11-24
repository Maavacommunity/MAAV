import { useState,useEffect } from 'react'
import { universitydocsAction } from '../actions/universitydocs'
import { statusAction } from '../actions/status'
import { useDispatch, useSelector } from 'react-redux'
import fetch from '../helpers/methods'
import {
  Container,
  Col,
  Card,
  Row,
  Badge,
  Button,
  Modal,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
const Universitydocs = ({
  //Alevel 
  handleAlevel,
  alevelName,
  handle_Close_Alevel,
  Alevel_Modal,
  handle_Alevel_Modal,
  alevel,
  handle_Alevel_Upload,
  // Application Form
  handleApplication,
  applicationName,
  handle_Close_Application,
  Application_Modal,
  handle_Application_Modal,
  application,
  handle_Application_Upload,
  // Olevel
  handleOlevel,
  olevelName,
  handle_Close_Olevel,
  Olevel_Modal,
  handle_Olevel_Modal,
  olevel,
  handle_Olevel_Upload,
  // Student ID
  handleStudentID,
  studentIDName,
  handle_Close_StudentID,
  StudentID_Modal,
  handle_StudentID_Modal,
  studentID,
  handle_StudentID_Upload,
  handleSubmit,
  // Reference 
  handleReference,
  referenceName,
  handle_Close_Reference,
  Reference_Modal,
  handle_Reference_Modal,
  reference,
  handle_Reference_Upload,
 
}) => {
  
  const dispatch = useDispatch()
	useEffect(() => {		
		// console.log('test')
		}, []) 
	
  return (
    <Container fluid>
      <div className='pb-5' style={{paddingTop:'30px'}}>
        <h1 style={{
            fontFamily: 'AGaramond-regular',
            fontSize: '64px',
            letterSpacing: '-5px',
          }}
          >Documents</h1>
          <p>
            Easily upload all the documents required by the institute. 
            See what you need to do below for a smooth and speedy admission.
          </p>
          <Row>
            <Col>
                <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'230px'}}>
                  <div className='d-flex justify-content-start'>
                    <Badge pill bg="secondary">Required</Badge>{' '}
                  </div>
                  <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                  <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    
                      <Card.Subtitle >O Levels </Card.Subtitle>
                      
                      {/* {bcf_passport_path && <p className='f-flex justify-content-center mt-3'>{bcf_passport_path.split("/")[1]}</p>} */}
                      { olevelName && <p className='f-flex justify-content-center mt-3'>{olevelName.split("/")[1]}</p>}  
                      {!olevelName&&olevel.name && <p className='f-flex justify-content-center mt-3'>{olevel.name}</p>}
                    </div>                
                    {
                    olevel.name
                    ? 
                    <Button disabled={olevelName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Olevel_Upload}>Submit</Button>
                    :
                    <Button disabled={olevelName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Olevel_Modal}>Upload</Button>
                    }
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'230px'}}>
                  <div className='d-flex justify-content-start'>
                    <Badge pill bg="secondary">Required</Badge>{' '}
                  </div>
                  <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                  <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    
                      <Card.Subtitle >A levels</Card.Subtitle>
                      
                      {/* {bcf_passport_path && <p className='f-flex justify-content-center mt-3'>{bcf_passport_path.split("/")[1]}</p>} */}
                      { alevelName && <p className='f-flex justify-content-center mt-3'>{alevelName.split("/")[1]}</p>}  
                      {!alevelName&&alevel.name && <p className='f-flex justify-content-center mt-3'>{alevel.name}</p>}
                    </div>                
                    {
                    alevel.name
                    ? 
                    <Button disabled={alevelName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Alevel_Upload}>Submit</Button>
                    :
                    <Button disabled={alevelName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Alevel_Modal}>Upload</Button>
                    }
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'230px'}}>
                  <div className='d-flex justify-content-start'>
                    <Badge pill bg="secondary">Required</Badge>{' '}
                  </div>
                  <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                  <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    
                      <Card.Subtitle >Application Form </Card.Subtitle>
                      
                      {/* {bcf_passport_path && <p className='f-flex justify-content-center mt-3'>{bcf_passport_path.split("/")[1]}</p>} */}
                      { applicationName && <p className='f-flex justify-content-center mt-3'>{applicationName.split("/")[1]}</p>}  
                      {!applicationName&&application.name && <p className='f-flex justify-content-center mt-3'>{application.name}</p>}
                    </div>                
                    {
                    application.name
                    ? 
                    <Button disabled={applicationName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Application_Upload}>Submit</Button>
                    :
                    <Button disabled={applicationName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Application_Modal}>Upload</Button>
                    }
                  </Card.Body>
                </Card>
              </Col>
             
         </Row>
         <Row>
             <Col>
                <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'230px'}}>
                  <div className='d-flex justify-content-start'>
                    <Badge pill bg="secondary">Required</Badge>{' '}
                  </div>
                  <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                  <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <Card.Subtitle >Reference letter</Card.Subtitle>
                      {/* {bcf_passport_path && <p className='f-flex justify-content-center mt-3'>{bcf_passport_path.split("/")[1]}</p>} */}
                       { referenceName && <p className='f-flex justify-content-center mt-3'>{referenceName.split("/")[1]}</p>}  
                      {!referenceName&&reference.name && <p className='f-flex justify-content-center mt-3'>{reference.name}</p>}
                    </div>                
                    {
                    reference.name
                    ? 
                    <Button disabled={referenceName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Reference_Upload}>Submit</Button>
                    :
                    <Button disabled={referenceName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Reference_Modal}>Upload</Button>
                    }
                  </Card.Body>
                </Card>
              </Col> 
              <Col>
                <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'230px'}}>
                  <div className='d-flex justify-content-start'>
                    <Badge pill bg="secondary">Required</Badge>{' '}
                  </div>
                  <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                  <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <Card.Subtitle >Student ID</Card.Subtitle>
                      {/* {bcf_passport_path && <p className='f-flex justify-content-center mt-3'>{bcf_passport_path.split("/")[1]}</p>} */}
                       { studentIDName && <p className='f-flex justify-content-center mt-3'>{studentIDName.split("/")[1]}</p>}  
                      {!studentIDName&&studentID.name && <p className='f-flex justify-content-center mt-3'>{studentID.name}</p>}
                    </div>                
                    {
                    studentID.name
                    ? 
                    <Button disabled={studentIDName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_StudentID_Upload}>Submit</Button>
                    :
                    <Button disabled={studentIDName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_StudentID_Modal}>Upload</Button>
                    }
                  </Card.Body>
                </Card>
              </Col> 
         </Row>
         
         <Modal show={Olevel_Modal} onHide={handle_Close_Olevel}>
            <Modal.Header closeButton>
              <Modal.Title style={{display:'flex', gap:'10px', alignItems:'center'}}>
                O levels Copy
                <Badge pill bg="secondary" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'30px'}}>Required</Badge>{' '}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Please keep in mind that we need a document that is...
              </p>
              <ul>
                <li>Clear</li>
                <li>Valid(not expired)</li>
                <li>Address Page(if available)</li>
              </ul>
            </Modal.Body>
            <Modal.Footer style={{border:'1px solid grey', borderRadius:'20px', margin:'10px', display:'flex', justifyContent:'center'}}>
              <input variant="secondary" name= 'passport' type="file" onChange={(e) => handleOlevel(e)} />
            </Modal.Footer>
          </Modal>
          <Modal show={Application_Modal} onHide={handle_Close_Application}>
            <Modal.Header closeButton>
              <Modal.Title style={{display:'flex', gap:'10px', alignItems:'center'}}>
                Application Form Copy
                <Badge pill bg="secondary" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'30px'}}>Required</Badge>{' '}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Please keep in mind that we need a document that is...
              </p>
              <ul>
                <li>Clear</li>
                <li>Valid(not expired)</li>
                <li>Address Page(if available)</li>
              </ul>
            </Modal.Body>
            <Modal.Footer style={{border:'1px solid grey', borderRadius:'20px', margin:'10px', display:'flex', justifyContent:'center'}}>
              <input variant="secondary" name= 'passport' type="file" onChange={(e) => handleApplication(e)} />
            </Modal.Footer>
          </Modal>
          <Modal show={Alevel_Modal} onHide={handle_Close_Alevel}>
            <Modal.Header closeButton>
              <Modal.Title style={{display:'flex', gap:'10px', alignItems:'center'}}>
                A level Copy
                <Badge pill bg="secondary" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'30px'}}>Required</Badge>{' '}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Please keep in mind that we need a document that is...
              </p>
              <ul>
                <li>Clear</li>
                <li>Valid(not expired)</li>
                <li>Address Page(if available)</li>
              </ul>
            </Modal.Body>
            <Modal.Footer style={{border:'1px solid grey', borderRadius:'20px', margin:'10px', display:'flex', justifyContent:'center'}}>
              <input variant="secondary" name= 'passport' type="file" onChange={(e) => handleAlevel(e)} />
            </Modal.Footer>
          </Modal>
          <Modal show={Reference_Modal} onHide={handle_Close_Reference}>
            <Modal.Header closeButton>
              <Modal.Title style={{display:'flex', gap:'10px', alignItems:'center'}}>
                Reference letter Copy
                <Badge pill bg="secondary" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'30px'}}>Required</Badge>{' '}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Please keep in mind that we need a document that is...
              </p>
              <ul>
                <li>Clear</li>
                <li>Valid(not expired)</li>
                <li>Address Page(if available)</li>
              </ul>
            </Modal.Body>
            <Modal.Footer style={{border:'1px solid grey', borderRadius:'20px', margin:'10px', display:'flex', justifyContent:'center'}}>
              <input variant="secondary" name= 'passport' type="file" onChange={(e) => handleReference(e)} />
            </Modal.Footer>
          </Modal>
          <Modal show={StudentID_Modal} onHide={handle_Close_StudentID}>
            <Modal.Header closeButton>
              <Modal.Title style={{display:'flex', gap:'10px', alignItems:'center'}}>
                StudentID Copy
                <Badge pill bg="secondary" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'30px'}}>Required</Badge>{' '}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Please keep in mind that we need a document that is...
              </p>
              <ul>
                <li>Clear</li>
                <li>Valid(not expired)</li>
                <li>Address Page(if available)</li>
              </ul>
            </Modal.Body>
            <Modal.Footer style={{border:'1px solid grey', borderRadius:'20px', margin:'10px', display:'flex', justifyContent:'center'}}>
              <input variant="secondary" name= 'passport' type="file" onChange={(e) => handleStudentID(e)} />
            </Modal.Footer>
          </Modal>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'space-between', marginTop:40 , marginRight:30 }}>
            {
              alevel.name && olevel.name && application.name && reference.name && studentID.name
            ?
              <Link to='#'>
              <Button variant='outline-dark' size="lg" style={{borderRadius:'20px'}}  onClick={()=> {                    
                  handleSubmit()
                }} >Submit</Button>
              </Link>
            :
                <></>
            }
          </div>
      </div>
    </Container>
  )
}

export default Universitydocs