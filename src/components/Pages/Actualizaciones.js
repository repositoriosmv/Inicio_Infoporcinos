import React from "react";
import ReactDOM from "react-dom";

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
import Sliderpages from "../../components/Sliderpages.js";

//images and icons

import mailinfo from "../../icons/mail.svg";
import phoneinfo from "../../icons/phone.svg";

// import TimeLine from "../../components/TimeLine.js";

class Actualizaciones extends React.Component {
  render() {
    return (
      <div>
        <NavbarTest />
        <WhiteMenu />

        <div className="container-fluid fondop6">
          <Col md={12} lg={12} sm={6}>
            <p className="titulohistorial">
              Historial de{" "}
              <span className="containeractualizaciones tituloactualizaciones">
                Actualizaciones
              </span>
            </p>
          </Col>
        </div>
        <Col md={12} lg={12} sm={12}>
        <Sliderpages/>
        </Col>
        
        <Row className="foot p-4">
          <Col md={8} className="p-4 mx-auto">
            <div className="text-center">
              <p className="p-0 t6">
                ¿Dudas o sugerencias?<br />
                <span className=" h2 font-weight-bold">
                  Contáctanos a través de nuestro 
                  <span className="t5p2 h2 font-weight-bold">
                    {" "}
                    Soporte en línea
                  </span>{" "}
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-center style-foot">
              <Button className="Button mx-auto">Iniciar Chat</Button>
            </div>
          </Col>
        </Row>

        <Footer />
      </div>
    );
  }
}

export default Actualizaciones;
