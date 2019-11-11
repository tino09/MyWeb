import React from 'react';
import './App.css';
import { Header, Navigation, Drawer, Content, Layout } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (

      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}}
        to="/">AyimValentine.js</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="header-color" title={<Link style={{textDecoration:'none', color:'black'}}
        to="/">My Portfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    
  );
}

export default App;
