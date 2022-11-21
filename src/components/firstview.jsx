import React, { useEffect,useState }  from 'react'
import { Card, Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import Sidebar from '../containers/Sidebar'
import fetch from '../helpers/methods'

const alertTexts = [
  'Basic information about your identity.',
  'Basic details',
  'Easily upload all the documents required.',
]

const FirstView = () => {
  const [progressValue, setProgressValue] = useState(0);
  const _alertData = useSelector((state) => state.sidebar)
  return (
    <div className='welcome_back' style={{paddingTop:'20px'}}>
      <div className='wrapper'>
        <h1 className='h1' style={{fontFamily: 'AGaramond-regular'}}>Welcome back</h1>
        <p style={{ maxWidth: '671px', fontSize: '14px'}}>
          Ready to continue? All your progress has been saved automatically, so you can easily pick up where you left off.</p>
        <div className='center-section'>
          <div className='left-block'>
          <div className='progress'>
              <CircularProgressbarWithChildren
                value={progressValue}
                styles={buildStyles({
                  textColor: "red",
                  pathColor: "#65CCBC",
                })}
                className='progress-bar'
              >
                <img src='/assets/images/house-heart.1f206df2.svg'/>
              </CircularProgressbarWithChildren>
            </div>
            <div className='text-bar'>
              <div className='subtext1'>
              {/* <span>{progressValue}%</span>closer to your home financing */}
              </div>
              
            </div>
          </div>
          <div className='right-block'>
            {
              _alertData.map((item, idx)=>{
                return (
                  <div key={idx} className='item'>
                    <div className='item-wrapper'>
                      <div className='left-text'>
                        <img
                          src={item.imgurl}
                          className={`${item.check ? 'checked-img' : 'uncheck-img'}`}
                          style={{ width: '22px'}}/>
                        {item.check ? 
                          <img
                            className={`check-img`}
                            src='/assets/images/check-circle-1.2f883aa2.svg'
                          /> : <></>
                        }
                      </div>
                      <div className='right-text'>
                        <div className='subtext1'>{item.name}</div>
                        <div className='subtext'>{alertTexts[idx]}</div>
                      </div>
                    </div>
                    <Link to={`/${item.name}`} style={{textDecoration:'none'}}>
                      <button className={`${item.check ? 'done' : 'todo'}`}>
                        {
                          item.check ? 'Done' : 'To-do'
                        }
                      </button>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Row className='d-flex justify-content-end mt-3' style={{float:'right'}}>
          <Link to='/profile' 
            style={{
              textDecoration: 'none'
            }}>
            <Button variant='primary'
              className="d-flex justify-content-center align-items-center rounded-4"
              style={{minWidth:'150px'}}
            
            >
              Continue
            </Button>
          </Link>
        </Row>
      </div>
    </div>
  )
}

export default FirstView;