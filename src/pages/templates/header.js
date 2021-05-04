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

          <h1><a href="/olto-dev/clients" className="text-white text-decoration-none"><div className="">CLIENTS</div></a></h1>




          <div className="fixed-bottom">
          </div>

          <>

            <Container>

              <Modal className="contact_form" show={show} onHide={handleClose} animation={false}  >
                <Container className="formModal">
                  

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