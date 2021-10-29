import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Context/useAuth/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoole } = useAuth()
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/';




    const handleGoogleLogin = () => {
        signInUsingGoole()
            .then(result => {
                history.push(redirect_uri)

            })
    }


    return (
        <div className="font login-container">
            <Container>
                <h2 className="text-warning">Welcome to our Website.</h2>
                <p>Please Login for Continue..</p>
                <hr />
                <br />
                <button className="btn-primary font" onClick={handleGoogleLogin} ><i className="fab fa-google">    <span className="font mx-3">Log in Using Google</span></i></button>
            </Container>
        </div>
    );
};


export default Login;