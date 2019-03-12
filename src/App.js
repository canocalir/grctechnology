import React, { Component } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navbar/Navbar';
import FireProtection from './components/FireProtection/FireProtection';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <br/>
        <Navigation/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/fire-protection" component={FireProtection} />
        <Route exact path="/contact" component={Contact} />
        
      </div>
      </Router>
    );
  }
}

export default App;
