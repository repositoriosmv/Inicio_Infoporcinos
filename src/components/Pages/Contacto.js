import React from "react";
import ReactDOM from "react-dom";
import animateScrollTo from 'animated-scroll-to';

//Css
import "../../css/content-style.css";

//Bootstrap

import { Container, Col, Row, Form, Button } from "react-bootstrap";
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

//images and icons

import mailinfo from "../../icons/mail.svg";
import phoneinfo from "../../icons/phone.svg";

// import TimeLine from "../../components/TimeLine.js";

class Contacto extends React.Component {
  bottomClick() {
    animateScrollTo(0);
  }
  render() {
    return (
      <div>
        <NavbarTest />
        <WhiteMenu />

        <div className="home-styles">
          <div className="container-fluid fondop5">
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
                <Col className="item-fluid">
                  {" "}
                  <div class="circulo3">
                    <img class="iconos" src={phoneinfo} />
                  </div>
                  <div class="contenido">
                    <p className="titulos">Teléfonos</p>
                    <span class="text">+574 1234 567 | +574 1234 567</span>
                  </div>
                </Col>
                <Col className="item-fluid">
                  <div class="circulo3">
                    <img class="iconos" src={phoneinfo} />
                  </div>
                  <div class="contenido">
                    <p className="titulos">Horario de Atención</p>
                    <span class="text">
                      8:00 a.m - 12:00 p.m. | 2:00 p.m - 6:00 p.m <br /> Lunes a
                      Viernes
                    </span>
                  </div>
                </Col>
                <Col className="item-fluid">
                  {" "}
                  <div class="circulo3">
                    <img class="iconos" src={mailinfo} />
                  </div>
                  <div class="contenido">
                    <p className="titulos">Correo Electrónico</p>
                    <span class="text">
                      info@infoporcinos.com <br />
                      info@mercadeo-virtual.com
                    </span>
                  </div>
                </Col>
              </Row>
            </container-fluid>
          </Col>

          <Col md={2} />
        </Row>
        <Row className="p-4">
          <Col md={6} className="p-4">
            <div className="text-left">
              <p className="p-0 t6">
                ¿Dudas o Sugerencias?
                <br />
                <span className="t5p2 h3 font-weight-bold">
                  Ponte en Contacto con Nosotros
                </span>
              </p>
            </div>
            <div className="t6 text-left">
              <Row>
                <Col>
                  <Form>
                    <Form.Group controlId="formBasicName">
                      <Form.Label />
                      <Form.Control type="name" placeholder="Nombre" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label />
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox" />
                  </Form>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Text />
                      <Form.Control type="text" placeholder="Motivo" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox" />
                  </Form>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        as="textarea"
                        rows="3"
                        placeholder="Escriba su mensaje…"
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </div>
            <Button className="Button rounded-pill">Enviar</Button>
          </Col>
          <Col md={6} className="p-4">
            <div className="t6 text-left">
              <div className="text-left">
                <span className="t5p2 h3 font-weight-bold">_</span>
                <p className="p-0 t6">
                  ¿Está interesado en adquirir la plataforma?
                  <br />
                  <span className="t5p2 h3 font-weight-bold">
                    ¿Cómo unirme a Infoporcinos?
                  </span>
                </p>
                <Button className="Button rounded-pill">Ver más</Button>
              </div>
            </div>
            <div className="t6 text-left">
              <div className="text-left">
                <span className="t5p2 h3 font-weight-bold">_</span>
                <p className="p-0 t6">
                  Soporte en Línea
                  <br />
                  <span className="t5p2 h3 font-weight-bold">
                    ¿Tiene algún problema con la Plataforma?
                  </span>
                </p>
                <Button className="Button rounded-pill">Chat Soporte</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="foot p-4">
          <Col md={8} className="p-4 mx-auto">
            <div className="text-center">
              <p className="p-0 t6">
                Nuevas aplicaciones, actualizaciones constantes y el mejor
                soporte
                <br />
                <span className=" h2 font-weight-bold">
                  Siempre listos para mejorar
                  <span className="t5p2 h2 font-weight-bold">
                    {" "}
                    nuestros servicios
                  </span>{" "}
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Button className="Button mx-auto">Ver más</Button>
            </div>
          </Col>
        </Row>
        <Footer bottomClick={this.bottomClick}/>
      </div>
    );
  }
}
export default Contacto;
