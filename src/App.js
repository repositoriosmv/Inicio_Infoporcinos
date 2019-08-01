import React from 'react';
import NavbarTest from './components/menu.js';
import Footer from './components/Footer.js';
import '../src/css/content-style.css';
import pigs from '../src/images/1.png';
import logo from '../src/icons/logo.svg';
import desktop from '../src/images/Mockup-Mac.png';
import { Navbar, Nav } from 'react-bootstrap';
import key from '../src/icons/key.svg';
import process from '../src/icons/process.svg';
import pass from '../src/icons/pass.svg';
import pen from '../src/icons/pen.svg';
import check from '../src/icons/check.svg';
import user from '../src/icons/user.svg';
import update from '../src/icons/update.svg';


class App extends React.Component {

  render() {
    return (
  
      <div>

<NavbarTest />

<Footer />

      </div>
//       <div className="slidegeneral">

// <NavbarTest />

//         <div className="slideinfoporc">
//           <div className="nav2">
//             <Navbar>

//               <div className="logop">
//                 <img src={logo} />
//               </div>

//               <div className="Buttons">
//                 <a line-height="24px">inicio</a>
//                 <a>Sobre Nosotros</a>
//                 <a>Servicios</a>
//                 <a>Preguntas Frecuentes</a>
//                 <a>Contacto</a>
//                 <div className="einteresado">Estoy Interesado</div>
//                 <div className="iniciarses">Iniciar Sesion</div>

//               </div>


//             </Navbar>

//           </div>

//           <div >

//             <img className="pigsinicio" src={pigs} />

//             <img className="desk" src={desktop} />

//             <div className="t1">APROVECHA AL MÁXIMO TODOS TUS RECURSOS </div>
//             <div className="t2">El mejor sistema de <br />
//               información  </div>
//             <div className="t3">para tu negocio</div>
//           </div>


//           <div className="t4">Trazabilidad en Tiempo Real</div>
//           <div className="t5">Acerca de Infoporcinos</div>
//           <div className="t6">

//             <p>

//               Somos la mejor plataforma de Información para el sector de la carne de cerdo. Buscamos crear e <br />
//               innovar en las nuevas tecnologías para integrar, intermediar e informar en Tiempo Real (TR) las condiciones <br />
//               técnicas de calidad de la carne de porcinos.

//              </p>

//           </div>

//           <div className="ButtonAcerca"> VER MAS </div>

//           <div className="container2">

//             <div className="text10">185</div>
//             <div className="text11">3,486,969</div>
//             <div className="text12">12</div>
//             <div className="text13">GRANJAS ACTIVAS EN EL SISTEMA</div>
//             <div className="text14">CANALES CALIENTES<br />PORCINOS EVALUADOS</div>
//             <div className="text15">AÑOS EN EL MERCADO</div>
//           </div>

//           <div className="container1">

//           </div>

//           <div className="text16"> Aprovecha al máximo cada recurso y optimiza los procesos con nuestras ventajas competitivas </div>

//           <div className="text17"> ¿Qué tenemos </div>

//           <div className="text18"> para ti? </div>


//           <div className="container3">

//             <div className="circulo">
//               <div className="iconos">
//                 <img src={process} />
//               </div>
//             </div>

//             <div className="text19">Sistema de Trazabilidad</div>
//             <div className="text22"> Permite a el control y seguimiento del producto, en cada uno de los procesos. </div>

//           </div>

//           <div className="container4">

//             <div className="circulo">
//               <div className="iconos">
//                 <img src={key} />
//               </div>
//             </div>

//             <div className="text21">Niveles de Acceso </div>
//             <div className="text24"> Divide cada usuario según su rol y permite <br /> acceso a diferentes secciones.</div>

//           </div>

//         </div>

//         <div className="container5">


//           <div className="circulo">
//             <div className="iconos">
//               <img src={pass} />
//             </div>
//           </div>

//           <div className="text20">Claves Únicas</div>
//           <div className="text23">La seguridad de la información de cada <br /> usuario es importante.</div>


//         </div>

              


//           <div class="full-container text-center">
//             <div class="textos">
//               <h5>La Mejor Optimización </h5>
//               <h2>¡Nuestro Nuevo Módulo!</h2>
//             </div>
//             <div class="row">
//               <div class="col-lg-3 col-md-12 col-sm-12">

//                 <div class="muestra">

//                   <div class="item">
//                     <div class="circulo2">
//                       <img class="iconos" src={pen}></img>
//                     </div>
//                     <div class="contenido">
//                       <span class="text">Lorem Ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor.</span>
//                     </div>
//                   </div>

//                   <div class="item">
//                     <div class="circulo2">
//                       <img class="iconos" src={check}></img>
//                     </div>
//                     <div class="contenido">
//                       <span class="text">Lorem Ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor.</span>
//                     </div>

//                   </div>

//                 </div>

//               </div>

//               <div class="col-lg-6 col-md-12 col-sm-12">
//                 <div class="muestra">
//                   <span class="text">imagen ESCRITORIO</span>
//                   <img class="pantalla" src="icons/check.svg"></img>

//                 </div>

//               </div>

//               <div class="col-lg-3 col-md-12 col-sm-12">

//                 <div class="muestra">

//                   <div class="item">
//                     <div class="circulo2">
//                       <img class="iconos" src={user}></img>
//                     </div>
//                     <div class="contenido">
//                       <span class="text">Lorem Ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor.</span>
//                     </div>
//                   </div>

//                   <div class="item">
//                     <div class="circulo2">
//                       <img class="iconos" src={update}></img>
//                     </div>
//                     <div class="contenido">
//                       <span class="text">Lorem Ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor.</span>
//                     </div>

//                   </div>

//                 </div>

//               </div>


//             </div>

//           </div>


        

//         <Footer />

//       </div>

    );
  }

}

export default App;
