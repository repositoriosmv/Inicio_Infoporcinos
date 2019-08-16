import React from "react";
import ReactDOM from "react-dom";

//Css
import "../../css/content-style.css";

//Bootstrap

import { Container, Col, Row, Button } from "react-bootstrap";
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

// import TimeLine from "../../components/TimeLine.js";

class PreguntasFrecuentes extends React.Component {
  render() {
    return (
      <div>
        <NavbarTest />
        <WhiteMenu />

        <div className="container-fluid fondop2">
          <Col md={12} lg={12} sm={6}>
            <p className="titulop10">
              Preguntas<span className="containert titulop11">Frecuentes</span>
            </p>
          </Col>
        </div>

        <div
          className="bg-light mx-auto w-75 p-4"
          style={{ marginTop: "-40px", borderRadius: "10px" }}
        >
          <Row className="p-4 shadow p-3 mb-5 bg-white rounded">
            <Col
              md={8}
              className="mx-auto d-flex flex-column justify-content-center py-4"
            >
              <div className="t6p2 text-center">Dudas, sugerencias y</div>
              <div className="t5p2 text-center py-2 h3 font-weight-bold">
                Solución de problemas
              </div>
              <div className="t6p2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </div>
            </Col>
          </Row>

          <Row className="p-4">
            <Col md={6} className="p-4">
              <div>
                <div class="SeccionCollapse">
                  <h1>Título sección de preguntas</h1>
                  <Accordion atomic={true}>
                    <AccordionItem title="¿Quis nostrud ullamco?">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 2">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 3">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 4">
                      <DummyContent />
                    </AccordionItem>
                  </Accordion>
                </div>

                <div class="SeccionCollapse2">
                  <h1>Título sección de preguntas</h1>
                  <Accordion atomic={true}>
                    <AccordionItem title="Title 1">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 2">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 3">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 4">
                      <DummyContent />
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </Col>

            <Col md={6} className="p-4">
              <div>
                <div class="SeccionCollapse">
                  <h1>Título sección de preguntas</h1>
                  <Accordion atomic={true}>
                    <AccordionItem title="¿Quis nostrud ullamco?">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 2">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 3">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 4">
                      <DummyContent />
                    </AccordionItem>
                  </Accordion>
                </div>

                <div class="SeccionCollapse2">
                  <h1>Título sección de preguntas</h1>
                  <Accordion atomic={true}>
                    <AccordionItem title="Title 1">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 2">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 3">
                      <DummyContent />
                    </AccordionItem>

                    <AccordionItem title="Title 4">
                      <DummyContent />
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Row className="p-4">
          <Col md={8} className="p-4 mx-auto">
            <div className="text-center">
              <p className="p-0 t6">
                ¿Dudas o sugerencias?
                <br />
                <span className=" h2 font-weight-bold">
                  Contáctanos a través de nuestro
                  <span className="t5p2 h2 font-weight-bold">
                    {" "}
                    Soporte en línea
                  </span>{" "}
                </span>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Button className="Button mx-auto">Iniciar Chat</Button>
            </div>
          </Col>
        </Row>

        <Footer />
      </div>
    );
  }
}
export default PreguntasFrecuentes;
