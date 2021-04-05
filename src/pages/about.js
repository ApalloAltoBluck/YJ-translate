import React from "react"
import { Row, Col, Alert, Container} from 'react-bootstrap/'
import Header from "./templates/header"
import tomas from "../images/tomas.jpg"
import oliver from "../images/oliver.jpg"
import tomasOliver from "../gif/tomas-oliver.gif"
import oliverTomas from "../gif/oliver-tomas.gif"
import frontBack from "../gif/backandforth.gif"


function AboutPage(props) {
  var oliverOrTomas = null;
  return (<Row className="sidebar">

  <Header></Header>
  
  <Col dismissible variant="danger">
  <div className="container">
    <div class="row">
       <Col className="p-4 text-white mx-auto my-auto content-box">
       <h1 className="logo">OLTO CONCEPTS</h1>
        <p>is a creative partnership between Oliver Buckley and Tomás Carlson, working with brands and artists alike to provide creative tech solutions for every clients specific needs and aesthetics.</p>
        </Col>
      <div class="col-sm text-justify d-flex flex-column" style={{  height: '100vh'}}>
        <div class="my-auto">
          <a href="https://blucksy.com/" target="_blank" rel="noopener noreferrer" className="about-link">
            <h1 id="oliver-tag" class="content-box text-white my-auto text-center p-2 mx-auto" onMouseEnter={e => {
              if (!oliverOrTomas || oliverOrTomas == null) { 
                document.getElementById("face-over").src=tomasOliver;
                document.getElementById("face-under").src=oliver;
                document.getElementById("tomas-tag").style.animation = '';
                document.getElementById("oliver-tag").style.animation = 'clientHover 2s ease-out 0s infinite alternate none';
                oliverOrTomas = true;
                setTimeout(() => { document.getElementById("face-over").src=""; }, 960);
              }
            }}>
              Oliver Buckley
            </h1>
          </a>
          <div class="face-imgs ml-a">
            <img id="face-under" class="my-auto mx-auto p-2" src={frontBack}></img>
            <img id="face-over" class="my-auto mx-auto p-2" src={frontBack}></img>
          </div>
          <a href="https://tomascarlson.com/" target="_blank" rel="noopener noreferrer" className="about-link">
            <h1 id="tomas-tag" class="content-box text-white my-auto text-center p-2 mx-auto" onMouseEnter={e => {
              if (oliverOrTomas || oliverOrTomas == null) { 
                document.getElementById("face-over").src=oliverTomas;
                document.getElementById("face-under").src=tomas;
                document.getElementById("oliver-tag").style.animation = '';
                document.getElementById("tomas-tag").style.animation = 'clientHover 2s ease-out 0s infinite alternate none';
                oliverOrTomas = false;
                setTimeout(() => { document.getElementById("face-over").src=""; }, 960);
              }
            }}>
              Tomás Carlson
          </h1>
          </a>
        </div>
      </div>
    </div>
  </div>
  </Col>

  </Row>)
}


export default AboutPage