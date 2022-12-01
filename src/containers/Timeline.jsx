import React, { useState , useEffect } from 'react'
import axios from 'axios'
//import md5 from 'md5'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import TimelineComponent from '../components/Timeline'
import { timeline } from '../actions/timeline'
import { useNavigate} from 'react-router-dom'
import { Auth } from 'aws-amplify'
const Timeline = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [Post_Modal, set_Post_Modal] = useState(false);
  const [post, setPost] = useState(false);
  const [postName, setPostName] = useState('');
  const [text, setText] = useState('');
  const [textarray, setTextarray] = useState([]);
  const [filearray, setFilearray] = useState([]);
  const [file, setFile] = useState('');
  const [flag, setFlag] = useState(true)
  const handle_Close_Post = () => {set_Post_Modal(false)};
  const handle_Post_Modal = async() => {
    setPost(true)
    try {      
      let session = await Auth.currentSession();
      let username=await session.getIdToken().payload.sub;
     if (username){
      set_Post_Modal(true)
      console.log(post)
     }
     else{
      navigate('/login')
     }
    }
    
    catch(err){
      console.log('err',err)
      navigate('/login')
    }
  }
  useEffect(()=>{
    if (post === true){
      //console.log(school)
      localStorage.setItem('postStatus', JSON.stringify(post))
     
    }
   
  },[post])

  
  
  const handlePostUpload = async (e) => {
    console.log("handlePostUpload")
    console.log(post.name)
    //localStorage.setItem('Post', post.name)
  }

  const handlePost = (e) => {    
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const timeline = () => {    
    setFlag(true)
    navigate('/')
  }
  const Account = async() => {    
    setFlag(false)
    try {      
      let session = await Auth.currentSession();
      let username=await session.getIdToken().payload.sub;
     if (username){
      navigate('/overview')
     }
     else{
      navigate('/login')
     }
    }
    
    catch(err){
      console.log('err',err)
      navigate('/login')
    }
    
  }
  
  const handleText = ()=>
  {
    console.log(file.name)
    set_Post_Modal(false)
    textarray.unshift({
      text: text,
      file: file})
    
    localStorage.setItem('post', JSON.stringify(textarray))
    //localStorage.setItem('image',JSON.stringify(filearray))
    console.log(text)
  navigate('/')
  }

  return (
    <TimelineComponent 
    handlePost={handlePost}
    handle_Close_Post={handle_Close_Post}
    Post_Modal={Post_Modal}
    handle_Post_Modal={handle_Post_Modal}
    post={post}
    setPost={setPost}
    handleText={handleText}
    text={text}
    setText={setText}
    file={file}
    setFile={setFile}
    Account={Account}
    flag={flag}
    setFlag={setFlag}
    timeline={timeline}
    />
  )
}

export default Timeline