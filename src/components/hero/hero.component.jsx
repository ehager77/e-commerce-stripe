import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import './hero.styles.scss';
import theme from '../../theme';

const Hero = () => (

  <Jumbotron className='hero-image'>
    <Row className='jumbo-row'>
      <Col md={8} lg={8}>
        <h1>Welcome To My Store</h1>
        <p className='hero-text'>
        I was built with React, Redux and a Firebase 'back-end'.  
        I can also accept payments via Stripe's API.
        Please click 'Sign Up' to get started or browse the site with the directory below. 
        </p>
        <br />
        <br />
        <p>
          <MuiThemeProvider theme={theme}>
            <button className='hero-btn'>
              <a href='/signin'><span>Sign Up</span></a>
            </button>
          </MuiThemeProvider>
        </p>
      </Col>
    </Row>
  </Jumbotron>

)

export default Hero;

