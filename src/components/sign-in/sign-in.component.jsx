import React from "react";
import { connect } from "react-redux";

import './sign-in.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, SigInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart,emailSignInStart } from "../../redux/user/user.actions"

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit =async event => {
        event.preventDefault()
        const { emailSignInStart } = this.props
        const {email,password} =this.state;

        emailSignInStart(email,password)
    };
    handleChange = event => {
        const {name,value}=event.target;

        this.setState({[name]: value})
    }
    render(){
        const { googleSignInStart } =this.props
        return(
            <div className="sign-in">
                <h2>Alreay have an account</h2>
                <span>sign in with your E-mail and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email"
                    type="email"
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label="email"
                    required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handleChange} 
                    label="password"
                    required 
                    />
                    <div className="buttons">
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart:(email,password) => dispatch(emailSignInStart({ email,password }))
})

export default connect(null,mapDispatchToProps)(SignIn)