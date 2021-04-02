import React from "react"
 
import {Alert, Col, Image, Container} from 'react-bootstrap/';



function logoicon(props) {
  return (
    <>
   {/* ROW ONE */}
   <div className="client-box d-flex align-items-center justify-content-center m-2"><Image src = {props.link} fluid></Image></div>   
   </>
  )
}

export default logoicon