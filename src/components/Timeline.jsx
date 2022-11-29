import react,{useState, useEffect} from 'react'
import { Formik } from 'formik'
import { Auth } from 'aws-amplify'
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    Form,
    Modal
  } from 'react-bootstrap'
  import { Link } from 'react-router-dom'
  
  const Timeline = ({
    post,
    setPost,
    Post_Modal,
    handle_Close_Post,
    handlePost,
    handle_Post_Modal,
    handleText,
    text,
    setText,
    handleChange,
    file,
    setFile
  
  }) => {
  const userpost=JSON.parse(localStorage.getItem('post'))
  //const userimg=JSON.parse(localStorage.getItem('image'))

    useEffect(() => {
        document.body.classList.add('login-layout')
        return () => {
          document.body.classList.remove('login-layout')
        }
      }, [])
    return (
        <Container fluid
        style={{marginTop:'-40px'}}>
          <Row style={{display: 'flex', justifyContent: 'center',}}>
            <Col style={{
            position: 'relative',
            maxWidth: '800px',
            width: '100%',
            padding: '10px',
            
          }}>
            <h2> Timeline </h2>
          <Col
          style={{
           
            width: '100%',
            padding: '10px',
            backgroundColor:'rgba(227,227,227,255)'
          }}
        >
        <Form noValidate>
              <div style={{
                width: '100%',
                // height: '64px',
                backgroundColor:'white',
                padding:'10px',
                justifyContent:'center',
                boxShadow:'rgb(191 191 191) 0px 4px 10px',
                // height:'35px'
              }}
              className='left-block'>
               <Row className='px-3 w-100  rounded-5'
                  onClick={
                    handle_Post_Modal
                  }><Col lg={1}>
                    <img src="/assets/images/user2.png" alt="user" 
                    style={{
                        width:'30px',
                        height:'30px',
                        marginTop:'5px'
                    }}/>
                    </Col>
                    <Col>
                <p 
                className='px-3 w-100  rounded-5 hover'
                style={{
                    fontSize: '15px',
                    cursor:'pointer',
                    border:'1px lightgrey solid',
                    padding:'10px',
                    marginBottom:'0px'
                  }}>

                    type message
                </p>
                </Col>
                    </Row>
                <Row
                className='text-center'
                style={{padding:'5px',
                height:'35px'}}>
                <Col
                style={{
                    borderRight:'1px solid black',
                    height:'35px'
                }}>
                  <p
                  style={{marginTop:'6px', cursor:'pointer'}}
                  onClick={
                    handle_Post_Modal
                  }>
                     <img src="/assets/images/write.png"
                    style={{width:'20px', paddingBottom:'0px'}}
                  />
                        &nbsp; Ask 
                  </p>
                </Col>
                <Col>
                  <p style={{marginTop:'6px', cursor:'pointer'}}
                  onClick={
                    handle_Post_Modal
                  }>
                    <img src="/assets/images/faq.png"
                    style={{width:'20px', paddingBottom:'0px'}}
                  />
                        &nbsp;
                     Post 
                   </p>
                </Col>
                </Row>
              </div>
           
              {userpost && userpost.map((post) => (
                
              <div style={{
                width: '100%',
                // height: '64px',
                backgroundColor:'rgb(243, 242, 242)',
                padding:'10px',
                justifyContent:'center',
                //boxShadow:'rgb(191 191 191) 0px 4px 10px',
                marginTop:'10px'
                // height:'35px'
              }}
             >
                <Row className='px-3 w-100  rounded-5'>
                    
                   
                    
                <h5
                style={{
                    padding:'10px',
                    marginBottom:'0px'
                  }}>
                     <img src="/assets/images/user2.png" alt="user" 
                    style={{
                        width:'30px',
                        height:'30px',
                    }}/>
                    &nbsp;
                    Username
                </h5>
                
                    </Row>
                <p>
                    {post.text}
                </p>
                <div
                style={{border:'1px lightgrey solid'}}>
                <img src={post.file} alt="user" 
                style={{
                    width:'100%',
                    
                }}/>
               </div>
              </div>
              ))}
        </Form>
        </Col>
        </Col>
        <Modal show={Post_Modal} onHide={handle_Close_Post}>
            <Modal.Header closeButton>
              <Modal.Title className='modal-dialog-center' style={{display:'flex', gap:'10px',  justifyContent:'center', }}>
                Create Post
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Formik
        //   validationSchema={schema}
          //onSubmit={console.log('')}
          initialValues={{
                     

          }}
        >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
              <Form noValidate>
              <div style={{
                width: '100%',
                // height: '64px',
                backgroundColor:'white',
                padding:'10px',
                justifyContent:'center',
              }}>
                <h4>
                    UserName
                </h4>
                <textarea name="text" id="text" rows={5}
                style={{width:'100%',
                border:'none',
                outline:'none',
                marginLeft:'10px'
               }}
               placeholder="Post Something"
               onChange={
                e => {handleChange(e)
                setText(e.target.value)
                }}>


                </textarea>
              {/* <Form.Control
                placeholder='Type Something'
                type='text'
                style={{border:'none',
                outline: '1px solid transparent',
            }}
            
              /> */}

              </div>
       </Form>
        ) }
            </Formik>
            </Modal.Body>
            <Modal.Footer style={{border:'1px solid lightgrey',padding:'5px', borderRadius:'20px', margin:'10px', display:'flex', justifyContent:'center'}}>
              <input variant="secondary" name= 'file' type="file" onChange={(e) => handlePost(e)} />
              
            </Modal.Footer>
            <Modal.Footer style={{border:'none', margin:'10px', display:'flex', padding:'0px',justifyContent:'center'}}>
              <Button style={{width:'100%'}} onClick={handleText}>
                Post
              </Button>
            </Modal.Footer>
          </Modal>
         
          </Row>
      </Container >
      )
      
    
  }
  
  export default Timeline;