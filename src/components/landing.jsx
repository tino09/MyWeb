import React, { Component } from 'react';

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
                <div className="container landing">
                    <div class="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 avatar-img">
                            <img className="img-fluid rounded" src="https://cdn.dribbble.com/users/122170/screenshots/579231/dribble-portrait-2.png" alt="" srcset=""/>
                            <h5 style={{textAlign:"center"}}>I design Industry standard Web & Mobile Apps with exceptional user experience</h5>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 banner-text">
                        <h1>Software Developer</h1>
                            
                            <p style={{fontSize:"2vw"}}> HTML/CSS | JavaScript | React | React Native | Nodejs | Express | MySql</p>
                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/valentine-ayim-84b085103/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" style={{color:"#0e76a8"}}aria-hidden="true" />
                                </a>
                                

                                {/*Github*/}
                                <a href="http://github.com/tino09" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" style={{color:"black"}}aria-hidden="true" />
                                </a>
                                
                                
                                {/*Free code camp*/}
                                <a href="http://twitter.com/val_tinno" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" style={{color:"lightblue"}}aria-hidden="true" />
                                </a>
                                

                                {/*Youtube*/}
                                <a href="https://www.youtube.com/channel/UC_sYH6OgV9ahqwMecbepOFQ?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" style={{color:"#c4302b"}} aria-hidden="true" />
                                </a>
                                </div>
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default Landing;