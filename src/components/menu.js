
import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import mailinfo from '../icons/mail.svg'
import phoneinfo from '../icons/phone.svg'


class NavbarTest extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (

            <header className="header-id">
                <Container>
                    <Row>
                        <Col sm="15">
                            <img className="iconsheader" src={mailinfo} />
                            <span className="text-header">info@infoporcinos.com</span>
                            
                            </Col>
                        <Col sm="10">
                            <img  className="iconsheader" src={phoneinfo} />
                            <span className="text-header">+57 034 0000 000</span>
                            
                            </Col>
                    </Row>

                </Container>


            </header>

        );
    }
}

export default NavbarTest;


