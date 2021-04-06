import React from "react"

import { Alert, Col, Row, Container, Modal, Button } from 'react-bootstrap/';
import { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';


function SmallHeader(props) {

  const [state, handleSubmit] = useForm("mvodogzk");


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* ROW ONE */}


      <Col sm={3} dismissible variant="danger" id="sidebar-tag" className="sidebar-content w-10">

        <Container>
          <br class="tohide"></br>
          <h1><a href="/" className="logo-redirect"><div className="logo slatt">OLTO CONCEPTS</div></a></h1>
          <br></br>

          <div className="tohide">
          <h1><a href="/clients" className="text-white text-decoration-none"><div className="slatt">CLIENTS</div></a></h1>
          <h1><a href="/portfolio" className="text-white text-decoration-none"><div className="slatt">PORTFOLIO</div></a></h1>
          <h1><a href="/about" className="text-white text-decoration-none"><div className="slatt">ABOUT</div></a></h1>
          <h1><a className="text-white text-decoration-none"><div className="slatt" onClick={handleShow}>CONTACT</div></a></h1>
          </div>


          <div className="fixed-bottom">
            <p id="bottom-text" className="text-white">© OLTO CONCEPTS, 2021</p>
          </div>

          <>

            <Container>

              <Modal className="contact_form" show={show} onHide={handleClose} animation={false}  >
                <Container className="formModal">
                  <form onSubmit={handleSubmit} >
                    <h1 className="text-white py-2">CONTACT US</h1>
                    <input
                      id="email"
                      type="email"
                      name="email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    /><br></br>
                    <textarea
                      id="message"
                      name="message"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    /><br></br>
                    <h1><div onClick={handleClose} type="submit" disabled={state.submitting} className="logo-redirect logo slatt">
                      SUBMIT</div></h1>
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
export default SmallHeader