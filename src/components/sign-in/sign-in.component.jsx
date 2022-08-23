import React from "react";

import './sign-in.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SigInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }
    handleChange = event => {
        const {name,value}=event.target;

        this.setState={[name]: value}
    }
    render(){
        return(
            <div className="sign-in">
                <h2>Alreay have an account</h2>
                <span>sign in with your E-mail and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email"
                    type="email"
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="E-mail"
                    required />
                    <FormInput 
                    name="Password" 
                    type="Password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label="Password"
                    required 
                    />
                    <div className="buttons">
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={SigInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn