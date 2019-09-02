import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container, Col, Row, Button } from "react-bootstrap";
import logofooter from '../icons/logo-mv.svg'
import { Icon } from 'react-icons-kit'
import {chevronUp} from 'react-icons-kit/ionicons/chevronUp'

class Footer extends React.Component {
  render() {

    return (

      <MDBFooter color="blue" className="font-small">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="p-4 mx-auto" style={{width: '90%'}}>
            <MDBCol xs="12" md={4}>
              <div>
                <img className="logofooter" src={logofooter} />
              </div>

            </MDBCol>
            <MDBCol xs="12" md={4}>
              <div className="title text-center">Mercadeo Virtual</div>
              <br />
              <div className="tst text-center">

                <p>
                  Somos proveedores de Soluciones de Sistemas de <br />
                  Información (web / móviles) que integran su negocio <br />
                  con sus clientes y proveedores con un solo clic.
                 </p>

              </div>
            </MDBCol>
            <MDBCol xs="12" md={4}>

              <div className="title text-center">
                <p>Enlaces de Interés</p>
              </div>
              <div className="tst text-center">
                <p>Mercadeo Virtual <br />
                  Red de Negocios <br />
                  Escuela de la Carne</p>
              </div>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center">
          <MDBContainer fluid className="footerinfo d-flex">
            <Col xs={11} md={11} ><a className='Copyright'> Copyright © 2019 Mercadeo Virtual. Todos los derechos reservados </a>
            </Col>
            <Col xs={1} md={1} className='boton-up'>
              <div className='bg-white text-dark boton' style={{width: '40%', height: '30px'}} onClick={this.props.bottomClick}>
              <Icon icon={chevronUp} className='pt-1'/>
              </div>
            </Col>
            
          </MDBContainer>
        </div>

      </MDBFooter>

    );
  }
}

export default Footer;