import React from "react";
import ReactDOM from "react-dom";

//Css
import "../../css/content-style.css";

//Bootstrap

import { Container, Col, Row, Button } from "react-bootstrap";
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader
} from "mdbreact";
import { Accordion, AccordionItem } from "react-light-accordion";

//Components
import NavbarTest from "../../components/menu.js";
import Footer from "../../components/Footer.js";
import WhiteMenu from "../../components/whitemenu.js";
import DummyContent from "../../components/DummyContent.js";


import pen from "../../icons/pen.svg";

// import TimeLine from "../../components/TimeLine.js";

class Contacto extends React.Component {
  render() {
    return (
      <div>
        <NavbarTest />
        <WhiteMenu />

        <div className="home-styles">
          <div className="container-fluid fondop2">
            <Col md={12} lg={12} sm={6}>
              <p className="titulop10">
                Datos de
                <span className="containert titulop11">Contacto</span>
              </p>
            </Col>
          </div>
        </div>

        <Row>
          <Col md={2} />

          <Col md={8}>
            <container-fluid text-center>
              <Row className="containertop">
                <Col>
                  {" "}
                  <div class="item-fluid">
                    <div class="circulo2">
                      <img class="iconos" src={pen} />
                    </div>
                    <div class="contenido">
                      <p className="titulos">Teléfonos</p>
                      <span class="text">
                        +574 1234 567 | +574 1234 567
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  {" "}
                  <div class="item-fluid">
                    <div class="circulo2">
                      <img class="iconos" src={pen} />
                    </div>
                    <div class="contenido">
                      <p className="titulos">Horario de Atención</p>
                      <span class="text">
                        8:00 a.m - 12:00 p.m. | 2:00 p.m - 6:00 p.m <br />  Lunes a Viernes
                       
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  {" "}
                  <div class="item-fluid">
                    <div class="circulo2">
                      <img class="iconos" src={pen} />
                    </div>
                    <div class="contenido">
                      <p className="titulos">Correo Electrónico</p>
                      <span class="text">
                        info@infoporcinos.com <br />
                        info@mercadeo-virtual.com
                      </span>
                  
                    </div>
                  </div>
                </Col>
              </Row>
            </container-fluid>
          </Col>

          <Col md={2} />
        </Row>

        <Footer />
      </div>
    );
  }
}
export default Contacto;
