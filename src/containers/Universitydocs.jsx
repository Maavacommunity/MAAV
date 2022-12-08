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
  const [Alevel_Modal, set_Alevel_Modal] = useState(false);
  const [alevel, setAlevel] = useState('');
  const [alevelName, setAlevelName] = useState('');
  const handle_Close_Alevel = () => {set_Alevel_Modal(false)};
  const handle_Alevel_Modal = () => {set_Alevel_Modal(true)};

  const [Olevel_Modal, set_Olevel_Modal] = useState(false);
  const [olevel, setOlevel] = useState('');
  const [olevelName, setOlevelName] = useState('');
  const handle_Close_Olevel = () => {set_Olevel_Modal(false)};
  const handle_Olevel_Modal = () => {set_Olevel_Modal(true)};

  const [Application_Modal, set_Application_Modal] = useState(false);
  const [application, setApplication] = useState('');
  const [applicationName, setApplicationName] = useState('');
  const handle_Close_Application = () => {set_Application_Modal(false)};
  const handle_Application_Modal = () => {set_Application_Modal(true)};

  const [Reference_Modal, set_Reference_Modal] = useState(false);
  const [reference, setReference] = useState('');
  const [referenceName, setReferenceName] = useState('');
  const handle_Close_Reference = () => {set_Reference_Modal(false)};
  const handle_Reference_Modal = () => {set_Reference_Modal(true)};

  const [StudentID_Modal, set_StudentID_Modal] = useState(false);
  const [studentID, setStudentID] = useState('');
  const [studentIDName, setStudentIDName] = useState('');
  const handle_Close_StudentID = () => {set_StudentID_Modal(false)};
  const handle_StudentID_Modal = () => {set_StudentID_Modal(true)};
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
	const navigate = useNavigate();

  const handleAlevelUpload = async (e) => {
    console.log("handleAlevelUpload")
    // console.log(alevel.name)
    // localStorage.setItem('alevel', alevel.name)
    setLoading(true)
    try {      
      let session = await Auth.currentSession();
      let username=await session.getIdToken().payload.sub;
      let path=username + "/" + "uni_alevel.jpg"
      const result = await Storage.put(path, alevel, {
        contentType: alevel.type,
      });
      setAlevelName(path);
     }
   
    catch(err){
      console.log('err',err)
    }
    setLoading(false)
  }

  const handleAlevel = (e) => {    
    setAlevel(e.target.files[0])
    set_Alevel_Modal(false);
  }
  
  const handleOlevelUpload = async (e) => {
    console.log("handleOlevelUpload")
    // console.log(olevel.name)
    // localStorage.setItem('olevel', olevel.name)
    setLoading(true)
    try {      
      let session = await Auth.currentSession();
      let username=await session.getIdToken().payload.sub;
      let path=username + "/" + "uni_olevel.jpg"
      const result = await Storage.put(path, olevel, {
        contentType: olevel.type,
      });
      setOlevelName(path);
     }
   
    catch(err){
      console.log('err',err)
    }
    setLoading(false)
  }

  const handleOlevel = (e) => {    
    setOlevel(e.target.files[0])
    set_Olevel_Modal(false);
  }

  const handleApplicationUpload = async (e) => {
    console.log("handleApplicationUpload")
    // console.log(application.name)
    // localStorage.setItem('application', application.name)
    setLoading(true)
    try {      
      let session = await Auth.currentSession();
      let username=await session.getIdToken().payload.sub;
      let path=username + "/" + "uni_application.jpg"
      const result = await Storage.put(path, application, {
        contentType: application.type,
      });
      setApplicationName(path);
     }
   
    catch(err){
      console.log('err',err)
    }
    setLoading(false)
  }

  const handleApplication = (e) => {    
    setApplication(e.target.files[0])
    set_Application_Modal(false);
  }
  const handleReferenceUpload = async (e) => {
    console.log("handleReferenceUpload")
    // console.log(reference.name)
    // localStorage.setItem('reference', reference.name)
    setLoading(true)
    try {      
      let session = await Auth.currentSession();
      let username=await session.getIdToken().payload.sub;
      let path=username + "/" + "uni_reference.jpg"
      const result = await Storage.put(path, reference, {
        contentType: reference.type,
      });
      setReferenceName(path);
     }
   
    catch(err){
      console.log('err',err)
    }
    setLoading(false)
  }

  const handleReference = (e) => {    
    setReference(e.target.files[0])
    set_Reference_Modal(false);
  }

  
  const handleStudentIDUpload = async (e) => {
    console.log("handleStudentIDUpload")
    // console.log(studentID.name)
    // localStorage.setItem('studentId', studentID.name)
    setLoading(true)
    try {      
      let session = await Auth.currentSession();
      let username=await session.getIdToken().payload.sub;
      let path=username + "/" + "uni_studentID.jpg"
      const result = await Storage.put(path, studentID, {
        contentType: studentID.type,
      });
      setStudentIDName(path);
     }
   
    catch(err){
      console.log('err',err)
    }
    setLoading(false)
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
      handleAlevel={handleAlevel}
      handle_Close_Alevel={handle_Close_Alevel}
      Alevel_Modal={Alevel_Modal}
      handle_Alevel_Modal={handle_Alevel_Modal}
      handle_Alevel_Upload={handleAlevelUpload}
      setAlevel={setAlevel}
      alevelName={alevelName}
      alevel={alevel}

      handleOlevel={handleOlevel}
      handle_Close_Olevel={handle_Close_Olevel}
      Olevel_Modal={Olevel_Modal}
      handle_Olevel_Modal={handle_Olevel_Modal}
      handle_Olevel_Upload={handleOlevelUpload}
      setOlevel={setOlevel}
      olevelName={olevelName}
      olevel={olevel}

      handleApplication={handleApplication}
      handle_Close_Application={handle_Close_Application}
      Application_Modal={Application_Modal}
      handle_Application_Modal={handle_Application_Modal}
      handle_Application_Upload={handleApplicationUpload}
      setApplication={setApplication}
      applicationName={applicationName}
      application={application}

      handleReference={handleReference}
      handle_Close_Reference={handle_Close_Reference}
      Reference_Modal={Reference_Modal}
      handle_Reference_Modal={handle_Reference_Modal}
      handle_Reference_Upload={handleReferenceUpload}
      setReference={setReference}
      referenceName={referenceName}
      reference={reference}

      handleStudentID={handleStudentID}
      handle_Close_StudentID={handle_Close_StudentID}
      StudentID_Modal={StudentID_Modal}
      handle_StudentID_Modal={handle_StudentID_Modal}
      handle_StudentID_Upload={handleStudentIDUpload}
      setStudentID={setStudentID}
      studentIDName={studentIDName}
      studentID={studentID}
      loading={loading}

  
      handleSubmit={handleSubmit}
    />
  )
}

export default Universitydocs