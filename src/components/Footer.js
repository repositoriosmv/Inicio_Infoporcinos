import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container, Col, Row, Button } from "react-bootstrap";
import logofooter from '../icons/logo-mv.svg'

class Footer extends React.Component {


  constructor() {
    super();
  }

  render() {

    return (

      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="p-4 mx-auto" style={{width: '90%'}}>
            <MDBCol xs="12" md={4}>
              <div>
                <img className="logofooter" src={logofooter} />
              </div>

            </MDBCol>
            <MDBCol xs="12" md={4}>
              <div className="title  py-2 text-center">Mercadeo Virtual</div>
              <br />
              <div className="tst py-2 text-center">

                <p>
                  Somos proveedores de Soluciones de Sistemas de <br />
                  Información (web / móviles) que integran su negocio <br />
                  con sus clientes y proveedores con un solo clic.
                 </p>

              </div>
            </MDBCol>
            <MDBCol xs="12" md={4}>

              <div className="tt  py-2 text-center">
                <p>Enlaces de Interés</p>
              </div>
              <div className="tst  py-2 text-center">
                <p>Mercadeo Virtua <br />
                  Red de Negocios <br />
                  Escuela de la Carne</p>
              </div>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center">
          <MDBContainer fluid className="footerinfo d-flex">
            <Col md={11}><a> Copyright © 2019 Mercadeo Virtual. Todos los derechos reservados </a>
            </Col>
            <Col md={1}>
            <Button className="bg-dark text-muted h5 text-center">^</Button>
            </Col>
          </MDBContainer>
        </div>

      </MDBFooter>

    );
  }
}

export default Footer;