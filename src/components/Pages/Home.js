import React from "react";
import animateScrollTo from 'animated-scroll-to';
//Css
import "../../css/content-style.css";

//Bootstrap
import { Col, Row } from "react-bootstrap";
import {
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBCarousel
} from "mdbreact";

//Components
import NavbarTest from "../../components/menu.js";
import Footer from "../../components/Footer.js";
import WhiteMenu from "../../components/whitemenu.js";
import Gallery from "../../components/Slider.js";

// images and icons
import update from "../../icons/update.svg";
import central from "../../images/CG-logo.svg";
import pig2 from "../../images/2.png";
import pig3 from "../../images/3.png";
import pen from "../../icons/pen.svg";
import check from "../../icons/check.svg";
import user from "../../icons/user.svg";
import desktop from "../../images/Mockup-Mac.png";

const data = [{
  id: 0,
  header: 'Gluten-free Bicycle',
  body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
  colour: '#242846',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc1.jpg'
}, {
  id: 1,
  header: 'Post-ironic Disrupt',
  body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
  colour: '#ba9077',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc2.jpg'
}, {
  id: 2,
  header: 'Lumber-Sexual Roof Party ',
  body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
  colour: '#1ABC9C',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg'
}, {
  id: 3,
  header: 'Vegan hoodie trust fund',
  body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
  colour: '#C0392B',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg'
}, {
  id: 4,
  header: 'cliche craft beer',
  body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
  colour: '#513B56',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg'
}];

class Home extends React.Component {
  bottomClick() {
    animateScrollTo(0);
  }

  render() {
    return (
      <div className="home-styles">
        <NavbarTest />
        <WhiteMenu />
        {/* <Carousel data={data}/> */}
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

        <div className="container-fluid fondopantalla">
          <Col md={12} lg={12} sm={6} />
          <img className="desktopp" src={desktop} />
        </div>

        <Row  style={{width: '100%'}}>
          <Col xs={12} md={12} className="textosinfo px-0">
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
        {/* <Row style={{marginTop: "500px"}} className="border border-secondary"> */}
        <Row style={{width: '100%'}}>
          <Col md={2} />

          <Col md={8}>
            <container-fluid text-center>
              <Row className="containerpp2" style={{ marginBottom: "-80px", width: '100%' }}>
                <Col className="item-fluid">
                  {" "}
                  <div class="contenido">
                    <p className="titulosinicio">185</p>
                    <span class="textinicio">GRANJAS ACTIVAS EN EL SISTEMA</span>
                  </div>
                </Col>
                <Col className="item-fluid">
                  <div className="contenido bg-white" >
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



        <div class="text-center">

          <div class="row fondo" style={{width: '100%'}}>
            <div class="col-12 px-0">
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
          <div className="w-75 h-100 mx-auto" style={{ marginTop: "-100px", backgroundColor: "#FDFDFD" }}>
            <Gallery />
          </div>
          <div class="row margen sobre" />
        </div>

        <div className="full-container text-center" style={{ backgroundColor: "#FDFDFD" }}>
          <div class="textos py-4">
            <h5>La Mejor Optimización </h5>
            <h2>¡Nuestro Nuevo Módulo!</h2>
          </div>
          <div className="row"  style={{width: '100%'}}>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="muestra">
                <div className="item">
                  <div class="circulo2-2 p-y">
                    <img class="iconos" src={pen} />
                  </div>
                  <div class="contenido">
                    <p className="titulos px-4">Diseño estético e interactivo</p>
                    <span class="text">
                      Lorem Ipsum dolor sit met, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </span>
                  </div>
                </div>

                <div class="item">
                  <div class="circulo2-2">
                    <img class="iconos" src={check} />
                  </div>
                  <div class="contenido">
                    <p className="titulos">Mantente al día</p>
                    <span class="text">
                      Lorem Ipsum dolor sit met, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="muestra">
                <img class="pantalla" src={desktop} />
              </div>
            </div>

            <div class="col-lg-3 col-md-12 col-sm-12">
              <div class="muestra">
                <div class="item">
                  <div class="circulo2">
                    <img class="iconos" src={user} />
                  </div>
                  <div class="contenido">
                    <p className="titulos">Experiencia simple y óptima</p>
                    <span class="text">
                      Lorem Ipsum dolor sit met, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </span>
                  </div>
                </div>

                <div class="item">
                  <div class="circulo2">
                    <img class="iconos" src={update} />
                  </div>
                  <div class="contenido">
                    <p className="titulos">Actualizaciones frecuentes</p>
                    <span class="text">
                      Lorem Ipsum dolor sit met, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






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
                  <Row className="py-4">
                    <Col xs="12" md="12" className="py-4">
                      <div className="txtslide">
                        <div className="t4">
                          Empresas que confían en Mercadeo Virtual S.A.
                        </div>
                        <div className="t5">¡Trabajando con Nosotros!</div>
                      </div>
                    </Col>
                  </Row>
                  <img className="d-block w-100" src={pig3} alt="First slide" />
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

                  <img className="d-block w-100" src={central} alt="Third slide" />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer-fluid>

        <Footer bottomClick={this.bottomClick} />
      </div>
    );
  }
}

export default Home;
