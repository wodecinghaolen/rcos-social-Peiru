import React from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log('onSucess:', data);
            },

            onFailure: err => {
                console.log('onFailure:', err);
            },

            newPasswordRequired: data => {
                console.log('newPasswordRequired:', data);
            }
        });
    }

    return (
        <div>
            
        </div>
    )
}

export default Login
