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
    <div class="row">
      <div class="col-sm text-justify d-flex flex-column" style={{  height: '100vh'}}>
        <p class="mx-auto my-auto">Presented in this audiovisual medium is a card representing nineteen U.S. dollars’ worth of virtual currency usable only in the popular video game of the Battle Royale genre created and developed by Epic Games, Fortnite. My inquiry is this: whom among you would find it desirable to acquire such an item as this? I assure you, also, that I intend to depart with the article in question. You must remember to distribute this video elsewhere! Lastly, to those jesters among us who intend to stir strife in these comments for purposes of personal humor and satisfaction, be precarious as to prevent yourself from being banished and forbidden from participating therein.</p>
        <br></br>
      </div>
      <div class="col-sm text-justify d-flex flex-column" style={{  height: '100vh'}}>
        <div class="my-auto">
          <h1 id="oliver-tag" class="my-auto text-center  p-2 mx-auto" onMouseEnter={e => {
            document.getElementById("face-back").src=tomasOliver; document.body.style.backgroundColor = '#FE5D26';
            document.body.style.color = '#fff';
            document.getElementById("tomas-tag").style.color = '#fff';
            document.getElementById("tomas-tag").style.backgroundColor = '';
            document.getElementById("oliver-tag").style.color = '#FE5D26';
            document.getElementById("oliver-tag").style.backgroundColor = '#fff';}}>
            Oliver Buckley
          </h1>
          <img id="face-back" class="my-auto mx-auto p-2" src={tomas}></img>
          <h1 id="tomas-tag" class="my-auto text-center p-2 mx-auto" onMouseEnter={e => {
            document.getElementById("face-back").src=oliverTomas; document.body.style.backgroundColor = '#DE4040';
            document.body.style.color = '#fff';
            document.getElementById("oliver-tag").style.color = '#fff';
            document.getElementById("oliver-tag").style.backgroundColor = '';
            document.getElementById("tomas-tag").style.color = '#DE4040';
            document.getElementById("tomas-tag").style.backgroundColor = '#fff';}}>
            Tomás Carlson
          </h1>
        </div>
      </div>
    </div>
  </div>
  </Col>

  </Row>)
}


export default AboutPage