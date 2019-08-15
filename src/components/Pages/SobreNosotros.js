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
import NavbarTest from "../../components/menu.js";
import Footer from "../../components/Footer.js";
import WhiteMenu from "../../components/whitemenu.js";


class SobreNosotros extends React.Component {
  render() {
    return (
      <div>
        <NavbarTest />
        <WhiteMenu />

        <div className="container-fluid fondop2">
          <Col md={12} lg={12} sm={6}>
            <p className="titulop10">Sobre<span className="containert titulop11">Nosotros</span></p>
          </Col>
        </div>

        <div className="bg-light mx-auto w-75 p-4" style={{ marginTop: '-40px', borderRadius: '10px' }}>
          <Row className="divsnp-4">
            <Col md={8} className="mx-auto d-flex flex-column justify-content-center py-4">
              <div className="t5p2 text-center py-2 h3 font-weight-bold">¿Qué es Infoporcinos?</div>
              <div className="t6p2 text-center">
                Es una Plataforma de Información que integra, intermedia e
                  informa en Tiempo Real (TR) a las Plantas de
                Beneficio de Porcinos, Comercializadores, Productores y demás
                  Agentes de la Cadena Productiva de la Carne de
                Cerdo sobre las condiciones técnicas de calidad de las Canales
                  Calientes Porcinas facilitando la construcción de
                relaciones comerciales basados en parámetros calidad de cada
                Canal Porcina evaluada.
                </div>
            </Col>
          </Row>

          <Row className="p-4">
            <Col md={6} className="p-4">
              <div className="text-left">
                <p className="p-0 t6">Desarrollado por Mercadeo Virtual S.A.<br></br><span className="t5p2 h3 font-weight-bold">¡Evolucionando el sector Cárnico!</span></p>
              </div>
              <div className="t6 text-left py-4">
                Somos una organización de servicios de conocimiento e Información que genera valor
                agregado a los Modelos de Negocio de las empresas, procesos y productos para lograr
               </div>
               <Button className="Button">Ver más</Button>
            </Col>
            <Col md={6} className="p-4">
              <div className="t6 text-left">
                Entendemos la innovación como un factor estratégico de competemcia y diferenciación de las empresas de cualquier mercado global,
                que sumado a la sincronización del negocio, a las condiciones del mercado y a los procesos internos de produción y distribución, hacen
                que la operación comercial e industrial sea eficiente, eficaz con una reducción de los costos de transacción que se traduce en nuevas
                herramientas competitivas.
             </div>
              <div className="t6 text-left">
                Somos proveedores de soluciones de sistemas e información (web / móviles) que integran sus negocios con sus clientes y proveedores con
                un solo clic. Aprendemos, Investigamos y Desarrollamos Soluciones de Información que les permitan a las empresas Adoptar, Implementar y usar
             </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="text-center">
                <p className="p-0 t6">Camino en el Tiempo<br></br><span className="t5p2 h4 font-weight-bold">Nuestra Historia</span></p>
              </div>
            </Col>
          </Row>
          <Row className="w-75 mx-auto">
            <Col>
              <div className="text-center">
                <p className=" t5p2 py-0 h6 t6">2005
                </p>
                <p className="py-0 t6p2 text-dark font-weight-bold">
                  Inicio Diseño y Desarrollo
                </p>
                <p className="t6p2 py-0">
                  Se comienza la elaboración de la plataforma
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <p className=" t5p2 py-0 h6 t6">2005
                </p>
                <p className="py-0 t6p2 text-dark font-weight-bold">
                  Inicio Diseño y Desarrollo
                </p>
                <p className="t6p2 py-0">
                  Se comienza la elaboración de la plataforma
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <p className=" t5p2 py-0 h6 t6">2005
                </p>
                <p className="py-0 t6p2 text-dark font-weight-bold">
                  Inicio Diseño y Desarrollo
                </p>
                <p className="t6p2 py-0">
                  Se comienza la elaboración de la plataforma
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <p className=" t5p2 py-0 h6 t6">2005
                </p>
                <p className="py-0 t6p2 text-dark font-weight-bold">
                  Inicio Diseño y Desarrollo
                </p>
                <p className="t6p2 py-0">
                  Se comienza la elaboración de la plataforma
                </p>
              </div>
            </Col>

          </Row>


        </div>
        <div className="bg-dark mx-auto w-100 h-25">

          <Row className="w-75 mx-auto bg-light border-top">
            <Col>
              <div className="text-center">
                <p className=" t5p2 py-0 h6 t6">2005
                </p>
                <p className="py-0 t6p2 text-dark font-weight-bold">
                  Inicio Diseño y Desarrollo
                </p>
                <p className="t6p2 py-0">
                  Se comienza la elaboración de la plataforma
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <p className=" t5p2 py-0 h6 t6">2005
                </p>
                <p className="py-0 t6p2 text-dark font-weight-bold">
                  Inicio Diseño y Desarrollo
                </p>
                <p className="t6p2 py-0">
                  Se comienza la elaboración de la plataforma
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <p className=" t5p2 py-0 h6 t6">2005
                </p>
                <p className="py-0 t6p2 text-dark font-weight-bold">
                  Inicio Diseño y Desarrollo
                </p>
                <p className="t6p2 py-0">
                  Se comienza la elaboración de la plataforma
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <p className=" t5p2 py-0 h6 t6">2005
                </p>
                <p className="py-0 t6p2 text-dark font-weight-bold">
                  Inicio Diseño y Desarrollo
                </p>
                <p className="t6p2 py-0">
                  Se comienza la elaboración de la plataforma
                </p>
              </div>
            </Col>
          </Row>
          <Row >
            <Col md="8" className="mx-auto text-center">
              <div className="text17p2 text-center pt-4">
                Más de
                <span style={{ color: "#DD9835" }}>&nbsp;12 años&nbsp;</span>
                en el Mercado
              </div>
              <div className="text-light h6 text-center py-4">
                Facilitando la comunicación y el manejo de información. Entre los agentes de la cadena productiva
              </div>
            </Col>
          </Row>
          <Row className="w-75 mx-auto bg-light border-top py-4">
            <Col>
              <div className="t6p2 text-center">
                Entendiendo como funciona un
                </div>
              <div className="t5p2 text-center py-2 h3 font-weight-bold">Sistema de Trazabilidad</div>
            </Col>
          </Row>
        </div>

        <div className="bg-light mx-auto w-75 p-4" style={{ marginTop: '-40px', borderRadius: '10px' }}>
          <Row className="p-4">
            <Col md={8} className="mx-auto d-flex flex-column justify-content-center py-4">
              <div className="t5p2 text-center py-2 h1 font-weight-bold">"</div>
              <div className="t6p2 text-center">
                La trazabilidad de los alimentos es una  herramienta que debe servir para ejercer un mayor control de los productos. Durante el proceso
                de producción, todo alimentos sigue un largo y complejo recorrido. A través del sistema de trazabilidad, es posible seguir el rastro de todos
                 y cada uno de estos pasos, con un triple objetivo:  que los productores aumenten la seguridad, que el consumidor obtenga toda la información necesaria
                 y que la gestión de cuañquier posible riesgo sea mas rápida y fácil.
                </div>
            </Col>
          </Row>

          <Row className="p-4">
            <Col md={6} className="p-4">
              <div className="text-left">
                <p className="p-0 t6">!InfoPorcinos también es un sistema de Trazabilidad<br></br><span className="t5p2 h3 font-weight-bold">¡Sigue cada proceso paso a paso con nuestra Plataforma!</span></p>
              </div>
              <div className="t6 text-left py-4">
                Obtém los datos técnicos y genera un registro normalizado sobre cada uno de los pasos dentro del procesamiento de la materia prima. No hay digitacion manual de los datos
               </div>
            </Col>
            <Col md={6} className="p-4">
              <div className="h-75 w-75 bg-dark">
              </div>
            </Col>
          </Row>
        </div>
        <Row className="p-4">
          <Col md={8} className="p-4 mx-auto">
            <div className="text-center">
              <p className="p-0 t6">Nuevas aplicaciones, actualizaciones constantes y el mejor soporte<br></br>
                <span className=" h2 font-weight-bold">Siempre listos para mejorar<span className="t5p2 h2 font-weight-bold"> {' '}nuestros servicios</span> </span></p>
            </div>
            <div className="d-flex justify-content-center">
              <Button className="Button mx-auto">Ver más</Button>
            </div>

          </Col>

        </Row>

        <Footer />
      </div>
    );
  }
}

export default SobreNosotros;




// import React from "react";

// //Css
// import "../../css/content-style.css";

// //Bootstrap

// import { Container, Col, Row } from "react-bootstrap";
// import {
//   MDBCarouselInner,
//   MDBContainer,
//   MDBCarouselItem,
//   MDBView,
//   MDBCarousel
// } from "mdbreact";

// //Components
// import NavbarTest from "../../components/menu.js";
// import Footer from "../../components/Footer.js";
// import WhiteMenu from "../../components/whitemenu.js";
// import pigs from "../../images/1.png";

// class SobreNosotros extends React.Component {
//   render() {
//     return (
//       <div>
//         <NavbarTest />
//         <WhiteMenu />

//         <div class=" headercontainer-fluid">
//           <Row>
//             <Col>
//               <div className="titulonosotros">
//                 <p className="titulonos">
//                   Sobre
//                   <p style={{ color: "#DD9835", backgroundColor: "white" }}>
//                     nosotros
//                   </p>
//                 </p>
//               </div>
//             </Col>
//             <Col />
//             <Col />
//           </Row>
//         </div>

//         <Row>
//           <Col xs="12" md="2" />

//           <Col xs="12" md="8">
//             <div>
//               <div class="contenido2">
//                 <div className="t4">Trazabilidad inmediata</div>
//                 <div className="t5">¿Qué es Infoporcinos?</div>
//                 <div className="t6">
//                   Es una Plataforma de Información que integra, intermedia e
//                   informa en Tiempo Real (TR) a las Plantas de <br />
//                   Beneficio de Porcinos, Comercializadores, Productores y demás
//                   Agentes de la Cadena Productiva de la Carne de <br />
//                   Cerdo sobre las condiciones técnicas de calidad de las Canales
//                   Calientes Porcinas facilitando la construcción de <br />
//                   relaciones comerciales basados en parámetros calidad de cada
//                   Canal Porcina evaluada.
//                 </div>
//               </div>
//             </div>
//           </Col>

//           <Col xs="12" md="2" />
//         </Row>

//         <Row>
//           <Col xs="12" md="2" />

//           <Col xs="12" md="4">
//             <div className="contenido3">
//               <div className="t4">Desarrollado por Mercadeo Virtual S.A.</div>
//               <div className="t5">¡Evolucionando el Sector Cárnico!</div>
//               <div className="t6">
//                 Somos una organización de servicios de conocimiento e
//                 información que genera valor <br />
//                 agregado a los Modelos de Negocio de las empresas, procesos y
//                 productos para lograr <br />
//                 una diferenciación competitiva en los negocios y mercados.
//               </div>

//               <div class="buttonvermas">
//                 <button class="Buttonvermas" type="button">
//                   Ver más
//                 </button>
//               </div>
//             </div>
//           </Col>

//           <Col xs="12" md="4">
//             <div className="contenido4">
//               <div className="t6">
//                 Entendemos la innovación como un factor estratégico de
//                 competencia y <br />
//                 diferenciación de las empresas en cualquier mercado global, que{" "}
//                 <br />
//                 sumado a la sincronización del negocio, a las condiciones del
//                 mercado y <br />
//                 a los procesos internos de producción y distribución, hacen que
//                 la <br />
//                 operación comercial e industrial sea eficiente, eficaz y con una
//                 reducción <br />
//                 en los costos de transacción que se traduce en nuevas
//                 herramientas <br />
//                 competitivas. Somos proveedores de Soluciones de Sistemas de
//                 Información (web / <br />
//                 móviles) que integran su negocio con sus clientes y proveedores
//                 con un <br />
//                 solo clic. Aprendemos, Investigamos y Desarrollamos Soluciones
//                 de <br />
//                 Información que le permitan a las empresas adoptar, implementar
//                 y usar <br />
//                 diferentes Sistemas de Trazabilidad de Procesos, Productos o
//                 Servicios.
//               </div>
//             </div>
//           </Col>

//           <Col xs="12" md="2" />
//         </Row>

//         <Footer />
//       </div>
//     );
//   }
// }

// export default SobreNosotros;
