import React from "react";

import './sign-up.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { signUpStart } from './../../redux/user/user.actions';
import { connect } from "react-redux";

class SignUp extends React.Component{
    constructor(){
        super()

        this.state= {
            displayName:'',
            email: '',
            password: '',
            confirmPassword:'',

        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { signUpStart } = this.props
        const { displayName,email,password,confirmPassword } =this.state

        if(password !== confirmPassword){
                alert("Password and confirm Password don't Match");
                return;
            }

        signUpStart({displayName,email,password})

        // if(password !== confirmPassword){
        //     alert("Password and confirm Password don't Match");
        //     return;
        // }
        // try {
        //     const { user } = await  auth.createUserWithEmailAndPassword(
        //         email,
        //         password
        //     );
        //     await createUserProfileDocument(user, {displayName});

        //     this.setState({
        //         displayName:'',
        //         email: '',
        //         password: '',
        //         confirmPassword:'',
        //     });
            
        // } catch (error) {
        //     console.error(error)
            
        // }
    }
    handleChange = event => {
        const {name,value}=event.target;

        this.setState({[name]: value})
    }
    render(){
        const { displayName,email,password,confirmPassword } =this.state
        return(
            <div className="sign-up">
                <h2 className="title">I don't have any account</h2>
                <span>sign up with your E-mail and Password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName} 
                    handleChange={this.handleChange}
                    label="Display Name"
                    required />
                    <FormInput
                    name="email"
                    type="email"
                    value={email} 
                    handleChange={this.handleChange}
                    label="E-mail"
                    required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    handleChange={this.handleChange}
                    label="Password"
                    required 
                    />
                     <FormInput 
                    name="confirmPassword" 
                    type="password" 
                    value={confirmPassword} 
                    handleChange={this.handleChange}
                    label="Confirm Password"
                    required 
                    />
                    <CustomButton type="submit" >SIGN UP</CustomButton>
                    
                </form>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);