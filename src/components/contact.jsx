import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid contact-body">
               <div className="row contact-grid space-around">
                   <div className="col-lg-6 col-md-12 col-sm-12">
                    <h2>Ayim Valentine</h2>
                    <img
                    src="https://instagram.flos3-1.fna.fbcdn.net/vp/a40e6ed8ba54142df0fddbd6610c405e/5E3F1E68/t51.2885-15/e35/p1080x1080/67724557_103009144295295_8270920494844763872_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=103"
                    alt="Ayim Valetine"
                    style={{height: '350px'}}                        
                    />
                    <p style={{width:'75%', margin: 'auto', paddingTop:'1em'}}> 
                    Contact me about your awesome project</p>

                   </div>
                   <div  className="contact-list text-center col-lg-4 col-md-12 col-sm-12" >
                       <h2>Contact Me</h2>
                       <hr/>
                       
                           <ul>
                           <li>
                               <div> 
                                <a href="tel:=+2348167817259"><i className="fa fa-phone-square" style={{color:'green'}} aria-hidden="true" />+(234)81 678 17259</a></div>
                            </li>
                            <li>
                               <div > 
                                <a href="mailto:ayimval@gmail.com"><i className="fa fa-envelope-square" style={{color:'red'}} aria-hidden="true" />ayimval@gmail.com</a></div>
                            </li>
                            <li>
                               <div > 
                                <a href="https://skype.com/"><i className="fa fa-skype" style={{color:'blue'}} aria-hidden="true" />+(234)81 678 17259</a></div>
                            </li>
                       </ul>
                      
                       
                   </div>
                </div> 
            </div>
         );
    }
}
 
export default Contact;