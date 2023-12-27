import React from "react";
import "../Css/Login.css"; 

export function Login() {
  return (
    <html>
      <body class="loginbody">
        <div className="login-container">
          <h1>Login</h1>
          <br />
          <form>
            <label htmlFor="email">Email ID</label>
            <input type="text" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

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
    </html>
  );
}
