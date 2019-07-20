import React from 'react';
import Container from 'react-bootstrap/Container'
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(event)
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(err){
            console.log("There was an error signing in.", err.message);
        }
    };

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
                            name='email'
                            type='email'
                            label='email'
                            value={this.state.email}
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
                            <CustomButton onClick={this.handleSubmit} type='submit'>Sign In</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn style={{'marginLeft': '10%', 'height':'100%'}}>
                                {' '}Sign In With Google{''}
                            </CustomButton>
                        </div>
                </Container>
            </div>

        )
    }
}

export default SignIn;