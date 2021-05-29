import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from './../../../App';
import { firebaseConfig } from './fireBase.config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var { displayName, email } = result.user;
                const signInUser = { displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from)

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log('error', errorCode, errorMessage, email, credential);
            });
    }
    return (
       
        <div style={{marginBottom:'318px'}} className="container">
            <h5 className="d-flex justify-content-center pt-5 pb-0">Sign in - Google Account</h5>
            <div className='d-flex justify-content-center'>
            <button className="btn btn-primary"  onClick={handleGoogleSignIn}>
              Continue with Google
            </button>
            </div>
           
        </div>
    );
};

export default Login;