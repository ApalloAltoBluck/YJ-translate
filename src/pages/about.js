import React from "react"
import {Row, Col, Alert} from 'react-bootstrap/'
import Header from "./templates/header"

function AboutPage(props) {
  return (<Row className="sidebar">
      <Header></Header>
      <Col>
      <Col dismissible variant="danger">
    <Alert.Heading>THE ABOUT PAGE</Alert.Heading>
    <p>
        
    </p>
  </Col> 
      </Col>
      </Row>
  )
}
export default AboutPage