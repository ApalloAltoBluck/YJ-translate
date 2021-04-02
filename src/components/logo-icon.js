import React from "react"
 
import {Alert, Col, Image, Container} from 'react-bootstrap/';



function logoicon(props) {
  return (
    <>
   {/* ROW ONE */}
    <Col>
   <div className="client-box d-flex align-content-center"><Image src = {props.link} fluid></Image></div>
   </Col>
   
   </>
  )
}

export default logoicon