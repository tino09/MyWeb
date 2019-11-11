import React, { Component } from 'react';
import  {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                    <h2>Ayim Valentine</h2>
                    <img
                    src="https://instagram.flos3-1.fna.fbcdn.net/vp/a40e6ed8ba54142df0fddbd6610c405e/5E3F1E68/t51.2885-15/e35/p1080x1080/67724557_103009144295295_8270920494844763872_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=103"
                    alt="Ayim Valetine"
                    style={{height: '350px'}}                        
                    />
                    <p style={{width:'75%', margin: 'auto', paddingTop:'1em'}}> 
                    Contact me let us talk about your awesome project</p>

                   </Cell>
                   <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr/>
                       <div className="contact-list">
                           <List>
                           <ListItem>
                               <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}> 
                               <i className="fa fa-phone-square" aria-hidden="true" />
                                <a href="tel:=+2348167817259">+(234)81 678 17259</a></ListItemContent>
                            </ListItem>
                            <ListItem>
                               <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}> 
                               <i className="fa fa-envelope-square" aria-hidden="true" />
                                <a href="mailto:ayimval@gmail.com">ayimval@gmail.com</a></ListItemContent>
                            </ListItem>
                            <ListItem>
                               <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}> 
                               <i className="fa fa-skype" aria-hidden="true" />
                                <a href="https://skype.com/">+(234)81 678 17259</a></ListItemContent>
                            </ListItem>
                       </List>
                       </div>
                       
                   </Cell>
                </Grid> 
            </div>
        )
    }

}

export default Contact;