import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl
} from "react-bootstrap";
import mailinfo from "../icons/mail.svg";
import phoneinfo from "../icons/phone.svg";
import logo from "../icons/logo.svg";

class WhiteMenu extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Row className="margin-navbar">
            <Col md="auto">
              <Nav>
                <div className="logop">
                  <img src={logo} />
                </div>
              </Nav>
            </Col>
            <Col className="items-menu">
              <Form inline>
                <Nav.Link className="item-nav" href="/">Inicio</Nav.Link>
                <Nav.Link className="item-nav" href="/SobreNosotros">Sobre Nosotros</Nav.Link>
                <Nav.Link className="item-nav" href="/Servicios">Servicios</Nav.Link>
                <Nav.Link className="item-nav" href="/PreguntasFrecuentes">Preguntas Frecuentes</Nav.Link>
                <Nav.Link className="item-nav" href="#home">Contacto</Nav.Link>
              </Form>
            </Col>
            <Col md="3" className="container-btn">
                <Col md="auto" className="btn-margin">
                    <Button className="einteresado">Estoy Interesado</Button>
                </Col>

                <Col md="auto" className="btn-margin">
                    <Button className="iniciarses">Iniciar Sesion</Button>
                </Col>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}
export default WhiteMenu;
