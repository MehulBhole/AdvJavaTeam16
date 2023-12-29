import React, { useState } from "react";
import "../Css/RegistrationUser.css";
import axios from "axios";
import { sendUserData } from "../services/User";

export function RegistrationUser() {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [userData, setUserData] =
    useState({ Name: "", Email: "", Password: "", Phone: "", City: "" });
  const handleToggleSwitch = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };
  const handleChange = (e)=> {
        setUserData({...userData,[e.target.name]:e.target.value});
        console.log(userData);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      console.log(userData);
       const response = await sendUserData(userData);
       console.log(response);      
     } catch (error) {
      console.log(error);
     }
  };

  return (
    <div className="userContainer">
      <div class="Reg-container">
        <h1>Register</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="toggle-switch-container">
            <label htmlFor="toggle-switch">Owners</label>
            <br />
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="toggle-switch"
                checked={showAdditionalFields}
                onChange={handleToggleSwitch}
              />
              <label htmlFor="toggle-switch"></label>
            </div>
          </div>

          <br />
          <label>Name</label>
          <input type="text" name="Name" onChange={handleChange} required></input>

          <label>Email ID</label>
          <input type="text" name="Email"  onChange={handleChange}required></input>

          <label>Password</label>
          <input type="text" name="Password"onChange={handleChange} required></input>

          <label>Phone Number</label>
          <input type="text" name="Phone"  onChange={handleChange} required></input>

          <label for="email">City</label>
          <input type="text" name="City" onChange={handleChange} required></input>

          <center>
            <button className="nxtbtn" type="submit">
              Next
            </button>
          </center>
        </form>
        <div class="or-separator">
          <br />
          <hr />
          <center>OR</center>
          <br />
        </div>
        <div class="login-options">
          <a href="#" class="login-google">
            <p>Register with google </p>
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
            New here ? <a href="#">Sign Up</a>
          </p>
        </center>
      </div>
    </div>
  );
}
