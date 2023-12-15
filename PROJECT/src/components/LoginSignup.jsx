import React, { useState } from 'react'
import '../assets/css/LoginSignup.css';
import user_icon from '../assets/images/person.png';
import user_email from '../assets/images/email.png';
import user_password from '../assets/images/password.png';
const LoginSignup = () => {
    const[action,setAction]=useState("Login");
  return (
    <div className="container">
        <div className="header">
            <div className="text">
            {action}
            </div>
            <div className="underline">

            </div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' id="" />
            </div>}
            
            <div className="input">
                <img src={user_email} alt="" />
                <input type="email" placeholder='Email' id="" />
            </div>
            <div className="input">
                <img src={user_password} alt="" />
                <input type="password" placeholder='Password' id="" />
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password ?<span>Click Here !</span></div>}
       
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Log in</div>
        </div>
    </div>
  )
}

export default LoginSignup