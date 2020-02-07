import React, { Component } from 'react';

class Portfolio extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container portfolio">
                <div class="row">
                <div class="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                <div class="card-body">
                <h5 class="card-title">Vapay</h5>
                <h6 class="card-subtitle mb-2 text-muted">ReactJS/Stripe API</h6>
                <p class="card-text">This a frontend payment processing application using reactJS stripe elements to build the payment interaction platform.</p>
                <button class="btn-primary"><a href="https://github.com/tino09/VaPay" target="blank" class="card-link">Github</a></button>
                
                </div>
                </div>
                <div class="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                <div class="card-body">
                <h5 class="card-title">Web Scrapper</h5>
                <h6 class="card-subtitle mb-2 text-muted">ReactJS/NodeJS/Puppetteer</h6>
                <p class="card-text">This script is written in Node.js to scrape data from a web resource from craigslist using puppeteer library on npm.</p>
                <button class="btn-primary"><a href="https://github.com/tino09/Web-Scraper" target="blank" class="card-link">Github</a></button>
                
                </div>
                </div>
                <div class="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                <div class="card-body">
                <h5 class="card-title">Meme-Generator</h5>
                <h6 class="card-subtitle mb-2 text-muted">ReactJS</h6>
                <p class="card-text">Frontend was designed using HTML, CSS, React-Material UI. meme api to fetch images and add text</p>
                <button class="btn-primary"><a href="https://github.com/tino09/Meme-Generator" target="blank" class="card-link">Github</a></button>
                
                </div>
                </div>
                <div class="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                <div class="card-body">
                <h5 class="card-title">pizzaDeliveryApp</h5>
                <h6 class="card-subtitle mb-2 text-muted">Java/ Android Studio</h6>
                <p class="card-text">This project was built & tested using Android Studio, Android Emulators and Firebase. The Customers select order </p>
                <button class="btn-primary"><a href="https://github.com/tino09/PizzaApp" target="blank" class="card-link">Github</a></button>
                
                </div>
                </div>
                <div class="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                <div class="card-body">
                <h5 class="card-title">Shopping Cart</h5>
                <h6 class="card-subtitle mb-2 text-muted">JavaScript</h6>
                <p class="card-text">The Frontend user interaction of an Add to CART shopping list this project will built with HTML, CSS, BOOTSTRAP & ReacJS. </p>
                <button class="btn-primary"><a href="https://github.com/tino09/Registry-Counter-App" target="blank" class="card-link">Github</a></button>
                
                </div>
                </div>
                <div class="card col-lg-4 col-md-6 col-sm-12" style={{width: "18rem"}}>
                <div class="card-body">
                <h5 class="card-title">iSavers</h5>
                <h6 class="card-subtitle mb-2 text-muted">React Native</h6>
                <p class="card-text">Frontend Application prototype used to plan & organize your personal savings</p>
                <button class="btn-primary"><a href="https://github.com/tino09/iSavers-" target="blank" class="card-link">Github</a></button>
                
                </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Portfolio;