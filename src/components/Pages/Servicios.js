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
      <div className="home-styles">
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
          className="mx-auto w-75 p-4"
          style={{ marginTop: "-40px", borderRadius: "10px" }}
        >
          <Row className="p-4 shadow p-3 mb-5 bg-white rounded">
            <Col
              md={8}
              className="mx-auto d-flex flex-column justify-content-center py-4"
            >
              <div className="t6p2 text-center">¿Que ofrecemos?</div>
              <div className="t5p2 text-center py-2 h3 font-weight-bold">
                Servicio a tu disposición
              </div>
              <div className="t6p2 text-center">
                Proveemos una solución que facilitará y permitirá el control
                total de cada proceso. Integrado a su negocio y sus clientes con
                un solo clic, desde cualquier dispositivo para todos los
                usuarios.
              </div>
            </Col>
          </Row>

          <Row className="p-4">
            <Col md={8} className="p-4">
              <div className="text-left">
                <p className="p-0 t6">
                  Siempre en busqueda de facilitar y optimizar<br />
                  <span className="t5p2 h3 font-weight-bold">
                    Los procesos relacionados al sector Porcino
                  </span>
                </p>
              </div>
              <div className="t6p2 text-left py-4">
                Las nuevas tecnologias de información y la informatica han
                transformado las bases y estructurado los modelos de negocios y
                las economias de los países. Estos cambios fundamentales tambien
                cambian las condiciones, oportunidad y valoración de las maneras
                de hacer negocios y sus rentabilidades.
              </div>
              <div className="text-left t6p2">
                <span className="font-weight-bold">
                  El Mercado de la Carne tambien ha cambiado.
                </span>
                Se viene un proceso de cambios fundamentales desde cómo se vende
                un animal en Pie, hasta cómo se abastecen las Grandes
                Superficies, Industrias y Carnicerías de Brrio
              </div>
              <p className="t6p2">
                Por este motivo buscamos innovar el Mercado, y desarrollar
                aplicaciones que esten
                <span className="resaltado font-weight-bold">
                  {" "}
                  siempre a tu alcance
                </span>
              </p>
            </Col>
            <Col md={4} className="p-4">
              <div className="text-left">
                <ul className="t6p2 font-weight-bold">
                  <li className="py-2 h6">Aplicaciones de Escritorio</li>
                  <li className="py-2 h6">Aplicaciones Web</li>
                  <li className="py-2 h6">Aplicaciones Moviles</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="perfiles">
          <Row className="BlackRow">
            <Col
              xs="12"
              md="8"
              className=" mx-auto d-flex justify-content-center flex-column"
            >
              <div className="text16p3 mx-auto">
                Para todos los Agentes de la cadena productiva de la Carne de
                Cerdo
              </div>
              <div className="text17p3 font-weight-bold text-center mx-auto">
                Perfiles
                <p style={{ color: "#DD9835" }}>&nbsp;Administrativos</p>
              </div>
              {/* <div className="text18" > para ti? </div> */}
            </Col>
          </Row>
        </div>

        {/* Cards */}
        <div className="row margen mx-auto">
          <div class="col-lg-3 col-10">
            <div class="muestra2">
              <div className="container4">
                <div className="circulo">
                  <div className="iconos" />
                </div>
                <div className="text24">Plan de Beneficio Porcino.</div>
                <div className="w-50 mx-auto text-center py-4">
                  <p className="t6p2">
                    Entidades decididas a los procesos necesarios para el
                    sacrificio del Cerdo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-10">
            <div class="muestra2">
              <div className="container4">
                <div className="circulo">
                  <div className="iconos" />
                </div>
                <div className="text24">Consumidores y Destinos.</div>
                <div className="w-50 mx-auto text-center py-4">
                  <p className="t6p2">
                    Objetivo final en el proceso de beneficio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-10">
            <div class="muestra2">
              <div className="container4">
                <div className="circulo">
                  <div className="iconos" />
                </div>
                <div className="text24">Productor y sus Granjas.</div>
                <div className="w-50 mx-auto text-center py-4">
                  <p className="t6p2">TEST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-light mx-auto w-75 p-4"
          style={{ borderRadius: "10px" }}
        >
          <Row className="p-4">
            <Col md={6} className="p-4 d-flex  align-items-center">
              <div className="text-left">
                <p className="p-0 t6">
                  Facilita la trazabilidad de los procesos
                  <br />
                  <span className="t5p2 h3 font-weight-bold">
                    Modulos Planta
                  </span>
                </p>
              </div>
            </Col>
            <Col md={6} className="p-4">
              <div className="t6 text-left py-4">
                <div className="text-left">
                  <p className="p-0 h5 font-weight-light py-2">
                    TIPO DE MODULO
                    <br />
                    <span className="h5 font-weight-bold text-dark py-2">
                      {" "}
                      Nombre del Módulo
                    </span>
                  </p>
                </div>
                Loren ipsum dolor sit amet, consectetur adipiscing elit, set do
                eiusmod tempor
              </div>
              <div>
                <Button className="Button mx-auto rounded-pill">Ver más</Button>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="foot p-4">
          <Col md={8} className="p-4 mx-auto">
            <div className="text-center">
              <p className="p-0 t6">
                Loren ipsum dolor sit amet, consectetur adipiscing<br />
                <span className=" h2 font-weight-bold">
                  Actualizaciones
                  <span className="t5p2 h2 font-weight-bold"> constantes</span>{" "}
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Button className="Button mx-auto rounded-pill">
                Ver Historial
              </Button>
            </div>
          </Col>
        </Row>

        <Footer />
      </div>
    );
  }
}

export default Servicios;
