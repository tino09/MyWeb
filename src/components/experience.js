import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'

class Experience extends Component {
    state = {  }
    render() { 
        return ( 
            <Grid>
                
                <Cell col={4}>
                
                
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                
                <Cell col={8}>
                    <div style={{marginTop:'0px', }}><h5>{this.props.companyName}  {this.props.jobPosition}</h5></div>
                    <hr style={{borderTop:'3px solid #833fb2', width:'65%'}}/>
                    
                    <p>{this.props.jobDescription}</p>
                    <p>{this.props.jobDescription1}</p>
                    <p>{this.props.jobDescription2}</p>
                    <p>{this.props.jobDescription3}</p>
                

                </Cell>
            </Grid>
         );
    }
}
 
export default Experience;