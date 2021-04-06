import React, { Component, useEffect, useState } from "react"
import { Link } from "gatsby"
import Carousel from 'react-bootstrap/Carousel'

import Container from 'react-bootstrap/Container';
import SmallHeader from "./templates/smallheader"

import { Button, Alert, Col, Row, Modal } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.css';

import ex1 from "../images/screenshots/1.png"
import ex2 from "../images/screenshots/2.png"
import ex3 from "../images/screenshots/3.jpg"

// markup
function PortfolioPage(props) {
  return (<>
    {/* ROW ONE */}
    <Row className="sidebar">
      <SmallHeader></SmallHeader>
      <Col sm={9} dismissible variant="danger">
        <div className="d-flex flex-column my-auto">
            <Carousel fade className="carousel mx-auto">
              <Carousel.Item>
                <img className="d-block w-100 car-border"
                  src={ex1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 car-border"
                  src={ex2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 car-border"
                  src={ex3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
        </div>
      </Col>
    </Row>
  </>
  )
}

export default PortfolioPage
