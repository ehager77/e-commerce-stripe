import React from 'react'
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState = {username:'', password:''}
    }

    handleChange = (event) =>{
        const {value, name} = event.target;

        this.setState({[name]:value})

    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email/phone number and password</span>

                <form onSubmit={this.handleSubmit}>
                    <label>Email/Phone Number</label>
                    <input 
                    name='username' 
                    type='email' 
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                    />
                    <label>Password</label>
                    <input 
                    name='password' 
                    type='password' 
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    />
                    <input type='submit' value='submit form'/>

                </form>
            
            </div>

        )
    }
}

export default SignIn;