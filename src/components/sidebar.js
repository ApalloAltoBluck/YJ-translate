import React from "react";

import {Button, Alert, Col, Row, Container} from 'react-bootstrap/';
  export default function sidebar(props) {
    return <Container><div className="h-25 bg-dark"><h1>{props.title}</h1></div></Container>
  }