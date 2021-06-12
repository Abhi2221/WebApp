import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Component/Home';
import {Redirect, Route, Switch} from 'react-router-dom';
import Services from './Component/Services';
import About from './Component/About';
import Contact from './Component/Contact';
import NavBar from './Navigation/NavBar';

const App = () => {
  return (
    <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
   
    </div>
  );
}

export default App;
