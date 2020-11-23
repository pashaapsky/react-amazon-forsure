import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {auth} from "../config/firebase";
import {db} from "../config/firebase";
import "../scss/login.scss"


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (event) => {
        event.preventDefault();

        //firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                if (user) {
                    history.push('/');
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
    };

    const handleRegister = (event) => {
        event.preventDefault();

        //firebase register
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                // registered user -> redirected
                if (user) {
                    history.push('/')
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    return (
        <div className="login">
            <NavLink to="/" className="login__link">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="amazon-logo"
                />
            </NavLink>

            <div className="login__container">
                <h1 className="login__header">Sign-In</h1>

                <form className="login__sign-form" action="">
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button
                        type="submit"
                        className="login__sign-in-btn"
                        onClick={handleSignIn}
                    >
                        Sing In
                    </button>

                    <p>By continuing, you agree to Amazon's
                        <span> Conditions of Use</span> and
                        <span> Privacy Notice.</span>
                    </p>

                    <button
                        type="submit"
                        className="login__register-btn"
                        onClick={handleRegister}
                    >
                        Create your Amazon Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;