import React from "react"
 
import {Alert, Col, Image, Container} from 'react-bootstrap/';



function logoicon(props) {
  return (
    <>
   {/* ROW ONE */}
    <Col>
   <div className="h-25 bg-dark"><Image src = {props.link} fluid></Image></div>
   </Col>
   
   </>
  )
}

export default logoicon