import { useState,useEffect } from 'react'
import { collegedocsAction } from '../actions/collegedocs'
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
const Collegedocs = ({
  //Transcript 
  handleTranscript,
  transcriptName,
  handle_Close_Transcript,
  Transcript_Modal,
  handle_Transcript_Modal,
  transcript,
  handle_Transcript_Upload,
  // Application Form
  handleApplication,
  applicationName,
  handle_Close_Application,
  Application_Modal,
  handle_Application_Modal,
  application,
  handle_Application_Upload,
  // Father ID
  handleFatherID,
  fatherIDName,
  handle_Close_FatherID,
  FatherID_Modal,
  handle_FatherID_Modal,
  fatherID,
  handle_FatherID_Upload,
  // Student ID
  handleStudentID,
  studentIDName,
  handle_Close_StudentID,
  StudentID_Modal,
  handle_StudentID_Modal,
  studentID,
  handle_StudentID_Upload,
  handleSubmit,
 
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
                    
                      <Card.Subtitle >Academic Transcript</Card.Subtitle>
                      
                      {/* {bcf_passport_path && <p className='f-flex justify-content-center mt-3'>{bcf_passport_path.split("/")[1]}</p>} */}
                      { transcriptName && <p className='f-flex justify-content-center mt-3'>{transcriptName.split("/")[1]}</p>}  
                      {!transcriptName&&transcript.name && <p className='f-flex justify-content-center mt-3'>{transcript.name}</p>}
                    </div>                
                    {
                    transcript.name
                    ? 
                    <Button disabled={transcriptName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Transcript_Upload}>Submit</Button>
                    :
                    <Button disabled={transcriptName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Transcript_Modal}>Upload</Button>
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
              <Col>
                <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'230px'}}>
                  <div className='d-flex justify-content-start'>
                    <Badge pill bg="secondary">Required</Badge>{' '}
                  </div>
                  <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                  <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    
                      <Card.Subtitle >Father ID</Card.Subtitle>
                      
                      {/* {bcf_passport_path && <p className='f-flex justify-content-center mt-3'>{bcf_passport_path.split("/")[1]}</p>} */}
                      { fatherIDName && <p className='f-flex justify-content-center mt-3'>{fatherIDName.split("/")[1]}</p>}  
                      {!fatherIDName&&fatherID.name && <p className='f-flex justify-content-center mt-3'>{fatherID.name}</p>}
                    </div>                
                    {
                    fatherID.name
                    ? 
                    <Button disabled={fatherIDName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_FatherID_Upload}>Submit</Button>
                    :
                    <Button disabled={fatherIDName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_FatherID_Modal}>Upload</Button>
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
         <Modal show={Transcript_Modal} onHide={handle_Close_Transcript}>
            <Modal.Header closeButton>
              <Modal.Title style={{display:'flex', gap:'10px', alignItems:'center'}}>
                Transcript Copy
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
              <input variant="secondary" name= 'passport' type="file" onChange={(e) => handleTranscript(e)} />
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
          <Modal show={FatherID_Modal} onHide={handle_Close_FatherID}>
            <Modal.Header closeButton>
              <Modal.Title style={{display:'flex', gap:'10px', alignItems:'center'}}>
                FatherID Copy
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
              <input variant="secondary" name= 'passport' type="file" onChange={(e) => handleFatherID(e)} />
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
              transcript.name && application.name && fatherID.name && studentID.name
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

export default Collegedocs