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
  
  <Col id="bg-switch" dismissible variant="danger">
  <div className="container">
    <div class="row">
       <Col id="text-switch" className="mx-auto my-auto bg-transparent">
        <h1 >About us.</h1>
        <p >Presented in this audiovisual medium is a card representing nineteen U.S. dollars’ worth of virtual currency usable only in the popular video game of the Battle Royale genre created and developed by Epic Games, Fortnite. My inquiry is this: whom among you would find it desirable to acquire such an item as this? I assure you, also, that I intend to depart with the article in question. You must remember to distribute this video elsewhere! Lastly, to those jesters among us who intend to stir strife in these comments for purposes of personal humor and satisfaction, be precarious as to prevent yourself from being banished and forbidden from participating therein.</p>
        </Col>
      <div class="col-sm text-justify d-flex flex-column" style={{  height: '100vh'}}>
        <div class="my-auto">
          <a href="https://blucksy.com/" target="_blank" rel="noopener noreferrer" className="about-link">
            <h1 id="oliver-tag" class="my-auto text-center p-2 mx-auto" onMouseEnter={e => {
              if (!oliverOrTomas || oliverOrTomas == null) { 
                document.getElementById("face-over").src=tomasOliver;
                document.getElementById("face-under").src=oliver;
                document.getElementById("bg-switch").style.backgroundColor = '#CE8147';
                document.getElementById("text-switch").style.color = '#fff';
                document.getElementById("tomas-tag").style.color = '#fff';
                document.getElementById("tomas-tag").style.backgroundColor = '';
                document.getElementById("oliver-tag").style.color = '#CE8147';
                document.getElementById("oliver-tag").style.backgroundColor = '#F2F2F2';
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
            <h1 id="tomas-tag" class="my-auto text-center p-2 mx-auto" onMouseEnter={e => {
              if (oliverOrTomas || oliverOrTomas == null) { 
                document.getElementById("face-over").src=oliverTomas;
                document.getElementById("face-under").src=tomas;
                document.getElementById("bg-switch").style.backgroundColor = '#88292F';
                document.getElementById("text-switch").style.color = '#fff';
                document.getElementById("oliver-tag").style.color = '#fff';
                document.getElementById("oliver-tag").style.backgroundColor = '';
                document.getElementById("tomas-tag").style.color = '#88292F';
                document.getElementById("tomas-tag").style.backgroundColor = '#F2F2F2';
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