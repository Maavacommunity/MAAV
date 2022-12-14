import axios from 'axios'
import { Auth } from 'aws-amplify'

const fetch= async () => {
  let session = await Auth.currentSession();
  const response = axios({
    method: 'GET',
    headers:{'x-access-token':session.accessToken.jwtToken},
    url: 'https://30ihetuol1.execute-api.eu-west-2.amazonaws.com/test/getUserData',    
    crossDomain: true
  });
  
  return response
} 

export default fetch