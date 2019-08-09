import React from 'react';

//Css
import '../../css/content-style.css';

//Bootstrap

import { Container, Col, Row } from "react-bootstrap";
import { MDBCarouselInner, MDBContainer, MDBCarouselItem, MDBView, MDBCarousel } from "mdbreact";

//Components
import NavbarTest from '../../components/menu.js';
import Footer from '../../components/Footer.js';
import WhiteMenu from '../../components/whitemenu.js';




class SobreNosotros extends React.Component {

    render() {

        return (

            <div>


                <NavbarTest />
                <WhiteMenu />



                <Row>

                    <Col xs="12" md="2">

                    </Col>

                    <Col xs="12" md="8">

                        <div class="contenido">

                            <div className="t4">Trazabilidad en Tiempo Real</div>
                            <div className="t5">Acerca de Infoporcinos</div>

                        </div>

                    </Col>


                    <Col xs="12" md="2">

                    </Col>

                </Row>




                <Footer />

            </div>


        );

    }

}

export default SobreNosotros;
