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
        <h1>Hello, world!</h1>
        <p className='hero-text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </p>
        <br />
        <br />
        <p>
          <MuiThemeProvider theme={theme}>
            <button className='hero-btn'>
              <a href='/shop'><span>Shop Now</span></a>
            </button>
          </MuiThemeProvider>
        </p>
      </Col>
    </Row>
  </Jumbotron>

)

export default Hero;

