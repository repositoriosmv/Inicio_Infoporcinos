
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import mailinfo from '../icons/mail.svg'
import phoneinfo from '../icons/phone.svg'

class NavbarTest extends React.Component {

    render() {
        return (
            <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">


<img className="mail" src={mailinfo} />
                <Navbar.Brand href="/" >info@infoporcinos.com</Navbar.Brand>
                <img className="phone" src={phoneinfo} />
                <div className="id">
                    <p>+57 034 0000 000</p>
                </div>


                

            </Navbar>

        );
    }
}

export default NavbarTest;


