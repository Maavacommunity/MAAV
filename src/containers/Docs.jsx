import { useState } from 'react'
import DocsComponent from '../components/Docs';
import GradelistComponent from '../components/Gradelist'
import { Auth } from 'aws-amplify'
import axios from 'axios';
import { Storage } from "aws-amplify";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { sidebar_check } from '../actions/sidebar'

const Docs = () => {
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

  const [Identity_Modal, set_Identity_Modal] = useState(false);
  const [identity, setIdentity] = useState('');
  const [identityName, setIdentityName] = useState('');
  const handle_Close_Identity = () => {set_Identity_Modal(false)};
  const handle_Identity_Modal = () => {set_Identity_Modal(true)};

  const [FatherID_Modal, set_FatherID_Modal] = useState(false);
  const [fatherID, setFatherID] = useState('');
  const [fatherIDName, setFatherIDName] = useState('');
  const handle_Close_FatherID = () => {set_FatherID_Modal(false)};
  const handle_FatherID_Modal = () => {set_FatherID_Modal(true)};

  const [Certificate_Modal, set_Certificate_Modal] = useState(false);
  const [certificate, setCertificate] = useState('');
  const [certificateName, setCertificateName] = useState('');
  const handle_Close_Certificate = () => {set_Certificate_Modal(false)};
  const handle_Certificate_Modal = () => {set_Certificate_Modal(true)};

  const [Photo_Modal, set_Photo_Modal] = useState(false);
  const [photo, setPhoto] = useState('');
  const [photoName, setPhotoName] = useState('');
  const handle_Close_Photo = () => {set_Photo_Modal(false)};
  const handle_Photo_Modal = () => {set_Photo_Modal(true)};

  const dispatch = useDispatch();
	const navigate = useNavigate();
  
  const handleTranscriptUpload = async (e) => {
    console.log("handlePassportUpload")
    console.log(transcript.name)
    localStorage.setItem('transcript', transcript.name)
  }

  const handleTranscript = (e) => {    
    setTranscript(e.target.files[0])
    set_Transcript_Modal(false);
  }
  
  const handleApplicationUpload = async (e) => {
    console.log("handlePassportUpload")
    console.log(application.name)
    localStorage.setItem('application', application.name)
  }

  const handleApplication = (e) => {    
    setApplication(e.target.files[0])
    set_Application_Modal(false);
  }

  const handleIdentityUpload = async (e) => {
    console.log("handlePassportUpload")
    console.log(identity.name)
    localStorage.setItem('identity', identity.name)
  }

  const handleIdentity = (e) => {    
    setIdentity(e.target.files[0])
    set_Identity_Modal(false);
  }

  const handleCertificateUpload = async (e) => {
    console.log("handlePassportUpload")
    console.log(certificate.name)
    localStorage.setItem('certificate',certificate.name)
  }

  const handleCertificate = (e) => {    
    setCertificate(e.target.files[0])
    set_Certificate_Modal(false);
  }

  const handleFatherIDUpload = async (e) => {
    console.log("handlePassportUpload")
    console.log(fatherID.name)
    localStorage.setItem('fatherId', fatherID.name)
  }

  const handleFatherID = (e) => {    
    setFatherID(e.target.files[0])
    set_FatherID_Modal(false);
  }

  const handlePhotoUpload = async (e) => {
    console.log("handlePassportUpload")
    console.log(photo.name)
    localStorage.setItem('photo',photo.name)
  }

  const handlePhoto = (e) => {    
    setPhoto(e.target.files[0])
    set_Photo_Modal(false);
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
   
    <DocsComponent 
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

      handleIdentity={handleIdentity}
      handle_Close_Identity={handle_Close_Identity}
      Identity_Modal={Identity_Modal}
      handle_Identity_Modal={handle_Identity_Modal}
      handle_Identity_Upload={handleIdentityUpload}
      setIdentity={setIdentity}
      identityName={identityName}
      identity={identity}

      handleFatherID={handleFatherID}
      handle_Close_FatherID={handle_Close_FatherID}
      FatherID_Modal={FatherID_Modal}
      handle_FatherID_Modal={handle_FatherID_Modal}
      handle_FatherID_Upload={handleFatherIDUpload}
      setFatherID={setFatherID}
      fatherIDName={fatherIDName}
      fatherID={fatherID}

      handleCertificate={handleCertificate}
      handle_Close_Certificate={handle_Close_Certificate}
      Certificate_Modal={Certificate_Modal}
      handle_Certificate_Modal={handle_Certificate_Modal}
      handle_Certificate_Upload={handleCertificateUpload}
      setCertificate={setCertificate}
      certificateName={certificateName}
      certificate={certificate}

      handlePhoto={handlePhoto}
      handle_Close_Photo={handle_Close_Photo}
      Photo_Modal={Photo_Modal}
      handle_Photo_Modal={handle_Photo_Modal}
      handle_Photo_Upload={handlePhotoUpload}
      setPhoto={setPhoto}
      photoName={photoName}
      photo={photo}

      handleSubmit={handleSubmit}
    />
  )
}

export default Docs