import React from "react"
import Helmet from "react-helmet"
import {Alert, Col, Row, Container} from 'react-bootstrap/';

import { withPrefix } from "gatsby"


function header(props) {
  return (
  <>
    <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
    </Helmet>


    <Col md={3}dismissible variant="danger" className="sidebar-content w-10">

      <Container>
        <br></br>
      <h1><a href="/" className="text-decoration-none logo-redirect"><div className="slatt logo">OLTO CONCEPTS</div></a></h1>
      <br></br>
      
      <h1><a href="/clients" className="text-decoration-none text-white"><div className="slatt">CLIENTS</div></a></h1>
      <h1><a href="/" className="text-decoration-none text-white"><div className="slatt">PORTFOLIO</div></a></h1>
      <h1><a href="/about" className="text-decoration-none text-white"><div className="slatt">ABOUT</div></a></h1>
      <h1><div className="text-white slatt">CONTACT</div></h1>

      

      <div className="fixed-bottom">
      <p className="text-white">© OLTO Concepts, 2021</p>
      </div>


    
     
      </Container>

    </Col>
    <div class="form-popup-bg">
    <div class="form-container">
      <button id="btnCloseForm" class="close-button">X</button>
    <h1>Contact Us</h1>
    <p>For more information. Please complete this form.</p>
    <form action="">
      <div class="form-group">
        <label for="">Name</label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="">Company Name</label>
        <input class="form-control" type="text" />
      </div>
      <div class="form-group">
        <label for="">E-Mail Address</label>
        <input class="form-control" type="text" />
      </div>
      <div class="form-group">
        <label for="">Phone Number</label>
        <input class="form-control" type="text" />
        </div>
        <button>Submit</button>
      </form>
        </div>
      </div>
    
</>
  )
}
export default header