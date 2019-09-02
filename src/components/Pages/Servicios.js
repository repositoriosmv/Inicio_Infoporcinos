import React from "react";

//Css
import "../../css/content-style.css";
import animateScrollTo from "animated-scroll-to";

//Bootstrap

import { Container, Col, Row, Button } from "react-bootstrap";
import {
  MDBCarouselInner,
  MDBContainer,
  MDBCarouselItem,
  MDBView,
  MDBCarousel
} from "mdbreact";

//Icons

import planta from "../../icons/planta-b.svg";
import enterprise from "../../icons/empresa.svg";
import productor from "../../icons/productor-w.svg";

//Components
import NavbarTest from "../menu.js";
import Footer from "../Footer.js";
import WhiteMenu from "../whitemenu.js";
import Carousel from "../../components/carousel.js";

const data = [
  {
    id: 0,
    header: "Módulo Medición",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    colour: "white"
  },
  {
    id: 1,
    header: "NOMBRE DE MODULO 2",
    body:
      "Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY biodiesel disrupt retro...",
    colour: "white"
  },
  {
    id: 2,
    header: "NOMBRE DE MODULO 3",
    body:
      "Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY biodiesel disrupt retro...",
    colour: "white"
  },
  {
    id: 3,
    header: "NOMBRE DE MODULO 4",
    body:
      "Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY biodiesel disrupt retro...",
    colour: "white"
  },
  {
    id: 4,
    header: "NOMBRE DE MODULO 5",
    body:
      "Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY biodiesel disrupt retro...",
    colour: "white"
  }
];

class Servicios extends React.Component {
  bottomClick() {
    animateScrollTo(0);
  }
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
          className="mx-auto w-75 p-4"
          style={{ marginTop: "-79px", borderRadius: "10px" }}
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
                  Siempre en busqueda de facilitar y optimizar
                  <br />
                  <span
                    className="t5p2 h3 font-weight-bold"
                    style={{ fontSize: "43px" }}
                  >
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
                <span className="font-weight-bold" style={{ fontSize: "13px" }}>
                  El Mercado de la Carne tambien ha cambiado.
                </span>
                Se viene un proceso de cambios fundamentales desde cómo se vende
                un animal en Pie, hasta cómo se abastecen las Grandes
                Superficies, Industrias y Carnicerías de Brrio
              </div>
              <br />
              <p className="t6p2">
                Por este motivo buscamos innovar el Mercado, y desarrollar
                aplicaciones que esten
                <span
                  className="resaltado font-weight-bold"
                  style={{ fontSize: "13px" }}
                >
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
          {/* <Row>
          <Carousel data={data}/>
          </Row> */}
        </div>
        <div className="perfiles">
          <Row className="BlackRow">
            <Col
              xs="12"
              md="8"
              className="mx-auto d-flex justify-content-center flex-column"
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
        <div
          className="row mx-auto w-75 mx-0 px-0 "
          style={{ marginTop: "-100px" }}
        >
          <div className="col-md-4 test">
            <div className="muestra2">
              <div className="container5">
                <div className="circulo_new">
                  <div className="iconos">
                    <img src={planta} />
                  </div>
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

          <div className="col-md-4 test">
            <div className="muestra2">
              <div className="container5">
                <div className="circulo_new">
                  <div className="iconos">
                    <img src={enterprise} />
                  </div>
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

          <div className="col-md-4 test">
            <div className="muestra2">
              <div className="container5">
                <div className="circulo_new">
                  <div className="iconos">
                    <img src={productor} />
                  </div>
                </div>
                <div className="text24">Productor y sus Granjas.</div>
                <div className="w-50 mx-auto text-center py-4">
                  <p className="t6p2">
                    Encargados de la producción de la materia prima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" txt mx-auto w-75 p-4" style={{ borderRadius: "10px" }}>
          <Row className="p-4">
            <Col
              md={6}
              xs={12}
              sm={12}
              ms={12}
              className="p-4 d-flex  align-items-center"
            >
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
            <Col md={6} xs={12} sm={12} ms={12}>
              <Carousel data={data} />
            </Col>
          </Row>
        </div>
        <Row className="foot py-4 px-0">
          <Col md={8} className="p-4 mx-auto">
            <div className="text-center">
              <p className="p-0 t6">
                Loren ipsum dolor sit amet, consectetur adipiscing
                <br />
                <span className=" h2 font-weight-bold">
                  Actualizaciones
                  <span className="t5p2 h2 font-weight-bold">
                    {" "}
                    constantes
                  </span>{" "}
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                href="/Actualizaciones"
                className="Button mx-auto rounded-pill"
              >
                Ver Historial
              </Button>
            </div>
          </Col>
        </Row>

        <Footer bottomClick={this.bottomClick} />
      </div>
    );
  }
}

export default Servicios;
