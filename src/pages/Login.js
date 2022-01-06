import React from 'react'
import uncLogo from "../assets/unc.logo.png";
import "../styles/Login.css";

function Login() {
    return (
        <div className="login">
            <div 
                 className="leftSide"
                 style={{backgroundImage: `url(${uncLogo})`}}
            ></div>
            <div className="rightSide">
                <h1> Login</h1>

                <form id="login-form" method="POST">
                    <label for="uid">User ID</label>
                    <input name="userId" placeholder="Enter User ID...." required/>
                    <label for="psw">Password</label>
                    <input name="psw" placeholder="Enter Password...." required/>

                    <button type="submit"> LOGIN </button>
                </form>
            </div>
        </div>
    );
}

export default Login
