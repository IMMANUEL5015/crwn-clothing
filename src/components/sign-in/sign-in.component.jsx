import {Component} from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = e => {
        e.preventDefault();
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        id="email" 
                        required
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />

                    <FormInput 
                        type="password" 
                        name="password" 
                        id="password" 
                        required
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />

                    <div className="buttons">
                      <CustomButton type="submit">
                        Sign In
                      </CustomButton>

                      <CustomButton
                        isGoogleSignIn 
                        onClick={signInWithGoogle}>
                        Sign In With Google
                      </CustomButton>  
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;