import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { sidebar_check } from '../actions/sidebar'
import fetch from '../helpers/methods';
import { useToasts } from 'react-toast-notifications'
import {
  Badge,
  Button,
} from 'react-bootstrap';

// const sideData = [
//   'profile','income','property','payment','offers','docs','application','approval'
// ]

const Sidebar = ({
    logout,
}) => {
  useEffect(() => {
    console.log('check')
    
    }, [])
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const sidebar = useRef()
  //const _progressValue = useSelector((state) => state.progress.progressValue)
  const sideData = useSelector((state) => state.sidebar)
  // const [sideData, setSideData] = useState(useSelector((state) => state.sidebar))

  const router = (idx, check = 2, url = '') => {
    // if(check) {
      navigate(`/${url}`)
    // }
  }

  const handleClose = () => {
    sidebar.current.style.width = '0px';
  }
  const handleOpen = () => {
    sidebar.current.style.width = '122px';
  }

  return (
    <Fragment>
      <div id="re-sidebar-container"  className='sidebar-show' onClick={handleOpen}>
        <img src='/assets/images/sidemenu2.png'/>
      </div>
      <div ref={sidebar} className='sidebar-container'>
        <div className='sidebar-wrapper'>
          <div className={`item home-link ${location.pathname === '/overview' ? 'white-bg' : ''}`} onClick={()=>{router(1, true, 'overview')}}>
            <div>
              <img src='/assets/images/home.svg'  style={{ width: '22px'}}/>
            </div>
          </div>
          <div style={{ fontSize: '11px', color: '#666666' }}>Steps:</div>
          {
            sideData.map((item, idx) => {
              return (
                <div key={idx} className={`item ${`/${item.name}` === location.pathname ? 'white-bg' : ''}`} onClick={()=> {router(idx+2, item.check, item.name)}}>
                  <img
                    src={item.imgurl}
                    className={`${item.check ? 'imgOp' : ''}`}
                    style={{ width: '22px'}}/>
                  <div className={`${item.check ? 'colorOp' : ''}`}>
                    {item.name}
                  </div>
                  {item.check ? 
                    <img
                      className='check-img'
                      src='/assets/images/check-circle-1.2f883aa2.svg'
                    /> 
                    : <></>
                  }
                </div>
              )
            })
          }  
          
           <div className='log-out-img' onClick={()=>logout()}>
           <Link to="/"
           >  
            <img src='/assets/images/log-out.svg'/>
            </Link> 
          </div>
              
        </div>
        {/* <div className='sub-text'>
          <img src='/assets/images/persent.svg'/>
          <div className='text1'>{_progressValue}%</div>
          <div>closer to your home financing</div>
        </div> */}
        <div className='sidebar-close'>
          <img style={{
            width: '80%',
            borderRadius: '50%',
            }} src='/assets/images/left.png'
            onClick={handleClose}
          />
        </div>
      </div>

    </Fragment>
  )
}

export default Sidebar;