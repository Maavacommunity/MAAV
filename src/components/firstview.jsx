import React, { useEffect,useState }  from 'react'
import { Card, Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Sidebar from '../containers/Sidebar'
import fetch from '../helpers/methods'

const alertTexts = [
  'Basic information about your identity and residency status.',
  'Details about your financial situation to help us calculate your loan amount.',
  'Information about the property you’re buying and the type of financing you need.',
  'Calculate your estimated monthly payments based on the loan amount.',
  'See personalized recommendations for the best offers based on the info you provided.',
  'Easily upload all the documents required by the bank.',
  'Review and finalize the application to send to the bank of your choice.',
  'Once the bank issues your pre-approval, you can download it from here.',
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
            
                <img src='/assets/images/house-heart.1f206df2.svg'/>
              
            </div>
            <div className='text-bar'>
              <div className='subtext1'>
                 </div>
              <div className='subtext2'>
                The more you progress, the higher the number gets! Your progress is saved automatically.
              </div>
            </div>
          </div>
          <div className='right-block'>
            
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