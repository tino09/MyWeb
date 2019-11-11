import React, { Component } from 'react';
import {Grid, Cell, } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div>
                            <img
                            src="https://cdn.dribbble.com/users/122170/screenshots/579231/dribble-portrait-2.png"
                            alt="Valentine avatar"
                            style={{height:'160px', borderRadius: '30%'}}

                            />
                        </div>
                        <h2 style={{paddingTop: ''}} >Ayim Valentine</h2>
                        <h4 style={{color:'grey'}}>FullStack Web Developer</h4>
                        <hr />
                        <p >I am a skilled JavaScript developer with knowledge of object oriented
                             programming, I have developed a feel for fluid and easy to use user
                             interfaces I have been developing Applications on the web for 4 
                             years and counting, I have a passion for engineering Web and Mobile
                             Applications users will find seamless. I am Proficient with React.js, 
                             React Native, Nodejs, MySql etc Developing web components with standard workflows 
                             and best practices.</p>
                             <hr />
                             <h6>Email</h6>
                             <p style={{fontSize:'20px'}} >ayimval@gmail.com</p>
                            
                             <h6>Phone</h6>
                             <p style={{fontSize:'20px'}} >08167817259</p>
                             <hr />

                             <br />
                             <h2>Skills</h2>
                    
                    <Skills
                    skill="JavaScript"
                    progress={50}
                    buffer={85}
                    />

                    <Skills
                    skill="ReactJs"
                    progress={55}
                    buffer={90}
                    />

                    <Skills
                    skill="NodeJS"
                    progress={40}
                    buffer={65}
                    />

                    <Skills
                    skill="ReactNative"
                    progress={20}
                    buffer={65}
                    />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <div>
                        <h3 style={{marginTop:'5px', }}>Education</h3>
                            <Education 
                            startYear={2012}
                            endYear={2016}
                            schoolName="Afe Babalola University"
                            certificate="B.sc Computer Science"
                            certificate1="Cisco CCENT (CCNA in View)"
                            
                            />

                            <hr style={{borderTop: '3px solid #e22947'}}/>

                            <h3>Experience</h3>

                            <Experience 
                            startYear={2018}
                            endYear={2019}
                            companyName="CMart Distribution Lekki"
                            jobPosition="(Web Developer)"
                            jobDescription="Develop frontend architecture React.js, Node.js, MySql."
                            jobDescription1="Creating servers and databases for functionality"
                            jobDescription2="Doubling as a graphic and video creator"
                            jobDescription3="Ensuring responsiveness of Web Application"
                            />

                            <Experience 
                            startYear={2016}
                            endYear={2018}
                            companyName="Upperlink Limited"
                            jobPosition="(Web Support Staff)"
                            jobDescription="Develop and Maintain UI components using HTML/CSS, JavaScript React.js Framework"
                            jobDescription1="Troubleshooting customer logs for web component errors "
                            jobDescription2="Troubleshooting DNS, Server, web services, WHM, FTP, Domain tasks."
                            jobDescription3="Nodejs Server side, Linux essentials, Mysql Database Admin"
                            />
                            
                            <Experience 
                            
                            endYear={2018}
                            companyName="Brelix Digital Marketing"
                            jobPosition="(Web Developer)"
                            jobDescription="Develop Websites Wordpress, PHP, MySql"
                            jobDescription1="Design and monitor all digital Ads on all major platforms Using various SEO tools"
                            jobDescription2=" Collect related data for better user interaction using google Analytics, yoast etc"
                            jobDescription3="Ensuring responsiveness of all Web Client Applications"
                            />
                            
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Resume;