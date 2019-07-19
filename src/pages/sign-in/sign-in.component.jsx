import React from 'react';
import Container from 'react-bootstrap/Container'
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        this.setState({ username: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })

    }

    render() {
        return (
            <div className='sign-in'>
                <Container>
                    <br />
                    <h2 className='sign-in-text'>I already have an account</h2>
                    <p>Sign in with your email and password</p>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='username'
                            type='email'
                            label='username'
                            value={this.state.username}
                            handleChange={this.handleChange}
                        />
                        <FormInput
                            name='password'
                            type='password'
                            label='password'
                            value={this.state.password}
                            handleChange={this.handleChange}
                        />
                    </form>
                    <div className='buttons'>
                            <CustomButton type='submit'>Sign In</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                                {' '}Sign In With Google{''}
                            </CustomButton>
                        </div>
                </Container>
            </div>

        )
    }
}

export default SignIn;