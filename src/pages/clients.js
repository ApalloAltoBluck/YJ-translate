import React from "react"
import { Row, Col, Alert, Image, Container } from 'react-bootstrap/'
import Header from "./templates/header"
import who from "../images/clients/who.png"
import varfaj from "../images/clients/varfaj.png"
import he from "../images/clients/happyendings.png"
import rough from "../images/clients/roughsimmons.png"
import wrbb from "../images/clients/wrbb.png"
import maker from "../images/clients/makegroup.png"

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