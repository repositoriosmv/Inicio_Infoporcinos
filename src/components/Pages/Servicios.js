import React from "react";

//Css
import "../../css/content-style.css";

//Bootstrap

import { Container, Col, Row, Button } from "react-bootstrap";
import {
  MDBCarouselInner,
  MDBContainer,
  MDBCarouselItem,
  MDBView,
  MDBCarousel
} from "mdbreact";

//Components
import NavbarTest from "../menu.js";
import Footer from "../Footer.js";
import WhiteMenu from "../whitemenu.js";

class Servicios extends React.Component {
  render() {
    return (
      <div>
        <NavbarTest />
        <WhiteMenu />

        <div className="container-fluid fondop3">
          <Col md={12} lg={12} sm={6}>
            <p className="titulop10">
              Nuestros<span className="containert titulop11">Servicios</span>
            </p>
          </Col>
        </div>

        <div
          className="bg-light mx-auto w-75 p-4"
          style={{ marginTop: "-40px", borderRadius: "10px" }}
        >
          <Row className="divsnp-4">
            <Col
              md={8}
              className="mx-auto d-flex flex-column justify-content-center py-4"
            >
              <div className="t5p2 text-center py-2 h3 font-weight-bold">
                Servicios a tu disposición
              </div>
              <div className="t6p2 text-center">
                Proveemos una solución que facilitará y permitirá el control
                total de cada proceso. Integrando su negocio y a sus clientes
                con un solo clic, desde cualquier dispositivo para todos los
                usuarios.
              </div>
            </Col>
          </Row>

          <Row className="p-4">
            <Col md={6} className="p-4">
              <div className="text-left">
                <p className="p-0 t6">
                  Siempre en búsqueda de facilitar y optimizar
                  <br />
                  <span className="titulo5p2 h3 font-weight-bold">
                    Los Procesos relacionados al sector Porcino
                  </span>
                </p>
              </div>
              <div className="t6 text-left py-3">
                Las nuevas tecnologías de información y la informática han
                transformado las bases y estructuras de los modelos de negocios
                y de las economías de los países. Estos cambios fundamentales
                también cambian las condiciones, oportunidad y valoración de las
                maneras de hacer negocios y sus rentabilidades. <br />
                <br />
                <a style={{ fontWeight: "bold" }}>
                  {" "}
                  El Mercado de la Carne también ha cambiado.
                </a>
                Se viene en un proceso de cambios fundamentales desde cómo se
                vende una Animal en Pie, hasta cómo se abastecen las Grandes
                Superficies, Industria y Carnicerías de Barrio. <br /> <br />{" "}
                Por este motivo buscamos innovar el Mercado, y desarrollar
                aplicaciones{" "}
                <a style={{ color: "#DD9835", fontWeight: "bold" }}>
                  {" "}
                  que estén siempre a tu alcance.
                </a>
              </div>

              <Button className="Button">Ver más</Button>
            </Col>

            <Col md={6} className="p-4">
              <div>

                <ul style={{ color: "#DD9835", fontWeight: "bold" }}  >
                  <li>Adele</li>
                  <li>Agnes</li>
                  <li>Billy</li>
                  <li>Bob</li>
                </ul>

              </div>

            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Servicios;
