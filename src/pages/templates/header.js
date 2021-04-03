import React from "react"
 
import {Alert, Col, Row, Container, Modal, Button} from 'react-bootstrap/';
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


    <Col md={3}dismissible variant="danger" className="sidebar-content w-10">

      <Container>
        <br></br>
      <h1><a href="/" className="logo-redirect"><div className="logo slatt">OLTO CONCEPTS</div></a></h1>
      <br></br>
      
      <h1><a href="/clients" className="text-white text-decoration-none"><div className="slatt">CLIENTS</div></a></h1>
      <h1><a href="/" className="text-white text-decoration-none"><div className="slatt">PORTFOLIO</div></a></h1>
      <h1><a href="/about" className="text-white text-decoration-none"><div className="slatt">ABOUT</div></a></h1>
      <h1><a href="/" className="text-white text-decoration-none"><div className="slatt" onClick={handleShow}>CONTACT</div></a></h1>

      

      <div className="fixed-bottom">
      <p className="text-white">© OLTO Concepts, 2021</p>
      </div>

<>


      <Modal className="contact_form" show={show} onHide={handleClose} animation={false}  >

      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button onClick={handleClose} type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
       
      </Modal>
    </>
    
     
      </Container>

    </Col>

</>
  )
}
export default Header