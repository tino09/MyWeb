import React, { Component } from 'react';
import { ProgressBar } from 'react-mdl';

class Skills extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="progress-bar">

            <h5>{this.props.skill}</h5>
            <br />
            <ProgressBar  progress={this.props.progress}
             buffer={this.props.buffer}/>
            </div>
         );
    }
}
 
export default Skills;