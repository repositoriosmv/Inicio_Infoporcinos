import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container, Col, Row } from "react-bootstrap";
import logofooter from "../icons/logo-mv.svg";

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol xs="12" md="4">
              <div>
                <img className="logofooter" src={logofooter} />
              </div>
            </MDBCol>
            <MDBCol xs="12" md="4">
              <div className="title">Mercadeo Virtual</div>
              <br />
              <div className="tst">
                <p>
                  Somos proveedores de Soluciones de Sistemas de <br />
                  Información (web / móviles) que integran su negocio <br />
                  con sus clientes y proveedores con un solo clic.
                </p>
              </div>
            </MDBCol>
            <MDBCol xs="12" md="4">
              <ul>
                <div className="tt">
                  <p>Enlaces de Interés</p>
                </div>
                <div className="tst">
                  <p>Mercadeo Virtual</p>
                </div>
                <div className="tst">
                  <p>Red de Negocios</p>
                </div>
                <div className="tst">
                  <p>Escuela de la Carne</p>
                </div>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center">
          <MDBContainer fluid className="footerinfo">
            <a>
              {" "}
              Copyright © 2019 Mercadeo Virtual. Todos los derechos reservados{" "}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
