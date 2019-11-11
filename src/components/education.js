import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl/lib/Grid';

class Education extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell col={4} >
                        
                        <p>{this.props.startYear} - {this.props.endYear} </p>
                    </Cell>
                    <Cell col={8} >
                        <h5 style={{marginTop:'0px', }}>{this.props.schoolName}</h5>
                        <hr style={{borderTop:'3px solid #833fb2', width:'40%'}}/>
                        <p>{this.props.certificate}</p>
                        <p>{this.props.certificate1}</p>
                        
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Education;