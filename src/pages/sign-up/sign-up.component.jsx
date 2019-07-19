import React from 'react';
import SignIn from '../sign-in/sign-in.component'
import '../sign-in/sign-in.styles.scss';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const SignUp = () => (
    <div className='sign-up-page'>
        <Row>
            <Col className='sign-in'>
                <SignIn className='sign-in'/>   
            </Col>
            <Col>
                <SignUpForm className='sign-up-form'/>
            </Col>
        </Row>
    </div>
)

export default SignUp;