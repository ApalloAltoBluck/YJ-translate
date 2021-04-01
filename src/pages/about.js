import React from "react"
import {Row, Col, Alert, Container} from 'react-bootstrap/'
import Header from "./templates/header"

function AboutPage(props) {
  return (<Row className="sidebar">
      <Header></Header>
      <Col>
      <Container>

      <Col dismissible variant="danger">
    <Alert.Heading>THE ABOUT PAGE</Alert.Heading>
    <p>
        
    </p>
  </Col> 
  </Container>

      </Col>

      </Row>
  )
}
export default AboutPage