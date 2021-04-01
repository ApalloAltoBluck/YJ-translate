import React from "react"
 
import {Alert, Col, Row, Container} from 'react-bootstrap/';


function header(props) {
  return (
    <>
   {/* ROW ONE */}


    <Col md={3}dismissible variant="danger" className="sidebar-content w-10">

      <Container>
        <br></br>
      <h1 className=" logo">OLTO CONCEPTS</h1>
      <br></br>
      
      <h1><a href="/" className="text-white"><div className="slatt">CLIENTS</div></a></h1>
      <h1 className="text-white"><a href="/" className="text-white"><div className="slatt">PORTFOLIO</div></a></h1>
      <h1 className="text-white"><a href="/about" className="text-white"><div className="slatt">ABOUT</div></a></h1>
      <h1 className="text-white"><a href="/" className="text-white"><div className="slatt">ADRENOCHROME      </div></a></h1>
      <h1 className="text-white"><div className="slatt">CONTACT</div></h1>

      <p>

      <div className="fixed-bottom">
      <h1 className="text-white">CONTACT</h1>;
      </div>

      </p>

     
      </Container>

    </Col>

</>
  )
}
export default header