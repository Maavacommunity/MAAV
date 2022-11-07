import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from '../../components/Auth/Login'
import { Auth } from 'aws-amplify'

const Login = () =>{
    const navigate = useNavigate()
    const [password, setPassword ]= useState('')
    const [email, setEmail] = useState('')
    const [username , setUsername] = useState('')
    const onLogin = async () => {
        console.log(email); 
        let result = await Auth.signIn(email);
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