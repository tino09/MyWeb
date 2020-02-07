import React, { Component } from 'react';
import reactDom from 'react-dom';

class Skills extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div class="row border justify-content-md-center">
                    <div class="col-sm-12 col-md-6 col-lg-6 row skill">
                    <div class="skill-img">
                        <img src="https://d1e4pidl3fu268.cloudfront.net/70686dc6-a089-4f63-8f1b-ae237d466f56/giphy.gif" 
                        
                        alt="reactjs gif" 
                        srcset=""/>
                    </div>
                    <div id="skill-desc">
                        <h3>ReactJS</h3>
                        <p></p>
                    </div>
                    
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                    2 of 2
                    </div>
                </div>
                <div class="row border">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                    1 of 3
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                    2 of 3
                    </div>
                    
                </div>
                </div>

         );
    }
}
 
export default Skills;