import React from "react"
import { Row, Col, Alert, Container} from 'react-bootstrap/'
import Header from "./templates/header"
import tomas from "../images/tomas.jpg"
import oliver from "../images/oliver.jpg"
import tomasOliver from "../gif/tomas-oliver.gif"
import oliverTomas from "../gif/oliver-tomas.gif"

function AboutPage(props) {

  return (<Row className="sidebar">

  <Header></Header>
  
  <Col dismissible variant="danger">
  <div className="container">
  <img id="face-back" src={tomas}></img>

    <div class="row">
      <div onMouseEnter={() => document.getElementById("face-back").src=tomasOliver} 
      onMouseLeave={() => document.getElementById("face-back").src=oliver} class="col-sm text-justify d-flex flex-column mx-n5" style={{  height: '100vh'}}>
        <h1 class="text-center mt-auto text-white p-2 mx-auto" style={{ top: 0, bottom: 0, position: 'relative', backgroundColor: '#000' }}>
          Oliver Buckley
        </h1>
        <br></br>
      </div>
      <div onMouseEnter={() => document.getElementById("face-back").src=oliverTomas}
      onMouseLeave={() => document.getElementById("face-back").src=tomas}  class="col-sm text-justify d-flex flex-column mx-n5" style={{  height: '100vh'}}>
        <h1 class="text-center mt-auto text-white p-2 mx-auto" style={{ top: 0, bottom: 0, position: 'relative', backgroundColor: '#000' }}>
          Tomás Carlson
        </h1>
        <br></br>
      </div>
    </div>
  </div>
  </Col>

  </Row>)
}


export default AboutPage