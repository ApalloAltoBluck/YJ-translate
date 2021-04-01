import React from "react"
import { Row, Col, Alert, Image, Container } from 'react-bootstrap/'
import Header from "./templates/header"
import who from "../images/WHO.png"
import varfaj from "../images/varfaj.png"
import he from "../images/HE_917.png"
import rough from "../images/rough_simmons.png"
import wrbb from "../images/WRBB.png"
import maker from "../images/make.jpg"

import Logoicon from "../components/logo-icon"


function ClientsPage(props) {

  return (<>
    <Row className="sidebar">
      <Header></Header>
      <Col dismissible variant="danger">

        <Row>
          <Container>
            <Row>
              <Col className="icon-logo">
                <Logoicon link={who} ></Logoicon>
              </Col>
              <Col className="icon-logo">
                <Logoicon link={varfaj}></Logoicon>
              </Col>
              <Col className="icon-logo">
                <Logoicon link={he}></Logoicon>
              </Col>
            </Row>
            <Row>
              <Col className="icon-logo">
                <Logoicon link={rough}></Logoicon>
              </Col>
              <Col className="icon-logo">
                <Logoicon link={wrbb}></Logoicon>
              </Col>
              <Col className="icon-logo">
                <Logoicon link={maker}></Logoicon>
              </Col>
            </Row>
          </Container>
        </Row>
      </Col>
    </Row>
  </>)
}


export default ClientsPage