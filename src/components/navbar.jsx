import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
          <nav class="navbar navbar-expand-lg bg-dark">
          <img src="https://media.istockphoto.com/photos/letter-v-neon-light-full-isolated-on-black-picture-id690557720?k=6&m=690557720&s=612x612&w=0&h=S3NWeJWUhVdEIytT3mlIx7i2dUBqSLrQl6N1LCq28DU=" href="https://valentineayim.com.ng/" padding="5px" width="30" height="30" class="d-inline-block align-top" alt="" />
        <a class="navbar-brand nav-title" href="https://valentineayim.com.ng/">ValentineAyim.js</a>
        <button class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNavDropdown" 
        aria-controls="navbarNavDropdown" 
        aria-expanded="false" 
        aria-label="Toggle navigation">

          <span class="navbar-toggler-icon text-white" >Menu</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <Link to="/landing" exact>
            <li class="nav-item active">
              <a class="nav-link text-uppercase ml-5" href="#">Home&nbsp; <i class="fa fa-home"></i> <span class="sr-only">(current)</span></a>
            </li>
            </Link>
            
            <Link to="/portfolio" exact>
            <li class="nav-item">
              <a class="nav-link nav-link text-uppercase ml-5" href="#">Portfolio&nbsp; <i class="fa fa-book"></i></a>
            </li>
            </Link>
            <Link to="/contact" exact >
            <li class="nav-item">
              <a class="nav-link nav-link text-uppercase ml-5" href=""> Contact&nbsp; <i class="fa fa-phone"></i> </a>
            </li>
            </Link>
          </ul>
        </div>
      </nav>
         );
    }
}
 
export default Navbar;