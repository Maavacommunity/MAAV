import { useState } from 'react'
import UniversitydocsComponent from '../components/Universitydocs';
//import GradelistComponent from '../components/Gradelist'
import { Auth } from 'aws-amplify'
import axios from 'axios';
import { Storage } from "aws-amplify";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { sidebar_check } from '../actions/sidebar'

const Universitydocs = () => {
  const [Transcript_Modal, set_Transcript_Modal] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [transcriptName, setTranscriptName] = useState('');
  const handle_Close_Transcript = () => {set_Transcript_Modal(false)};
  const handle_Transcript_Modal = () => {set_Transcript_Modal(true)};

  const [Application_Modal, set_Application_Modal] = useState(false);
  const [application, setApplication] = useState('');
  const [applicationName, setApplicationName] = useState('');
  const handle_Close_Application = () => {set_Application_Modal(false)};
  const handle_Application_Modal = () => {set_Application_Modal(true)};

  const [FatherID_Modal, set_FatherID_Modal] = useState(false);
  const [fatherID, setFatherID] = useState('');
  const [fatherIDName, setFatherIDName] = useState('');
  const handle_Close_FatherID = () => {set_FatherID_Modal(false)};
  const handle_FatherID_Modal = () => {set_FatherID_Modal(true)};

  const [StudentID_Modal, set_StudentID_Modal] = useState(false);
  const [studentID, setStudentID] = useState('');
  const [studentIDName, setStudentIDName] = useState('');
  const handle_Close_StudentID = () => {set_StudentID_Modal(false)};
  const handle_StudentID_Modal = () => {set_StudentID_Modal(true)};


  const dispatch = useDispatch();
	const navigate = useNavigate();

  const handleTranscriptUpload = async (e) => {
    console.log("handleTranscriptUpload")
    console.log(transcript.name)
    localStorage.setItem('transcript', transcript.name)
  }

  const handleTranscript = (e) => {    
    setTranscript(e.target.files[0])
    set_Transcript_Modal(false);
  }
  
  const handleApplicationUpload = async (e) => {
    console.log("handleApplicationUpload")
    console.log(application.name)
    localStorage.setItem('application', application.name)
  }

  const handleApplication = (e) => {    
    setApplication(e.target.files[0])
    set_Application_Modal(false);
  }
  const handleFatherIDUpload = async (e) => {
    console.log("handleFatherIDUpload")
    console.log(fatherID.name)
    localStorage.setItem('fatherId', fatherID.name)
  }

  const handleFatherID = (e) => {    
    setFatherID(e.target.files[0])
    set_FatherID_Modal(false);
  }

  
  const handleStudentIDUpload = async (e) => {
    console.log("handleStudentIDUpload")
    console.log(studentID.name)
    localStorage.setItem('studentId', studentID.name)
  }

  const handleStudentID = (e) => {    
    setStudentID(e.target.files[0])
    set_StudentID_Modal(false);
  }
 

  const handleSubmit = async (e) => {    
        let session = await Auth.currentSession();        
        const responseCrm = await axios({
        method: 'get',
        headers:{'x-access-token':session.accessToken.jwtToken},
        url: 'https://u1flyn3aqa.execute-api.eu-west-2.amazonaws.com/test/submit_data_crm',
        crossDomain: true
      });
      console.log(responseCrm);
      dispatch(sidebar_check('identity'));
      navigate('/status')
  }

  return (
   
    <UniversitydocsComponent 
      handleTranscript={handleTranscript}
      handle_Close_Transcript={handle_Close_Transcript}
      Transcript_Modal={Transcript_Modal}
      handle_Transcript_Modal={handle_Transcript_Modal}
      handle_Transcript_Upload={handleTranscriptUpload}
      setTranscript={setTranscript}
      transcriptName={transcriptName}
      transcript={transcript}

      handleApplication={handleApplication}
      handle_Close_Application={handle_Close_Application}
      Application_Modal={Application_Modal}
      handle_Application_Modal={handle_Application_Modal}
      handle_Application_Upload={handleApplicationUpload}
      setApplication={setApplication}
      applicationName={applicationName}
      application={application}

      handleFatherID={handleFatherID}
      handle_Close_FatherID={handle_Close_FatherID}
      FatherID_Modal={FatherID_Modal}
      handle_FatherID_Modal={handle_FatherID_Modal}
      handle_FatherID_Upload={handleFatherIDUpload}
      setFatherID={setFatherID}
      fatherIDName={fatherIDName}
      fatherID={fatherID}

      handleStudentID={handleStudentID}
      handle_Close_StudentID={handle_Close_StudentID}
      StudentID_Modal={StudentID_Modal}
      handle_StudentID_Modal={handle_StudentID_Modal}
      handle_StudentID_Upload={handleStudentIDUpload}
      setStudentID={setStudentID}
      studentIDName={studentIDName}
      studentID={studentID}

  
      handleSubmit={handleSubmit}
    />
  )
}

export default Universitydocs