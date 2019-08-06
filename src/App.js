import React from 'react';
import NavbarTest from './components/menu.js';
import Footer from './components/Footer.js';
import '../src/css/content-style.css';
import { Container, Col, Row } from "react-bootstrap";
import pigs from '../src/images/1.png';
import logo from '../src/icons/logo.svg';
import desktop from '../src/images/Mockup-Mac.png';
import { Navbar, Nav } from 'react-bootstrap';
import key from '../src/icons/key.svg';
import process from '../src/icons/process.svg';
import pass from '../src/icons/pass.svg';
import pen from '../src/icons/pen.svg';
import check from '../src/icons/check.svg';
import user from '../src/icons/user.svg';
import update from '../src/icons/update.svg';
import WhiteMenu from './components/whitemenu.js';
import central from '../src/images/CG-logo.svg';
import pig2 from '../src/images/2.png';
import pig3 from '../src/images/3.png';
import { MDBCarouselInner, MDBContainer, MDBCarouselItem, MDBView, MDBCarousel  } from "mdbreact";


class App extends React.Component {

  render() {
    return (

      <div >


        <NavbarTest />
        <WhiteMenu />

        <Row>
          <Col md={12} lg={12} sm={12}>

            <img className="pigsinicio" src={pigs} />
            <img className="desktopp" src={desktop} />

          </Col>

          <Col md={12} lg={12} sm={12}>

        <p className="titulop">APROVECHA AL MÁXIMO TODOS TUS RECURSOS</p>
        <p className="titulop2">El mejor sistema de <br></br>
        información</p>

        <div className="containert">

        <p className="titulop3">para tu negocio</p>

        </div>


          </Col>


          </Row>

          <Row>

          <Col xs="12" md="2">
           </Col>

            <Col xs="12" md="8">

            <div className="t4">Trazabilidad en Tiempo Real</div>
              <div className="t5">Acerca de Infoporcinos</div>
              <div className="t6">

                <p>

                  Somos la mejor plataforma de Información para el sector de la carne de cerdo. Buscamos crear e <br />
                  innovar en las nuevas tecnologías para integrar, intermediar e informar en Tiempo Real (TR) las condiciones <br />
                  técnicas de calidad de la carne de porcinos.
    
                </p>

              </div>

              <div class="text-center"><button class="ButtonAcerca" type="button">VER MAS</button></div>

              
            </Col>

            <Col xs="12" md="2">
            </Col>

          </Row>

          <div class="full-container text-center">

	
		<div class="row margen2">

			<div class="col-lg-9 col-10 sobre">
				
				<div class="muestra2">

        <div className="MediumRow">
   <Row>   
<Col xs="12" md="4">
<div className="text10">185</div>
<div className="text11">GRANJAS ACTIVAS EN EL SISTEMA</div>
</Col>

<Col xs="12" md="4">
<div className="text10">3,486,969</div>
<div className="text11">CANALES CALIENTES<br />PORCINOS EVALUADOS</div>
            
</Col >

<Col  xs="12" md="4">
<div className="text10">12</div>
<div className="text11">AÑOS EN EL MERCADO</div>
</Col>
</Row>

    </div>
					
				</div>

			</div>

		</div>

		<div class="row fondo">

			<div class="col-12">
				
				<div class="muestra3">
        <Row className="BlackRow">

<Col xs="12" md="2">
 </Col>

  <Col xs="12" md="8">

          <div className="text16"> Aprovecha al máximo cada recurso y optimiza los procesos con nuestras ventajas competitivas </div>
          <div className="text17"> ¿Qué tenemos </div>
          <div className="text18"> para ti? </div>         
  </Col>

  <Col xs="12" md="2">
  </Col>

</Row>
					
				</div>

			</div>


		</div>

		<div class="row margen sobre">

			<div class="col-lg-3 col-10 sobre">
				
				<div class="muestra2">

        <div className="container4">

<div className="circulo">
  <div className="iconos">
    <img src={process} />
  </div>
</div>

<div className="text21">Sistema de Trazabilidad</div>
<div className="text24">Permite a el control y seguimiento del producto, <br /> en cada uno de los procesos.</div>

</div>

					
				</div>

			</div>

			<div class="col-lg-3 col-10">
				
				<div class="muestra2">

				<div className="container4">

            <div className="circulo">
              <div className="iconos">
                <img src={key} />
              </div>
            </div>

            <div className="text21">Niveles de Acceso </div>
            <div className="text24"> Divide cada usuario según su rol y permite <br /> acceso a diferentes secciones.</div>

          </div>
					
				</div>

			</div>

			<div class="col-lg-3 col-10">

      <div class="muestra2">

<div className="container4">

    <div className="circulo">
      <div className="iconos">
        <img src={pass} />
      </div>
    </div>

    <div className="text21">Claves Unicas </div>
    <div className="text24">La seguridad de la información de cada <br /> usuario es importante.</div>

  </div>
  
</div>
				
			
			</div>

		</div>

	</div>
 
     
          <div className="full-container text-center">
            <div class="textos">
              <h5>La Mejor Optimización </h5>
              <h2>¡Nuestro Nuevo Módulo!</h2>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-12 col-sm-12">

                <div class="muestra">

                  <div class="item">
                    <div class="circulo2">
                      <img class="iconos" src={pen}></img>
                    </div>
                    <div class="contenido">
                      <p className="titulos" >Diseño estético e interactivo</p>
                      <span class="text">Lorem Ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>
                  </div>

                  <div class="item">
                    <div class="circulo2">
                      <img class="iconos" src={check}></img>
                    </div>
                    <div class="contenido">

                    <p className="titulos" >Mantente al día</p>
                      <span class="text">Lorem Ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>

                  </div>

                </div>

              </div>

              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="muestra">
                  
                  <img class="pantalla" src={desktop}></img>

                </div>

              </div>

              <div class="col-lg-3 col-md-12 col-sm-12">

                <div class="muestra">

                  <div class="item">
                    <div class="circulo2">
                      <img class="iconos" src={user}></img>
                    </div>
                    <div class="contenido">

                    <p className="titulos" >Experiencia simple y óptima</p>
                      <span class="text">Lorem Ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>
                  </div>

                  <div class="item">
                    <div class="circulo2">
                      <img class="iconos" src={update}></img>
                    </div>
                    <div class="contenido">

                      <p className="titulos" >Actualizaciones frecuentes</p>
                      <span class="text">Lorem Ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <MDBContainer className="carousel_inicio">
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
              <img
                className="d-block w-100"
                src={central}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={pig2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={pig3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );


        <Footer />


      </div>

    );
  }

}

export default App;
