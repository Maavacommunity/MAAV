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
  handlePassport,
  handleTranscript,
  passportName,
  transcriptName,
  visaName,
  EIDName,
  handle_Close_Passport,
  handle_Close_Transcript,
  Passport_Modal,
  Transcript_Modal,
  handle_Transcript_Modal,
  handle_Passport_Modal,
  passport,
  transcript,
  Visa_Modal,
  handle_Close_Visa,
  handleVisa,
  handle_Transcript_Upload,
  handle_Passport_Upload, 
  handle_Visa_Upload, 
  handle_EID_Upload, 
  handle_Visa_Modal,
  handleSubmit,
  submittedCrm,
  setSubmittedCrm,
  visa,
  EID_Modal,
  handle_Close_EID,
  handleEID,
  EID,
  handle_EID_Modal
}) => {
  
  const dispatch = useDispatch()
	useEffect(() => {		
		console.log('test')
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
          <Row style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Col lg={4} md={4} sm={4}>
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
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'space-between', marginTop:40 , marginRight:30 }}>
          {
            transcript.name
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