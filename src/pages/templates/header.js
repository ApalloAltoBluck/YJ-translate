import React from "react"
 
import {Alert, Col, Row, Container} from 'react-bootstrap/';


function header(props) {
  return (
    <>
   {/* ROW ONE */}


    <Col md={3}dismissible variant="danger" className="sidebar-content w-10">

      <Container>
        <br></br>
      <h1 className=" logo"><a href="/" className="logo-redirect">OLTO CONCEPTS</a></h1>
      <br></br>
      
      <h1><a href="/clients" className="text-white"><div className="slatt">CLIENTS</div></a></h1>
      <h1 className="text-white"><a href="/" className="text-white"><div className="slatt">PORTFOLIO</div></a></h1>
      <h1 className="text-white"><a href="/about" className="text-white"><div className="slatt">ABOUT</div></a></h1>
      <h1 className="text-white"><div className="slatt">CONTACT</div></h1>

      

      <div className="fixed-bottom">
      <p className="text-white">© OLTO Concepts, 2021</p>
      </div>


    
     
      </Container>

    </Col>

</>
  )
}
export default header