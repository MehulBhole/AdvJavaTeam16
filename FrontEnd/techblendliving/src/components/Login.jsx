import React, { useState } from "react";
import "../Css/Login.css"; 
import { sendLoginData } from "../services/User";

export function Login() {
  const[userlogin , setUserlogin] =useState({Email:"",Password:""}) ;
  const handleChange = (e)=>{
      setUserlogin({...userlogin,[e.target.name]:e.target.value});
      console.log(userlogin);
  }
  const handleSubmit=async(e)=>{
    try {
      const response = await sendLoginData(userlogin);
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }
  return (
   
      <body class="loginbody">
        <div className="login-container">
          <h1>Login</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label >Email ID</label>
            <input type="text"  name="Email" onChange={handleChange} required />

            <label >Password</label>
            <input type="password"  name="Password" required />

            <center>
              <button className="nxtbtn" type="submit">
                Next
              </button>
            </center>
          </form>
          <div className="or-separator">
            <br />
            <hr />
            <center>OR</center>
            <br />
          </div>
          <div className="login-options">
            <a href="#" className="login-google">
              <p>Login with Google</p>
              <img
                src="https://img.icons8.com/?size=48&id=17949&format=png"
                alt="lol"
              />
            </a>
          </div>
        </div>
        <div className="Foot">
          <center>
            <p>
              New here? <a href="#">Sign Up</a>
            </p>
          </center>
        </div>
      </body>
   
  );
}
