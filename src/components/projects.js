import React, { Component } from 'react';
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'


class Projects extends Component {

    constructor(props){
        super(props)
        this.state = {activeTab: 0};
    }

    toggleCategories=()=>{
         if (this.state.activeTab===0){
             return (
                <div className="project-grid">
                 {/*Project 1*/}
               <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background: 'black' }}> 
                React Project #1
                </CardTitle>
                <CardText>
                    This is a online shopping cart that totals and presents final 
                    shopping list before proceeding
                    to checkout
                </CardText>
                <CardActions border>
                    <Button colored> Github</Button>
                    <Button colored> CodePen </Button>
                    <Button colored> LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
               </Card>

                {/*Project 2*/}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background: 'black' }}> 
                React Project #2
                </CardTitle>
                <CardText>
                    This is a online shopping cart that totals and presents final 
                    shopping list before proceeding
                    to checkout
                </CardText>
                <CardActions border>
                    <Button colored> Github</Button>
                    <Button colored> CodePen </Button>
                    <Button colored> LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
               </Card>

                {/*Project 3*/}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background: 'black' }}> 
                React Project #3
                </CardTitle>
                <CardText>
                    This is a online shopping cart that totals and presents final 
                    shopping list before proceeding
                    to checkout
                </CardText>
                <CardActions border>
                    <Button colored> Github</Button>
                    <Button colored> CodePen </Button>
                    <Button colored> LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"/>
                </CardMenu>
               </Card>
               </div>
                )
         }else if(this.state.activeTab=== 1){
             return(
                <div><h1>This is Angular</h1></div>
             )
         }else if(this.state.activeTab === 2){
             return(
                <div><h1>This is Vue</h1></div>
             )
         }else if(this.state.activeTab === 3){
             return(
                <div><h1>This is MongoDB ed</h1></div>
             )
         }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>VueJs</Tab>
                <Tab>MongoDB</Tab>
                </Tabs>

                
                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }

}

export default Projects;