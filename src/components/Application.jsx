import react,{useState} from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Card
  } from 'react-bootstrap'
  import { Link } from 'react-router-dom'
  
  const Application = ({
    school,
    setSchool,
    handleSchool,
  }) => {
   
   // const [school, setSchool] = useState(false);
    const [college, setCollege] = useState(false);
    const [university, setUniversity] = useState(false);
    console.log(school)

    


    return (
      <Container fluid>
        <Row className='d-flex flex-column justify-content-center align-items-center' style={{marginTop:'150px'}}>
          <Row>
            <h2
              className='d-flex flex-column justify-content-center align-items-center'
              style={{
                fontFamily: 'AGaramond'
              }}
            >
              What are you looking for?
            </h2>
          </Row>
          <Row className='d-flex justify-content-center align-items-center mt-5 gap-3'>
            <Col lg={3}>
              <Link to='/list'
               style={{
                textDecoration: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
              }} 
              >
                <Card
                  className='card-hover d-flex justify-content-center align-items-center border-0'
                  style={{
                    maxWidth: '150px',
                    width: '100%',
                    height: '150px',
                  }}
                 >
                  <img style={{width: '35%', marginBottom: '5px'}} src='/assets/images/school.png'/>
                  School
                </Card>
              </Link>
            </Col>
            <Col lg={3}>
              <Link to='#' style={{
                textDecoration: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
              }}
              onClick={() => {
                setCollege(true)
              }}>
                <Card
                  className='card-hover d-flex justify-content-center align-items-center border-0'
                  style={{
                    maxWidth: '150px',
                    width: '100%',
                    height: '150px',
                  }}
                >
                  <img style={{width: '40%'}} src='/assets/images/college.png'/>
                 College
                </Card>
              </Link>
            </Col>
            <Col lg={3}>
              <Link to='#' style={{
                textDecoration: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
              }}
               onClick={() => {
                setUniversity(true)
              }}
           >
                <Card
                  className='card-hover d-flex justify-content-center align-items-center border-0'
                  style={{
                    maxWidth: '150px',
                    width: '100%',
                    height: '150px',
                  }}
                  >
                  <img style={{width: '40%'}} src='/assets/images/university.png'/>
                  University
                </Card>
              </Link>
            </Col>
          </Row>
        </Row>
      </Container>  
    )
  }
  
  export default Application