import React, { useState } from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //function for login
    const signIn = e => {
        e.preventDefault(); // this stops refresh!!
        //then the logic for login
        auth
          .signInWithEmailAndPassword(email, password)
          .then(auth => {
            //login...redirect to homepage....
            history.push('/')
            
          })
          .catch(error => alert(error.message));
      };


    //function for register
    const register = e => {
        e.preventDefault(); // this stops refresh!!

        //then the logic for login
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
        //create a user and login, redirect to homepage
        console.log(auth);
        if (auth) {
            history.push('/')
        }
        
        })
        .catch(error => alert(error.message));
    };


    return (
        <div className="login">
            <Link to="/">
            <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
            />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        
                    />
                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        
                    />
                    <button onClick={signIn} type="submit" className="login__signInButton">
                        Sign In
                    </button>
                </form>
                <p>
                    By Signing-in you agree to AMAZON'S FAKE CLONE Conditions of Use & Sale. PLease
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Acts
                    Notice.
                </p>
                <button onClick={register} className="login__registerButton">
                    Create your fake Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
