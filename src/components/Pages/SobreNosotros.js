import React from "react";

//Css
import "../../css/content-style.css";
import animateScrollTo from 'animated-scroll-to';

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
import NavbarTest from "../../components/menu.js";
import Footer from "../../components/Footer.js";
import WhiteMenu from "../../components/whitemenu.js";
import Timeline from "../../components/Timeline.js";

class SobreNosotros extends React.Component {
  bottomClick() {
    animateScrollTo(0);
  }
  render() {
    return (
      <div className="home-styles" style={{ backgroundColor: "#FDFDFD" }}>
        <NavbarTest />
        <WhiteMenu />

        <div className="container-fluid fondop2">
          <Col md={12} lg={12} sm={6}>
            <p className="titulop10">
              Sobre<span className="containert titulop11">Nosotros</span>
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
              <div className="t5p2 text-center py-2 h3 font-weight-bold">
                ¿Qué es Infoporcinos?
              </div>
              <div className="t6p2 text-center">
                Es una Plataforma de Información que integra, intermedia e
                informa en Tiempo Real (TR) a las Plantas de Beneficio de
                Porcinos, Comercializadores, Productores y demás Agentes de la
                Cadena Productiva de la Carne de Cerdo sobre las condiciones
                técnicas de calidad de las Canales Calientes Porcinas
                facilitando la construcción de relaciones comerciales basados en
                parámetros calidad de cada Canal Porcina evaluada.
              </div>
            </Col>
          </Row>

          <Row className="p-4">
            <Col md={6} className="p-4">
              <div className="text-left">
                <p className="p-0 t6">
                  Desarrollado por Mercadeo Virtual S.A.<br />
                  <span className="t5p2 h3 font-weight-bold">
                    ¡Evolucionando el sector Cárnico!
                  </span>
                </p>
              </div>
              <div className="t6 text-left py-4">
                Somos una organización de servicios de conocimiento e
                Información que genera valor agregado a los Modelos de Negocio
                de las empresas, procesos y productos para lograr
              </div>
              <Button className="Button rounded-pill">Ver más</Button>
            </Col>
            <Col md={6} className="p-4">
              <div className="t6 text-left">
                Entendemos la innovación como un factor estratégico de
                competemcia y diferenciación de las empresas de cualquier
                mercado global, que sumado a la sincronización del negocio, a
                las condiciones del mercado y a los procesos internos de
                produción y distribución, hacen que la operación comercial e
                industrial sea eficiente, eficaz con una reducción de los costos
                de transacción que se traduce en nuevas herramientas
                competitivas.
              </div>
              <div className="t6 text-left">
                Somos proveedores de soluciones de sistemas e información (web /
                móviles) que integran sus negocios con sus clientes y
                proveedores con un solo clic. Aprendemos, Investigamos y
                Desarrollamos Soluciones de Información que les permitan a las
                empresas Adoptar, Implementar y usar
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="text-center p-4">
                <p className="p-4 t6">
                  Camino en el Tiempo<br />
                  <span className="t5p2 h4 font-weight-bold">
                    Nuestra Historia
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="blacksb mx-auto w-100 h-25">
        <Row className="w-75 shado bg-white rounded mx-auto">
            <Col md={12} className="mx-auto w-100" style={{marginTop: "-70px", height: '200px', white: ''}}>
            <Timeline />
            </Col>
          </Row>

          <Row>
            <Col md="8" className="mx-auto text-center">
              <div className="text17p2 text-center pt-4">
                Más de
                <span style={{ color: "#DD9835" }}>&nbsp;12 años&nbsp;</span>
                en el Mercado
              </div>
              <div className="text-light h6 text-center py-4">
                Facilitando la comunicación y el manejo de información. Entre
                los agentes de la cadena productiva
              </div>
            </Col>
          </Row>
          <Row style={{height: '100px'}}>
            <Col>
              
            </Col>
          </Row>
        </div>

        <div className="bg-light mx-auto w-75 px-0">
          <Row className="margeninferior bg-light w-100 shadow" style={{ marginTop: "-90px", borderRadius: "10px", height: '300px'}}>
            <Col md={8} className="mx-auto d-flex flex-column justify-content-center py-4">
              <div className="t6p2 text-center px-0" style={{ }}>
                Entendiendo como funciona un
              </div>
              <div className="t5p2 text-center py-2 h3 font-weight-bold">
                Sistema de Trazabilidad
              </div>
              <div className="t5p2 text-center py-2 h1 font-weight-bold">"</div>
              <div className="t6p2 text-center">
                La trazabilidad de los alimentos es una herramienta que debe
                servir para ejercer un mayor control de los productos. Durante
                el proceso de producción, todo alimentos sigue un largo y
                complejo recorrido. A través del sistema de trazabilidad, es
                posible seguir el rastro de todos y cada uno de estos pasos, con
                un triple objetivo: que los productores aumenten la seguridad,
                que el consumidor obtenga toda la información necesaria y que la
                gestión de cuañquier posible riesgo sea mas rápida y fácil.
                <p className="text-dark">Eroski Consumer, 2013</p>
              </div>
            </Col>
          </Row>

          <Row className="p-4">
            <Col md={6} className="p-4">
              <div className="text-left">
                <p className="p-0 t6">
                  !InfoPorcinos también es un sistema de Trazabilidad<br />
                  <span className="t5p2 h3 font-weight-bold">
                    ¡Sigue cada proceso paso a paso con nuestra Plataforma!
                  </span>
                </p>
              </div>
              <div className="t6 text-left py-4">
                Obtém los datos técnicos y genera un registro normalizado sobre
                cada uno de los pasos dentro del procesamiento de la materia
                prima.
                <span className=" font-weight-bold">
                  {" "}
                  No hay digitacion manual de los datos
                </span>
              </div>
            </Col>
            <Col md={6} className="p-4">
              <div className="imag_sobreN"/>
            </Col>
          </Row>
        </div>
        <Row className="foot p-4">
          <Col md={8} className="p-4 mx-auto">
            <div className="text-center">
              <p className="p-0 t6">
                Nuevas aplicaciones, actualizaciones constantes y el mejor
                soporte<br />
                <span className=" h2 font-weight-bold">
                  Siempre listos para mejorar
                  <span className="t5p2 h2 font-weight-bold">
                    {" "}
                    nuestros servicios
                  </span>{" "}
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-center style-foot">
              <Button className="Button mx-auto">Ver más</Button>
            </div>
          </Col>
        </Row>

        <Footer bottomClick={this.bottomClick}/>
      </div>
    );
  }
}

export default SobreNosotros;
