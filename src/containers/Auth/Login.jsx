import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { Auth } from 'aws-amplify'
import LoginComponent from '../../components/Auth/Login'


const Login = () =>{
    const navigate = useNavigate()
    const [password, setPassword ]= useState('')
    const [email, setEmail] = useState('')
    const [username , setUsername] = useState('')
    const onLogin = async () => {
        try {
            console.log(email); 
            navigate('/confirmation')
            let result = await Auth.signIn(email);
            window.cognitoUser=result  
          } 
          catch (error) {     
            try {
              await Auth.signUp({
                username: email,
                password: email,
                attributes: {
                  email: email, 
                }          
              });
              let result=await Auth.signIn(email);
              window.cognitoUser=result
              navigate('/confirmation')
            }
            catch(ex) {
              console.log(ex);
            }
          }
        }
    return (
        <LoginComponent
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
        onLogin={onLogin}
        />
    )
}

export default Login