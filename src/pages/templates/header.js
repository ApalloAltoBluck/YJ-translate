import React from "react"

import { Alert, Col, Row, Container, Modal, Button } from 'react-bootstrap/';
import { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';


function Header(props) {

  const [state, handleSubmit] = useForm("mvodogzk");


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* ROW ONE */}


      <Col md={3} dismissible variant="danger" className="sidebar-content w-10">

        <Container>
          <br></br>
          <h1><a href="/olto-dev/" className="logo-redirect"><div className="logo slatt">OLTO CONCEPTS</div></a></h1>
          <br></br>

          <h1><a href="/olto-dev/clients" className="text-white text-decoration-none"><div className="slatt">CLIENTS</div></a></h1>
          <h1><a href="/olto-dev/portfolio" className="text-white text-decoration-none"><div className="slatt">PORTFOLIO</div></a></h1>
          <h1><a href="/olto-dev/about" className="text-white text-decoration-none"><div className="slatt">ABOUT</div></a></h1>
          <h1><a className="text-white text-decoration-none"><div className="slatt" onClick={handleShow}>CONTACT</div></a></h1>



          <div className="fixed-bottom">
            <p className="text-white">© OLTO CONCEPTS, 2021</p>
          </div>

          <>

            <Container>

              <Modal className="contact_form" show={show} onHide={handleClose} animation={false}  >
                <Container className="formModal">
                  <form onSubmit={handleSubmit} >
                    
                    <h1 className="text-white py-2">CONTACT US</h1>
                    
                    <Container>
                    <Row className="">
                    <h3 class="text-white">Email: </h3><input
                      id="email"
                      type="email"
                      name="email"
                      className="formLabel"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    
                    </Row>

                    
                    </Container>


                    <Row>
                    <br></br>
                    <br></br>
                    <Container>
                    

                    <textarea className="h-100 w-100"
                      id="message"
                      name="message"
                      
                    > 
                    



                    </textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="Content-Form"
                    />
                    </Container>

                    </Row>
                    <br></br>

                    <div onClick={handleClose} type="submit" disabled={state.submitting} className="logo-redirect logo slatt">
                      <h1 className="submit-button">
                      SUBMIT</h1></div>
                      

                  </form>

                </Container>
              </Modal>
            </Container>

          </>


        </Container>

      </Col>

    </>
  )
}
export default Header