import React, { useState } from "react";

import './sign-up.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { signUpStart } from './../../redux/user/user.actions';
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const { displayName, email, password, confirmPassword } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()


        if (password !== confirmPassword) {
            alert("Password and confirm Password don't Match");
            return;
        }

        signUpStart({ displayName, email, password })

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
    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value })
    }
    return (
        <div className="sign-up">
            <h2 className="title">I don't have any account</h2>
            <span>sign up with your E-mail and Password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required />
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="E-mail"
                    required />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit" >SIGN UP</CustomButton>

            </form>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);