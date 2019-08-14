import React from "react";

//Css
import "../../css/content-style.css";

//Bootstrap

import { Container, Col, Row } from "react-bootstrap";
import {
  MDBCarouselInner,
  MDBContainer,
  MDBCarouselItem,
  MDBView,
  MDBCarousel
} from "mdbreact";

//Components
import NavbarTest from "../../components/menu.js";
import Footer from "../../components/Footer.js";
import WhiteMenu from "../../components/whitemenu.js";
import pigs from "../../images/1.png";

class SobreNosotros extends React.Component {
  render() {
    return (
      <div>
        <NavbarTest />
        <WhiteMenu />

        <div class="container-fluid">
          {/* <img className="pigsinicio" src={pigs} /> */}
        </div>

        <Row>
          <Col xs="12" md="2" />

          <Col xs="12" md="8">
            <div>
              <div class="contenido2">
                <div className="t4">Trazabilidad inmediata</div>
                <div className="t5">¿Qué es Infoporcinos?</div>
                <div className="t6">
                  Es una Plataforma de Información que integra, intermedia e
                  informa en Tiempo Real (TR) a las Plantas de <br />
                  Beneficio de Porcinos, Comercializadores, Productores y demás
                  Agentes de la Cadena Productiva de la Carne de <br />
                  Cerdo sobre las condiciones técnicas de calidad de las Canales
                  Calientes Porcinas facilitando la construcción de <br />
                  relaciones comerciales basados en parámetros calidad de cada
                  Canal Porcina evaluada.
                </div>
              </div>
            </div>
          </Col>

          <Col xs="12" md="2" />
        </Row>

        <Row>
          <Col xs="12" md="2" />

          <Col xs="12" md="4">
            <div className="contenido3">
              <div className="t4">Desarrollado por Mercadeo Virtual S.A.</div>
              <div className="t5">¡Evolucionando el Sector Cárnico!</div>
              <div className="t6">
                Somos una organización de servicios de conocimiento e
                información que genera valor <br />
                agregado a los Modelos de Negocio de las empresas, procesos y
                productos para lograr <br />
                una diferenciación competitiva en los negocios y mercados.
              </div>
            </div>
          </Col>

          <Col xs="12" md="4">
            <div />
          </Col>

          <Col xs="12" md="2" />
        </Row>

        <Footer />
      </div>
    );
  }
}

export default SobreNosotros;
