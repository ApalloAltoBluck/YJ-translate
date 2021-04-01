import React from "react"
import { Row, Col, Alert, Container} from 'react-bootstrap/'
import Header from "./templates/header"

import Logoicon from "../components/logo-icon"

function ClientsPage(props) {

  return (<>
  <Row className="sidebar">

  <Header></Header>
  <Row>
  <Container> 
     <Row>
    <Col className="icon-logo">
    <Logoicon link='https://preview.redd.it/l6t6kitjuoy31.jpg?auto=webp&s=8585335cc95d06363c960d03867d8e04603ac3cb'></Logoicon>
    </Col>
    <Col className="icon-logo">
    <Logoicon link='https://preview.redd.it/l6t6kitjuoy31.jpg?auto=webp&s=8585335cc95d06363c960d03867d8e04603ac3cb'></Logoicon>
    </Col>
    <Col className="icon-logo">
    <Logoicon link='https://preview.redd.it/l6t6kitjuoy31.jpg?auto=webp&s=8585335cc95d06363c960d03867d8e04603ac3cb'></Logoicon>
    </Col>
    </Row>
    <Row>
    <Col className="icon-logo">
    <Logoicon link='https://preview.redd.it/l6t6kitjuoy31.jpg?auto=webp&s=8585335cc95d06363c960d03867d8e04603ac3cb'></Logoicon>
    </Col>
    <Col className="icon-logo">
    <Logoicon link='https://preview.redd.it/l6t6kitjuoy31.jpg?auto=webp&s=8585335cc95d06363c960d03867d8e04603ac3cb'></Logoicon>
    </Col>
    <Col className="icon-logo">
    <Logoicon link='https://preview.redd.it/l6t6kitjuoy31.jpg?auto=webp&s=8585335cc95d06363c960d03867d8e04603ac3cb'></Logoicon>
    </Col>
    </Row>
  </Container></Row>
  </Row>
  </>)
}


export default ClientsPage