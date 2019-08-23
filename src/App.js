import React, { Component } from 'react';
// CSS
import './App.css';

// Components
import Home from './components/Pages/Home';
import SobreNosotros from './components/Pages/SobreNosotros';
import Servicios from './components/Pages/Servicios';
import PreguntasFrecuentes from './components/Pages/PreguntasFrecuentes';
import Contacto from './components/Pages/Contacto';
import Actualizaciones from './components/Pages/Actualizaciones';

// Router
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';





class App extends Component {
  
  render(){
    return (
      <Router>

        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/SobreNosotros" exact component={SobreNosotros}/>
          <Route path="/Servicios" exact component={Servicios}/>
          <Route path="/PreguntasFrecuentes" exact component={PreguntasFrecuentes}/>
          <Route path="/Contacto" exact component={Contacto}/>
          <Route path="/Actualizaciones" exact component={Actualizaciones}/>

        </Switch>
   
      </Router>
      
    );
  }
}

export default App;
