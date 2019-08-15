import React, { Component } from 'react';
// CSS
import './App.css';

// Components
import Home from './components/Pages/Home';
import SobreNosotros from './components/Pages/SobreNosotros';
import Servicios from './components/Pages/Servicios';

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

        </Switch>
   
      </Router>
      
    );
  }
}

export default App;
