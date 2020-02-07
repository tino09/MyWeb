import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Contact from './components/contact';
import Landing from './components/landing';
import Portfolio from './components/portfolio';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/landing" exact component={Landing}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/portfolio" exact component={Portfolio}></Route>
        <Footer />
      </Router>  
    </div>
  );
}

export default App;



