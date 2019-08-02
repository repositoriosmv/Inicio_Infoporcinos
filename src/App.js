import React from 'react';
import NavbarTest from './components/menu.js';
import Footer from './components/Footer.js';
import '../src/css/content-style.css';
import { Container, Col, Row } from "react-bootstrap";
import pigs from '../src/images/1.png';
import logo from '../src/icons/logo.svg';
import desktop from '../src/images/Mockup-Mac.png';
import { Navbar, Nav } from 'react-bootstrap';
import key from '../src/icons/key.svg';
import process from '../src/icons/process.svg';
import pass from '../src/icons/pass.svg';
import pen from '../src/icons/pen.svg';
import check from '../src/icons/check.svg';
import user from '../src/icons/user.svg';
import update from '../src/icons/update.svg';
import WhiteMenu from './components/whitemenu.js';


class App extends React.Component {

  render() {
    return (

      <div >

        <NavbarTest />
        <WhiteMenu />


        <Row>
          <Col md={12}>
            <img className="pigsinicio" src={pigs} />

            <div className="t1">APROVECHA AL MÁXIMO TODOS TUS RECURSOS </div>
            <div className="t2">El mejor sistema de <br />
              información  </div>
            <div className="t3">para tu negocio</div>




          </Col>


        </Row>
        <Row>
          <Col md={4}>1 of 3</Col>
          <Col md={4}>2 of 3</Col>
          <Col md={4}>3 of 3</Col>
        </Row>


        <Footer />
      </div>


    );
  }

}

export default App;
