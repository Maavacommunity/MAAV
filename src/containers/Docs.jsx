import { useState } from 'react'
import DocsComponent from '../components/Docs';
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
  const dispatch = useDispatch();
	const navigate = useNavigate();
  
  const handleTranscriptUpload = async (e) => {
    console.log("handlePassportUpload")
    console.log(transcript.name)
    localStorage.setItem('userDocs', transcript.name)
  }

  const handleTranscript = (e) => {    
    setTranscript(e.target.files[0])
    set_Transcript_Modal(false);
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
      handleSubmit={handleSubmit}
    />
  )
}

export default Docs