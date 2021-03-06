import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'


class Landing extends Component {
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://cdn.dribbble.com/users/122170/screenshots/579231/dribble-portrait-2.png"
                        alt="Valentine avatar"
                        className="avatar-img"
                        
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p> HTML/CSS | JavaScript | React | React Native | Nodejs | Express | MongoDB</p>
                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/valentine-ayim-84b085103/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                

                                {/*Github*/}
                                <a href="http://github.com/tino09" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                
                                
                                {/*Free code camp*/}
                                <a href="http://twitter.com/val_tinno" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>
                                

                                {/*Youtube*/}
                                <a href="https://www.youtube.com/channel/UC_sYH6OgV9ahqwMecbepOFQ?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                                
                            </div>
                        </div>
                          
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Landing;