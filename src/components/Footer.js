
import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logofooter from '../icons/logo-mv.svg'

class Footer extends React.Component {

  render() {

    return (
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">

          <div >
            <img className="logof" src={logofooter} />
          </div>

          <MDBRow>
            <MDBCol md="6" className="firstdiv">
              <div className="title">Mercadeo Virtual</div>

              <div className="tst">

                <p>
                  Somos proveedores de Soluciones de Sistemas de <br />
                  Información (web / móviles) que integran su negocio <br />
                  con sus clientes y proveedores con un solo clic.
            </p>

              </div>

            </MDBCol >
            <MDBCol md="2" className="secondiv">
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
                  <p >Escuela de la Carne</p>
                </div>
              </ul>
            </MDBCol>
          </MDBRow>


        </MDBContainer>

        <MDBContainer fluid className="f" >

          <div className="tstfoot">

            <p> Copyright © 2019 Mercadeo Virtual. Todos los derechos reservados. </p>

          </div>

          <div>
          <span className="ir-arriba"></span>
          </div>


        </MDBContainer>

      </MDBFooter>

    );
  }
}

export default Footer;