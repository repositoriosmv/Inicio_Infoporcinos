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

// images and icons
import update from "../../icons/update.svg";
import central from "../../images/CG-logo.svg";
import pig2 from "../../images/2.png";
import pig3 from "../../images/3.png";
import key from "../../icons/key.svg";
import process from "../..//icons/process.svg";
import pass from "../../icons/pass.svg";
import pen from "../../icons/pen.svg";
import check from "../../icons/check.svg";
import user from "../../icons/user.svg";
import pigs from "../../images/1.png";
import logo from "../../icons/logo.svg";
import desktop from "../../images/Mockup-Mac.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home-styles">
        <NavbarTest />
        <WhiteMenu />

        <div className="container-fluid fondop1">
          <Col md={12} lg={12} sm={6}>
            <p className="tituloinicio">
              APROVECHA AL MÁXIMO TODOS TUS RECURSOS
            </p>

            <p className="titulop10">
              El mejor sistema de <br /> informacion{" "}
              <span className="containert titulop11">para tu negocio</span>
            </p>
          </Col>
        </div>

        {/* <div className="container-fluid fondopantalla">
          <Col md={12} lg={12} sm={6} />
           <img className="desktopp "  src={desktop} />
        </div> */}

        <Row>
          <Col xs={12} md={12} className="textosinfo">
            <div className="t4 pt-1">Trazabilidad en Tiempo Real</div>
            <div className="t5">Acerca de Infoporcinos</div>
            <div className="t6 px-1">
              <p>
                Somos la mejor plataforma de Información para el sector de la
                carne de cerdo. Buscamos crear e <br />
                innovar en las nuevas tecnologías para integrar, intermediar e
                informar en Tiempo Real (TR) las condiciones <br />
                técnicas de calidad de la carne de porcinos.
              </p>
            </div>

            <div class="text-center">
              <button class="ButtonAcerca" type="button">
                VER MAS
              </button>
            </div>
          </Col>
        </Row>



        
        <div class="text-center">

          <div class="row fondo">
            <div class="col-12">
              <div class="muestra3">
                <Row className="BlackRow">
                  <Col xs="12" md="2" />

                  <Col xs="12" md="8">
                    <div className="text16 py-0 h4">
                      {" "}
                      Aprovecha al máximo cada recurso y optimiza los procesos
                      con nuestras ventajas competitivas{" "}
                    </div>
                    <div className="text17 py-0">
                      {" "}
                      ¿Qué tenemos{" "}
                      <p style={{ color: "#DD9835" }}>&nbsp;para ti?</p>{" "}
                    </div>
                    {/* <div className="text18" > para ti? </div> */}
                  </Col>

                  <Col xs="12" md="2" />
                </Row>
              </div>
            </div>
          </div>
          {/* <div className="w-75 h-100 mx-auto" style={{ marginTop: "-100px" }}>
            <Gallery />
          </div> */}
          <div class="row margen sobre" />
        </div>

        <Row>
          <Col md={2} />

          <Col md={8}>
            <container-fluid text-center>
              <Row className="containerpp">
                <Col className="item-fluid">
                  {" "}
                  <div class="contenido">
                    <p className="titulosinicio">185</p>
                    <span class="textinicio">GRANJAS ACTIVAS EN EL SISTEMA</span>
                  </div>
                </Col>
                <Col className="item-fluid">
                  <div class="contenido">
                    <p className="titulosinicio">3,486,969</p>
                    <span class="textinicio">
                      CANALES CALIENTES PORCINOS EVALUADOS
                    </span>
                  </div>
                </Col>
                <Col className="item-fluid">
                  <div class="contenido">
                    <p className="titulosinicio">12</p>
                    <span class="textinicio">AÑOS EN EL MERCADO</span>
                  </div>
                </Col>
              </Row>
            </container-fluid>
          </Col>

          <Col md={2} />
        </Row>

         

      
        <MDBContainer-fluid className="carousel_inicio">
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <Row>
                    <Col xs="12" md="2" />
                    <Col xs="12" md="8">
                      <div className="txtslide">
                        <div className="t4">
                          Empresas que confían en Mercadeo Virtual S.A.
                        </div>
                        <div className="t5">¡Trabajando con Nosotros!</div>
                      </div>
                    </Col>

                    <Col xs="12" md="2" />
                  </Row>
                  <img className="d-block w-100" src={pig2} alt="First slide" />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <Row>
                    <Col xs="12" md="2" />
                    <Col xs="12" md="8">
                      <div className="txtslide">
                        <div className="t4">
                          Empresas que confían en Mercadeo Virtual S.A.
                        </div>
                        <div className="t5">¡Trabajando con Nosotros!</div>
                      </div>
                    </Col>

                    <Col xs="12" md="2" />
                  </Row>
                  <img
                    className="d-block w-100"
                    src={central}
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <Row>
                    <Col xs="12" md="2" />
                    <Col xs="12" md="8">
                      <div className="txtslide">
                        <div className="t4">
                          Empresas que confían en Mercadeo Virtual S.A.
                        </div>
                        <div className="t5">¡Trabajando con Nosotros!</div>
                      </div>
                    </Col>

                    <Col xs="12" md="2" />
                  </Row>

                  <img className="d-block w-100" src={pig3} alt="Third slide" />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer-fluid>

        <Footer />
      </div>
    );
  }
}

export default Home;
