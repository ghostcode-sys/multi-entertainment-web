import React from 'react';
import loginb from '../images/loginb.png';
import signimg from '../images/download.png';

function Login() {
    return (
        <div className="container_form">
            <h1>LOGIN</h1>
            <div className="box_form">
                <form className="signup">
                    <input type="text" name="uname" placeholder="User name" />
                    <input type="password" name="passwd" placeholder="password" />
                    <button type="submit"><img src={loginb} alt="login"/></button>
                </form>
                <img src={signimg} alt="man with phone"/>
            </div>
        </div>
    )
}

export default Login
