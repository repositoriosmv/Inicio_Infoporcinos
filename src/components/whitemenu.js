import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import mailinfo from '../icons/mail.svg'
import phoneinfo from '../icons/phone.svg'
import logo from '../icons/logo.svg';



class WhiteMenu extends React.Component {



    render() {

        return (


            <nav>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container>
                            <Row>
                                <Nav className="mr-auto">

                                    <Col md="2" xs="20">
                                        <div className="logop">
                                            <img src={logo} />
                                        </div>

                                    </Col>

                                    <Col md="10" xs="20">

                                        <div className="Buttons">

                                        <Nav.Link href="#home">Inicio</Nav.Link>
                                        <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                                        <Nav.Link href="#home">Servicios</Nav.Link>
                                        <Nav.Link href="#home">Preguntas Frecuentes</Nav.Link>
                                        <Nav.Link href="#home">Contacto</Nav.Link>
                                        <Button className="einteresado">Estoy Interesado</Button>
                                        <Button className="iniciarses">Iniciar Sesion</Button>
                                                                           
                                        </div>
                                        
                                    </Col>

                                </Nav>
                            </Row>

                        </Container>



                    </Navbar.Collapse>
                </Navbar>


            </nav>

        );

    }

} export default WhiteMenu;

