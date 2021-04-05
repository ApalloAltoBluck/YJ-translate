import React from "react"
import { Row, Col, Alert, Container } from 'react-bootstrap/'
import Header from "./templates/header"
import frontBack from "../images/backandforthcolor.gif"


function AboutPage(props) {
  return (<Row className="sidebar">

    <Header></Header>

    <Col dismissible variant="danger">
      <div className="container">
        <div class="text-justify d-flex flex-column" style={{ height: '100vh' }}>
          <div class="my-auto">
            <div class="face-imgs">
              <img class="mx-auto p-2" src={frontBack}></img>
            </div>
            <div className="p-4 about-box text-white mx-auto my-auto content-box">
              <h1 className="logo">OLTO CONCEPTS</h1>
              <p>is a creative partnership between <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://blucksy.com/"><u>Oliver Buckley</u></a> and <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://tomascarlson.com/"><u>Tomás Carlson</u></a>, working with brands and artists alike to provide creative tech solutions for every clients specific needs and aesthetics.</p>
            </div>
          </div>
        </div>
      </div>
    </Col>

  </Row>)
}


export default AboutPage