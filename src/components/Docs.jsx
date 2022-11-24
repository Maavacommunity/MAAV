import { useState,useEffect } from 'react'
import { docsAction } from '../actions/docs'
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
const Docs = ({
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
  // Identity document
  handleIdentity,
  identityName,
  handle_Close_Identity,
  Identity_Modal,
  handle_Identity_Modal,
  identity,
  handle_Identity_Upload,
  // Father ID
  handleFatherID,
  fatherIDName,
  handle_Close_FatherID,
  FatherID_Modal,
  handle_FatherID_Modal,
  fatherID,
  handle_FatherID_Upload,
   // Course COmpleteion
   handleCertificate,
   certificateName,
   handle_Close_Certificate,
   Certificate_Modal,
   handle_Certificate_Modal,
   certificate,
   handle_Certificate_Upload,
   // Applicant's photo
   handlePhoto,
   photoName,
   handle_Close_Photo,
   Photo_Modal,
   handle_Photo_Modal,
   photo,
   handle_Photo_Upload,

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
              <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'300px'}}>
                <div className='d-flex justify-content-start'>
                  <Badge pill bg="secondary">Required</Badge>{' '}
                </div>
                <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Card.Title >Academic Transcript</Card.Title>
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
              <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'300px'}}>
                <div className='d-flex justify-content-start'>
                  <Badge pill bg="secondary">Required</Badge>{' '}
                </div>
                <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Card.Title >Application form</Card.Title>
                    <Card.Subtitle >Application form</Card.Subtitle>
                    
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
              <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'300px'}}>
                <div className='d-flex justify-content-start'>
                  <Badge pill bg="secondary">Required</Badge>{' '}
                </div>
                <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Card.Title >Identity document</Card.Title>
                    <Card.Subtitle >Identity document</Card.Subtitle>
                    
                    {/* {bcf_passport_path && <p className='f-flex justify-content-center mt-3'>{bcf_passport_path.split("/")[1]}</p>} */}
                    { identityName && <p className='f-flex justify-content-center mt-3'>{identityName.split("/")[1]}</p>}  
                    {!identityName&&identity.name && <p className='f-flex justify-content-center mt-3'>{identity.name}</p>}

                  </div>                
                  {
                  identity.name
									? 
									<Button disabled={identityName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Identity_Upload}>Submit</Button>
									:
									<Button disabled={identityName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Identity_Modal}>Upload</Button>
                  }
                </Card.Body>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col>
              <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'300px'}}>
                <div className='d-flex justify-content-start'>
                  <Badge pill bg="secondary">Required</Badge>{' '}
                </div>
                <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Card.Title >Father ID</Card.Title>
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
              <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'300px'}}>
                <div className='d-flex justify-content-start'>
                  <Badge pill bg="secondary">Required</Badge>{' '}
                </div>
                <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Card.Title >Course Completion Certificate</Card.Title>
                    <Card.Subtitle >Course Completion Certificate</Card.Subtitle>
                    
                    {/* {bcf_passport_path && <p className='f-flex justify-content-center mt-3'>{bcf_passport_path.split("/")[1]}</p>} */}
                    { certificateName && <p className='f-flex justify-content-center mt-3'>{certificateName.split("/")[1]}</p>}  
                    {!certificateName&&certificate.name && <p className='f-flex justify-content-center mt-3'>{certificate.name}</p>}

                  </div>                
                  {
                  certificate.name
									? 
									<Button disabled={certificateName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Certificate_Upload}>Submit</Button>
									:
									<Button disabled={certificateName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Certificate_Modal}>Upload</Button>
                  }
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='striped-tabled-with-hover mt-5 py-3 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px', height:'300px'}}>
                <div className='d-flex justify-content-start'>
                  <Badge pill bg="secondary">Required</Badge>{' '}
                </div>
                <Card.Img variant="top" src="/assets/images/common-file-text-info.4b1bedfc.svg" style={{width:'32px',margin:'auto'}} />
                <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Card.Title >Applicant's Photo</Card.Title>
                    <Card.Subtitle >Applicant's Photo</Card.Subtitle>
                    
                    {/* {bcf_passport_path && <p className='f-flex justify-content-center mt-3'>{bcf_passport_path.split("/")[1]}</p>} */}
                    { photoName && <p className='f-flex justify-content-center mt-3'>{photoName.split("/")[1]}</p>}  
                    {!photoName&&photo.name && <p className='f-flex justify-content-center mt-3'>{photo.name}</p>}

                  </div>                
                  {
                  photo.name
									? 
									<Button disabled={photoName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Photo_Upload}>Submit</Button>
									:
									<Button disabled={photoName} variant='outline-dark' style={{borderRadius:'20px'}} onClick={handle_Photo_Modal}>Upload</Button>
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
                Application Copy
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

          <Modal show={Identity_Modal} onHide={handle_Close_Identity}>
            <Modal.Header closeButton>
              <Modal.Title style={{display:'flex', gap:'10px', alignItems:'center'}}>
                Identity Copy
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
              <input variant="secondary" name= 'passport' type="file" onChange={(e) => handleIdentity(e)} />
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

          <Modal show={Certificate_Modal} onHide={handle_Close_Certificate}>
            <Modal.Header closeButton>
              <Modal.Title style={{display:'flex', gap:'10px', alignItems:'center'}}>
                Certificate Copy
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
              <input variant="secondary" name= 'passport' type="file" onChange={(e) => handleCertificate(e)} />
            </Modal.Footer>
          </Modal>

          <Modal show={Photo_Modal} onHide={handle_Close_Photo}>
            <Modal.Header closeButton>
              <Modal.Title style={{display:'flex', gap:'10px', alignItems:'center'}}>
                Photo Copy
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
              <input variant="secondary" name= 'passport' type="file" onChange={(e) => handlePhoto(e)} />
            </Modal.Footer>
          </Modal>

          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'space-between', marginTop:40 , marginRight:30 }}>
          {
            transcript.name && application.name && identity.name && fatherID.name && certificate.name && photo.name
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

export default Docs