import React, { Fragment, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify'
import { useToasts } from 'react-toast-notifications';
import SidebarComponent from '../components/Sidebar'

const Sidebar = () => {
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const logOut = async() => {
    try {
      await Auth.signOut();
      addToast('You have logged out successfully', {
        appearance: 'success',
        autoDismiss: true
      })
    } catch (error) {
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true
      })
    }
    navigate('/login')
  }

  const [pathname, setPathname] = useState(null);
  const path = useLocation()
  useEffect(() => {
    if(path.pathname === '/login' || path.pathname === '/login' || path.pathname === '/login' || path.pathname === '/confirmation' || path.pathname === '/signup') {
      setPathname(false)
      // setSidebarShow(false)
    } else {
      setPathname(true)
      // setSidebarShow(true)
    }
  }, [path.pathname]);

  return (
   
    <>
      {pathname ? <SidebarComponent logout={logOut}/> : <></>}
    </>
  )
}

export default Sidebar;